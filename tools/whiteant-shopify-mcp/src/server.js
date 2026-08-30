#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { loadConfig } from "./config.js";
import { verifyWhiteAntConnection } from "./shopify.js";

const server = new McpServer({
  name: "white-ant-shopify-identity",
  version: "0.1.0",
});

server.registerTool(
  "verify_white_ant_connection",
  {
    title: "Verify WHITE ANT Shopify connection",
    description:
      "Read back the exact WHITE ANT shop identity and granted scopes. Fails closed for another shop or any write scope.",
    inputSchema: {},
  },
  async () => {
    try {
      const result = await verifyWhiteAntConnection(loadConfig());
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        structuredContent: result,
      };
    } catch (error) {
      return {
        isError: true,
        content: [{ type: "text", text: error.message }],
      };
    }
  },
);

await server.connect(new StdioServerTransport());
