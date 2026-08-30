# WHITE ANT SCANDINAVIA — Current State

**Last verified:** 2026-08-30 UTC.

## Repository

- Canonical repo: `sagahaljeryd/WHITEANTSCANDINAVIA`, repo ID `1349266417`.
- Default branch: `main`, verified at commit
  `28a0674aeca281a7074d3532d46ffb28e4edd8ea`.
- Latest verified safe documentation branch before this memory pass:
  `codex/whiteant-connection-sprint-2026-08-28`, commit
  `b8bb3fa6a93e87eab29e2caad95777892561c68f`.
- The repository is an operations baseline. Verified Shopify theme/storefront source, deployment
  configuration and commerce exports are not present.

## Verified WHITE ANT identity

- Public storefront: `whiteantscandinavia.com`.
- Shopify shop: `xbpcuj-5a.myshopify.com`; public shop ID `101526143302`.
- Published main theme: ID `194303328582`, Horizon `4.1.3`; source and deployment path are
  `Ej anslutet`.
- Legal storefront operator: Maren Moerk AB, organisation number `559591-5090`.
- Public Klaviyo company ID: `SnZXp5`; account ownership and event data are `Ej anslutet`.

## Connection health

- GitHub: Connected with verified repository admin/push access.
- WHITE ANT Shopify custom app: visually verified as installed in `xbpcuj-5a.myshopify.com` with
  selected read permissions; credential-backed API identity and scope read-back are not verified.
- WHITE ANT Shopify Admin/API: `Ej anslutet` until the API preflight succeeds.
- Product/asset library and project Drive: `Ej anslutet`.
- Theme source/deployment: `Ej anslutet`.
- Accounting, bank and payouts: `Ej anslutet`.
- GA4 and advertising properties: `Ej anslutet`.
- Domain is live; registrar and DNS control are `Ej anslutet`.

## Active blockers

1. The available Shopify connector is Clarté Paris and is blocked for all WHITE ANT work.
2. The project-owned WHITE ANT app is installed, but its Client ID and Client Secret have not been
   supplied to a local secret environment and the API identity has not been read back.
3. The approved product/asset source and project Drive root are not connected.
4. Commerce, finance and analytics KPI values cannot be reported from public storefront metadata.

## Next safe milestone

Connect the exact WHITE ANT Shopify shop in read-only mode, read back its identity and scopes, then
run a redacted commerce audit without customer data or mutations.

## Identity-only MCP staged on 2026-08-30

- Commit `6eb02568d396dbab265849700caa6182cf8f6fa1` adds a local STDIO MCP with the single tool
  `verify_white_ant_connection`.
- It allowlists only `xbpcuj-5a.myshopify.com`, reads shop identity and installed scopes, rejects
  every `write_` scope and exposes no generic Shopify query or mutation.
- Seven synthetic tests pass, including wrong-shop rejection, write-scope rejection, secret-safe
  errors and an end-to-end STDIO tool-list handshake.
- No live Shopify request was made. Final connection remains blocked only on local secret entry and
  a successful read-back from the exact WHITE ANT installation.

## Night pass delivered on 2026-08-29

- Isolated branch: `codex/whiteant-project-memory-night-2026-08-29`.
- Project memory and the mandatory read/update rule were added in commit
  `70ff56952059ecea25cdefcedc6ec0f995750047`.
- One roadmap improvement was added: `docs/READ_ONLY_COMMERCE_AUDIT_PLAN.md` in commit
  `d5747bc8f0226f0eff4ae5210c30c43cdd811244`.
- Verification passed: required files exist, `git diff --check` is clean, changed-file scope matches
  the plan, and no credential pattern or Clarté domain/sales data was detected in the new files.
- Prettier was unavailable in the repository; headings, links and tables were checked manually under
  the documented fallback.
- No pull request, merge, deployment, publication, Shopify mutation or external message was created.
