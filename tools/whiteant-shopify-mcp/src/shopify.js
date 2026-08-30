const VERIFY_QUERY = `#graphql
  query WhiteAntConnectionPreflight {
    shop {
      id
      name
      myshopifyDomain
      primaryDomain {
        host
        url
      }
    }
    currentAppInstallation {
      accessScopes {
        handle
      }
    }
  }
`;

export async function verifyWhiteAntConnection(config, fetchImpl = fetch) {
  const token = await getAccessToken(config, fetchImpl);
  const response = await fetchImpl(
    `https://${config.shop}/admin/api/${config.apiVersion}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": token,
      },
      body: JSON.stringify({ query: VERIFY_QUERY }),
    },
  );
  const payload = await readJson(response, "Shopify GraphQL request");

  if (!response.ok || payload.errors?.length) {
    throw new Error(
      safeApiError("Shopify GraphQL request failed", response, payload),
    );
  }

  const shop = payload.data?.shop;
  const actualDomain = shop?.myshopifyDomain?.toLowerCase();
  if (actualDomain !== config.shop) {
    throw new Error(
      `Wrong Shopify shop returned. Expected ${config.shop}, received ${actualDomain || "missing identity"}.`,
    );
  }

  const scopes = (payload.data?.currentAppInstallation?.accessScopes || [])
    .map(({ handle }) => handle)
    .filter(Boolean)
    .sort();
  const writeScopes = scopes.filter((scope) => scope.startsWith("write_"));
  if (writeScopes.length) {
    throw new Error(
      `Connection is not read-only. Remove scopes: ${writeScopes.join(", ")}.`,
    );
  }

  return {
    verified: true,
    brand: "WHITE ANT SCANDINAVIA",
    environment: "production-admin-read-only",
    shop: {
      id: shop.id,
      name: shop.name,
      myshopifyDomain: actualDomain,
      primaryDomain: shop.primaryDomain,
    },
    scopes,
    apiVersion: config.apiVersion,
    mutationsAvailable: false,
  };
}

async function getAccessToken(config, fetchImpl) {
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: config.clientId,
    client_secret: config.clientSecret,
  });
  const response = await fetchImpl(
    `https://${config.shop}/admin/oauth/access_token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    },
  );
  const payload = await readJson(response, "Shopify token request");

  if (!response.ok || !payload.access_token) {
    throw new Error(
      safeApiError("Shopify token request failed", response, payload),
    );
  }
  return payload.access_token;
}

async function readJson(response, label) {
  try {
    return await response.json();
  } catch {
    throw new Error(
      `${label}: Shopify returned a non-JSON response (${response.status}).`,
    );
  }
}

function safeApiError(label, response, payload) {
  const messages = (payload.errors || [])
    .map((error) => (typeof error === "string" ? error : error.message))
    .filter(Boolean)
    .slice(0, 3);
  return `${label} (${response.status})${messages.length ? `: ${messages.join("; ")}` : "."}`;
}
