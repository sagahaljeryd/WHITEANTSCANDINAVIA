# WHITE ANT SCANDINAVIA — Roadmap

## P0 — Establish trustworthy sources

- [x] Create repository operating baseline.
- [ ] Verify canonical WHITE ANT Shopify shop and owner.
- [ ] Map product, variant, SKU and media identifiers.
- [ ] Approve the authoritative colour/variant media mapping source.
- [ ] Map themes, deployment, domains, markets and languages.
- [ ] Map brand/assets, accounting, analytics and marketing properties.
- [ ] Review access and rotate credentials outside Git where needed.

## P1 — Variant and catalog integrity

- [ ] Create read-only product/variant/media audit.
- [ ] Produce conflict report for missing/ambiguous media assignments.
- [ ] Build dry-run and rollback-safe assignment workflow.
- [ ] Verify switching on storefront across mobile/desktop and selected variants.
- [ ] Audit SKU, options, inventory, price and publication integrity.

## P1 — Storefront, brand and content

- [ ] Version the verified theme if this repo owns it.
- [ ] Establish preview, test, deploy and rollback.
- [ ] Approve brand kit, claims and content workflow.
- [ ] Audit accessibility, performance, SEO and conversion paths.

## P2 — Safe automation

- [ ] Scheduled read-only catalog/media quality checks.
- [ ] Idempotent batch tooling with automatic shop allowlist.
- [ ] Reconciliation reports and safe resume after partial failure.

## Release gates

- No mutation until the shop is proven to be WHITE ANT.
- No media assignment without stable IDs and conflict-free mapping.
- No customer/order data in Git or AI fixtures.
- No deployment without preview, tests and rollback.
