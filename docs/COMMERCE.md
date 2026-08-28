# WHITE ANT SCANDINAVIA — Commerce Operations

## Source of truth

The exact verified WHITE ANT Shopify shop is authoritative for current catalog, variant, inventory,
publication, media and order state unless a documented upstream product/asset system owns a field.

## Safe change flow

```text
verify WHITE ANT shop
  → read current product/variant/media graph
  → export IDs and before-state
  → join only through approved mapping keys
  → dry-run exact changes and conflicts
  → execute idempotent allowlisted batch
  → read back storefront and Admin state
  → reconcile and retain redacted audit/rollback map
```

## Variant-media contract

Each assignment should be keyed by stable IDs and include:

- shop domain;
- product ID/handle;
- variant ID, SKU and option values;
- media ID/source asset;
- mapping source and confidence;
- current/desired preview media;
- previous assignment for rollback;
- conflict or ambiguity state.

Filenames, colour names and image analysis may generate suggestions but must not silently become
live assignments when ambiguous.

## High-impact fields

- product/variant publication and handles;
- price and compare-at price;
- inventory, locations and overselling;
- option values, product structure and media;
- markets, currency, language and domain;
- shipping, returns, payments, discounts and tax;
- fulfilment, refunds and customer notifications.

## Catalog quality

Stable IDs, SKU/barcode policy, verified options, approved facts/assets, correct media, inventory
ownership, accessible alt text, search metadata and a clear archive lifecycle.

## Financial boundary

Reconcile orders, refunds, discounts, shipping, tax, fees, currency and payouts before proposing
bookkeeping. Never assume the tax basis or copy another shop's accounts.

## Customer data

Use object IDs plus redacted/synthetic evidence. Names, contact details, addresses and full order
exports never enter Git, prompts or fixtures.
