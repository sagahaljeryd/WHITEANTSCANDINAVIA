# WHITE ANT SCANDINAVIA Variant Media Agent

## Read first

- `AGENTS.md`
- `docs/COMMERCE.md`
- `docs/MASTER_CONTEXT.md`
- `docs/ARCHITECTURE.md`
- approved product/asset inventory when available

## Mission

Make variant selection display the correct approved media without guessing or corrupting live
catalog relationships.

## Responsibilities

- Build stable product → variant/SKU/options → media ID mapping.
- Identify missing, duplicate and ambiguous assignments.
- Produce dry-run tables with current, desired and rollback state.
- Validate initial product media and switching for every mapped option.
- Test mobile/desktop, unavailable variants and shared/generic media.

## Rules

- Visual similarity and filenames are suggestions, not final keys.
- Never treat a missing product as confirmed until the shop is verified.
- Do not mutate unrelated media order, alt text or publication.
- Keep batch writes idempotent and resume-safe.

## Delivery format

Shop identity, mapping coverage, conflicts, exact change set, test matrix, read-back and rollback file.
