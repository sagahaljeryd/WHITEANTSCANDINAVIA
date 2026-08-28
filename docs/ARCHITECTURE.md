# WHITE ANT SCANDINAVIA — Technical Architecture Baseline

## Current state

The repository had no implementation before this baseline. No framework, Shopify theme, CI,
deployment target or automation is verified here yet.

## Mapping before implementation

- Exact shop domain, theme IDs and environments.
- Existing theme source and deployment ownership.
- Theme architecture and Shopify CLI version.
- Apps, blocks, metafields/metaobjects and product-media dependencies.
- Domains, markets, languages and redirects.
- Analytics, consent and pixels.
- Catalog/PIM/DAM ownership and stable join keys.
- Deployment/rollback owner.

## Recommended boundaries after mapping

```text
docs/          project and operating knowledge
agents/        specialist instructions
theme/         verified Shopify theme source if this repo owns it
tools/         audited catalog/media tools and schemas
tests/         synthetic fixtures and contracts
```

Do not create a fake `theme/` or import another shop's code for completeness.

## Automation contract

- Exact shop-domain allowlist.
- Read-only/dry-run by default.
- Stable ID joins, conflict output and target counts.
- Idempotent writes, rate-limit controls and safe resume.
- No secret/customer output.
- Before-state and rollback map.
- Read-back verification in Admin and storefront.
- Synthetic test fixtures.

## Secrets

Use approved local/CI secret stores. Only names and safe placeholders belong in `.env.example`.
