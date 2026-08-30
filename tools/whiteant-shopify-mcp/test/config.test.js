import assert from "node:assert/strict";
import test from "node:test";
import { loadConfig } from "../src/config.js";

test("accepts only the canonical WHITE ANT shop", () => {
  const config = loadConfig({
    SHOPIFY_SHOP: "https://XBPCUJ-5A.myshopify.com/",
    SHOPIFY_CLIENT_ID: "client-id",
    SHOPIFY_CLIENT_SECRET: "secret",
  });
  assert.equal(config.shop, "xbpcuj-5a.myshopify.com");
  assert.equal(config.apiVersion, "2026-07");
});

test("rejects a different brand shop", () => {
  assert.throws(
    () =>
      loadConfig({
        SHOPIFY_SHOP: "clarte-paris.myshopify.com",
        SHOPIFY_CLIENT_ID: "client-id",
        SHOPIFY_CLIENT_SECRET: "secret",
      }),
    /Refusing Shopify connection/,
  );
});
