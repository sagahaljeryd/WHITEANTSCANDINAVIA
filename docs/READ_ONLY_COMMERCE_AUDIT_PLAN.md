# WHITE ANT SCANDINAVIA — Read-only Commerce Audit Plan

**Prepared:** 2026-08-29 UTC.

**Status:** Ready to run only after the exact WHITE ANT Shopify Admin connection is verified.

## Business outcome

Create the first trustworthy, redacted baseline for catalog and storefront readiness without changing
Shopify, exposing customer data or treating missing data as zero.

## Hard gate — stop on any mismatch

Before any audit query, read back and record:

| Gate | Required value |
| --- | --- |
| Brand | WHITE ANT SCANDINAVIA |
| Canonical shop | `xbpcuj-5a.myshopify.com` |
| Public storefront | `whiteantscandinavia.com` |
| Expected legal operator | Maren Moerk AB, organisation number `559591-5090` |
| Environment | Production, read-only |
| Authority | Read scopes only; no mutation authority used |
| Excluded project | Clarté Paris and all of its sessions, IDs, reports and exports |

If the shop identity, environment or scopes are unavailable or different, classify the run as
`Blocked — wrong project` or `Ej anslutet` and stop. Do not switch or revoke another brand's
connection.

## Audit scope

Read only the minimum object metadata required for these checks:

1. shop identity, primary domain, currency and enabled markets;
2. products and publication status;
3. variants, option values, SKU and barcode presence;
4. inventory tracking and aggregate availability by location identifier;
5. product and variant media IDs, attachment state and accessible alt-text presence;
6. product handles, vendor/type/tags and required product facts;
7. published theme identity and active storefront references, without downloading or modifying theme
   source.

The audit excludes orders, customers, addresses, emails, phone numbers, payment data, full financial
exports and any write operation.

## Redacted output contract

Every run must record:

- audit timestamp and timezone;
- exact shop domain, shop ID and environment;
- scopes used and whether they were read-only;
- reporting cutoff;
- aggregate counts for products, variants, SKUs, media and publication states;
- anomaly counts by rule;
- redacted object references using stable product/variant/media IDs only;
- source query or API version;
- incomplete pages, permission gaps and refresh errors;
- final data-health state: `Connected`, `Stale`, `Ej anslutet` or
  `Blocked — wrong project`.

No output may contain customer data, credentials or raw order/financial exports.

## Initial anomaly rules

| Rule | Severity | Pass condition |
| --- | --- | --- |
| ID-001 shop mismatch | Stop | Exact canonical shop is verified before all other queries |
| CAT-001 missing SKU | High | Every in-scope sellable variant has an approved SKU |
| CAT-002 duplicate SKU | High | No duplicate non-empty SKU exists in the audit set |
| CAT-003 option ambiguity | High | Variant option combinations are unique per product |
| MED-001 missing media | High | Every published product has product media |
| MED-002 variant-media gap | Medium | Each variant mapping is explicit or flagged for owner review |
| MED-003 missing alt text | Medium | Every audited image has non-empty accessible alt text |
| INV-001 inventory unknown | High | Tracking ownership and location are explicit for sellable variants |
| PUB-001 inconsistent publication | High | Product status and market/channel publication agree |
| FACT-001 unsupported facts | High | Material, fit, care, origin and claims have an approved source |

A failed rule creates a report item only. It never triggers an automatic correction.

## Definition of done

The audit is complete when:

1. the identity gate passes against `xbpcuj-5a.myshopify.com`;
2. pagination and object counts reconcile or the exact gap is documented;
3. every rule produces a pass, fail or `Ej anslutet` result;
4. the report contains only aggregate or redacted object-level evidence;
5. zero mutation requests, customer-data reads, messages, deployments or publications occurred;
6. the dated result is linked from `PROJECT_MEMORY/CURRENT_STATE.md`.

## Current blocker and owner action

**Blocker:** WHITE ANT Shopify Admin/API is `Ej anslutet`.

**Saga:** authorize a separate read-only WHITE ANT connection and verify that it reads back
`xbpcuj-5a.myshopify.com`. The existing Clarté Paris connection must remain untouched.
