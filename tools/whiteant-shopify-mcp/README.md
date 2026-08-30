# WHITE ANT Shopify identity MCP

This local STDIO server performs one operation: it verifies the installed Shopify app against the
canonical WHITE ANT shop and reads back its granted scopes. It exposes no generic query tool and no
mutation.

## Safety boundary

- Exact allowed shop: `xbpcuj-5a.myshopify.com`.
- The tool fails if Shopify returns another shop.
- The tool fails if any granted scope begins with `write_`.
- Client credentials and temporary access tokens are never returned or logged.
- No customer, order, product, inventory or financial records are queried.

## Codex custom MCP settings

The committed GitHub revision can be run directly, so no local clone path is required. In the custom
MCP form choose `STDIO` and use:

| Field             | Value                                                |
| ----------------- | ---------------------------------------------------- |
| Name              | `WHITE ANT Shopify (read-only)`                      |
| Command           | `npx`                                                |
| Argument 1        | `-y`                                                 |
| Argument 2        | `github:sagahaljeryd/WHITEANTSCANDINAVIA#COMMIT_SHA` |
| Working directory | Leave empty                                          |

Set these environment variables in the MCP form, never in Git or chat:

| Variable                | Value                                          |
| ----------------------- | ---------------------------------------------- |
| `SHOPIFY_SHOP`          | `xbpcuj-5a.myshopify.com`                      |
| `SHOPIFY_API_VERSION`   | `2026-07`                                      |
| `SHOPIFY_CLIENT_ID`     | Client ID from the installed WHITE ANT app     |
| `SHOPIFY_CLIENT_SECRET` | Client secret from the installed WHITE ANT app |

After saving, call only `verify_white_ant_connection`. A successful result must show the exact
WHITE ANT `myshopifyDomain`, the expected public domain and only `read_` scopes.

## Local verification

From the repository root, run `npm ci` followed by `npm test`.
