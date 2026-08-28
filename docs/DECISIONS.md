# WHITE ANT SCANDINAVIA — Decision Log

## D-006 — Variant media requires stable mapping

**Decision:** Use verified product/variant/media IDs, source mapping, dry-run and rollback. Filenames or
visual similarity may suggest but not silently decide assignments.

## D-005 — `product: null` triggers connection verification

**Decision:** A missing product through a connector is treated as possible wrong-shop context until
the exact WHITE ANT account is verified.

## D-004 — Operations baseline before implementation

**Decision:** Establish sources, safety and ownership before choosing a theme/framework or importing
another codebase.

## D-003 — Separate brand data sources

**Decision:** GitHub, Shopify, assets, accounting and analytics remain separate authorities connected
through documented contracts.

## D-002 — No personal or secret exports in Git

**Decision:** Customer/order exports, credentials and raw financial data are prohibited. Use IDs,
redaction and synthetic fixtures.

## D-001 — Unknown facts remain unknown

**Decision:** Brand, origin, catalog and technical details may not be inferred from the name or
another brand's systems.

## Template

```md
## D-0XX — Short title

**Date:** YYYY-MM-DD
**Status:** Proposed | Applies | Superseded
**Context:** Why is the decision needed?
**Decision:** What applies?
**Consequences:** What changes or remains blocked?
```
