import assert from "node:assert/strict";
import test from "node:test";
import { verifyWhiteAntConnection } from "../src/shopify.js";

const config = {
  shop: "xbpcuj-5a.myshopify.com",
  clientId: "test-client-id",
  clientSecret: "super-secret-value",
  apiVersion: "2026-07",
};

test("verifies identity and read-only scopes without leaking credentials", async () => {
  const calls = [];
  const fetchMock = async (url, options) => {
    calls.push({ url, options });
    if (url.endsWith("/admin/oauth/access_token")) {
      return jsonResponse(200, { access_token: "test-access-token" });
    }
    return jsonResponse(200, {
      data: {
        shop: {
          id: "gid://shopify/Shop/101526143302",
          name: "WHITE ANT SCANDINAVIA",
          myshopifyDomain: "xbpcuj-5a.myshopify.com",
          primaryDomain: {
            host: "whiteantscandinavia.com",
            url: "https://whiteantscandinavia.com",
          },
        },
        currentAppInstallation: {
          accessScopes: [
            { handle: "read_products" },
            { handle: "read_inventory" },
          ],
        },
      },
    });
  };

  const result = await verifyWhiteAntConnection(config, fetchMock);
  assert.equal(result.verified, true);
  assert.equal(result.shop.myshopifyDomain, config.shop);
  assert.deepEqual(result.scopes, ["read_inventory", "read_products"]);
  assert.equal(result.mutationsAvailable, false);
  assert.equal(JSON.stringify(result).includes(config.clientSecret), false);
  assert.equal(calls.length, 2);
  assert.match(String(calls[0].options.body), /grant_type=client_credentials/);
  assert.equal(
    calls[1].options.headers["X-Shopify-Access-Token"],
    "test-access-token",
  );
});

test("fails closed when Shopify returns another shop", async () => {
  const fetchMock = sequence(
    jsonResponse(200, { access_token: "test-access-token" }),
    jsonResponse(200, {
      data: {
        shop: { myshopifyDomain: "another-brand.myshopify.com" },
        currentAppInstallation: { accessScopes: [{ handle: "read_products" }] },
      },
    }),
  );
  await assert.rejects(
    () => verifyWhiteAntConnection(config, fetchMock),
    /Wrong Shopify shop/,
  );
});

test("fails closed when a write scope is present", async () => {
  const fetchMock = sequence(
    jsonResponse(200, { access_token: "test-access-token" }),
    jsonResponse(200, {
      data: {
        shop: { myshopifyDomain: config.shop },
        currentAppInstallation: {
          accessScopes: [
            { handle: "read_products" },
            { handle: "write_products" },
          ],
        },
      },
    }),
  );
  await assert.rejects(
    () => verifyWhiteAntConnection(config, fetchMock),
    /write_products/,
  );
});

test("does not include a secret in API errors", async () => {
  const fetchMock = async () =>
    jsonResponse(401, { errors: [{ message: "invalid client credentials" }] });
  await assert.rejects(
    () => verifyWhiteAntConnection(config, fetchMock),
    (error) =>
      !error.message.includes(config.clientSecret) && /401/.test(error.message),
  );
});

function jsonResponse(status, payload) {
  return {
    ok: status >= 200 && status < 300,
    status,
    async json() {
      return payload;
    },
  };
}

function sequence(...responses) {
  let index = 0;
  return async () => responses[index++];
}
