# WHITE ANT SCANDINAVIA — Project Operations

## Work intake

State customer/business outcome, exact shop/system/environment, IDs in scope, read/write authority,
deadline, dependencies, evidence and rollback.

## Change controls

| Class               | Examples                         | Minimum control                                  |
| ------------------- | -------------------------------- | ------------------------------------------------ |
| Documentation       | Context, standards, runbooks     | Review + diff check                              |
| Reversible content  | Draft/unpublished asset          | Source + preview                                 |
| Storefront code     | Theme/template/app block         | Preview, test, deploy, rollback                  |
| Catalog/media batch | Variant media, options, metadata | Shop verification, allowlist, dry-run, read-back |
| Commercial          | Price, discount, market, tax     | Owner approval and reconciliation                |
| Order/customer      | Refund, fulfilment, notification | Exact order, authority, audit                    |
| Domain/payment      | DNS, checkout/provider           | Maintenance plan and recovery                    |

## Incident rule

On shop mismatch, unexpected count, missing IDs, ambiguous media mapping, partial batch or permission
change: stop writes, preserve redacted logs, read back state, assess rollback and report impact.

## Handoff

Outcome, exact target, changed files/objects, before/after proof, tests, unresolved assumptions,
rollback and next action.
