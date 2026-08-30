import assert from "node:assert/strict";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

test("starts over STDIO and exposes only the identity preflight", async () => {
  const serverPath = fileURLToPath(
    new URL("../src/server.js", import.meta.url),
  );
  const client = new Client({
    name: "white-ant-test-client",
    version: "0.1.0",
  });
  const transport = new StdioClientTransport({
    command: process.execPath,
    args: [serverPath],
    env: {
      PATH: process.env.PATH,
      SHOPIFY_SHOP: "xbpcuj-5a.myshopify.com",
      SHOPIFY_CLIENT_ID: "synthetic-client-id",
      SHOPIFY_CLIENT_SECRET: "synthetic-secret",
      SHOPIFY_API_VERSION: "2026-07",
    },
  });

  try {
    await client.connect(transport);
    const response = await client.listTools();
    assert.deepEqual(
      response.tools.map(({ name }) => name),
      ["verify_white_ant_connection"],
    );
  } finally {
    await client.close();
  }
});
