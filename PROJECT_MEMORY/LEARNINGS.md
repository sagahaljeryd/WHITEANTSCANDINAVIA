# WHITE ANT SCANDINAVIA — Reusable Learnings

**Last verified:** 2026-08-30 UTC.

## L-001 — An active connector can target the wrong brand

A read-only check on 2026-08-28 reached Clarté Paris instead of WHITE ANT. Always read back shop
identity before queries and stop immediately on mismatch. Never switch, revoke or reuse the Clarté
connection during WHITE ANT work.

## L-002 — Public storefront evidence has a narrow scope

Public markup can verify storefront identifiers such as domain, shop ID, theme ID and a detected
script. It cannot verify Shopify Admin access, credential ownership, analytics delivery, financial
values or data quality.

## L-003 — Missing objects can be connection failures

`product: null`, missing GIDs or an unexpected catalog may mean the wrong shop or scope. Verify
account, environment and permissions before concluding that a WHITE ANT object does not exist.

## L-004 — Variant/media matching must be explicit

Filenames, colour names and visual similarity can generate suggestions but cannot decide live
assignments when mapping is ambiguous. Stable IDs, an approved mapping source, dry-run, read-back and
rollback are required.

## L-005 — Documentation branches are a safe staging layer

A branch with redacted documentation and isolated plans can advance readiness without changing the
live storefront. Branch creation or commits do not authorize a pull request, merge, deployment or
publication.

## L-006 — App installation is not connection proof

An app shown as installed in the correct Shopify Admin is necessary but does not prove API identity
or effective scopes. Keep Admin/API status as `Ej anslutet` until an authenticated request reads back
the exact `myshopifyDomain` and installed scopes. Shopify's development MCP is documentation tooling,
not a substitute for this store-level verification.
