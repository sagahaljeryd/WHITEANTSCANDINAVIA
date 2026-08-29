# WHITE ANT SCANDINAVIA — Durable Decisions

**Last verified:** 2026-08-29 UTC.

The detailed canonical decision log remains `docs/DECISIONS.md`. This file records the compact
cross-task rules future work must carry forward.

## M-001 — Exact project separation

WHITE ANT Shopify, GitHub, Drive, assets, accounting and analytics remain separate from Clarté Paris,
AKTRIS and personal projects. Another project's connector, IDs or data are never a fallback.

## M-002 — Identity before data

Before every Shopify workflow, verify WHITE ANT SCANDINAVIA, the exact
`xbpcuj-5a.myshopify.com` identity, environment, scopes and read/write authority. A missing object is
not proof of absence until the shop context is verified.

## M-003 — Unknown remains unknown

Missing sources and values are reported as `Ej anslutet`, not zero. Public storefront metadata does
not prove Admin/API access, account ownership, event delivery or data quality.

## M-004 — Live changes are release-gated

Price, inventory, product, publication, market, theme, domain, payment, tax, fulfilment, customer and
external-message changes require exact target verification, evidence, approval where required,
preview or dry-run, read-back and rollback.

## M-005 — Repository data boundary

Never commit credentials, customer/order exports, contact details, payment data or raw financial
exports. Use stable object IDs, redacted evidence and synthetic fixtures.

## M-006 — Project memory workflow

Future work reads `PROJECT_MEMORY/00_START_HERE.md` and relevant memory files before acting, then
updates verified reusable state, decisions or learnings after the work. Full conversations and
speculation are excluded.
