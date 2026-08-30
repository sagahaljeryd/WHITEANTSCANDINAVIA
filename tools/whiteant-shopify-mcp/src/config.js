export const ALLOWED_SHOP = "xbpcuj-5a.myshopify.com";
export const DEFAULT_API_VERSION = "2026-07";

export function loadConfig(env = process.env) {
  const shop = normalizeShop(env.SHOPIFY_SHOP);
  const clientId = required(env.SHOPIFY_CLIENT_ID, "SHOPIFY_CLIENT_ID");
  const clientSecret = required(
    env.SHOPIFY_CLIENT_SECRET,
    "SHOPIFY_CLIENT_SECRET",
  );
  const apiVersion = env.SHOPIFY_API_VERSION?.trim() || DEFAULT_API_VERSION;

  if (shop !== ALLOWED_SHOP) {
    throw new Error(
      `Refusing Shopify connection: expected ${ALLOWED_SHOP}, received ${shop || "missing shop"}.`,
    );
  }

  if (!/^20\d{2}-(01|04|07|10)$/.test(apiVersion)) {
    throw new Error(
      "SHOPIFY_API_VERSION must use Shopify's YYYY-MM quarterly format.",
    );
  }

  return { shop, clientId, clientSecret, apiVersion };
}

function normalizeShop(value) {
  return (value || "")
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
}

function required(value, name) {
  const normalized = value?.trim();
  if (!normalized) throw new Error(`${name} is required.`);
  return normalized;
}
