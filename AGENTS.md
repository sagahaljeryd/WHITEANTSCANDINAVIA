# WHITE ANT SCANDINAVIA repository instructions

These instructions apply to every human or AI contributor in this repository.

## Mission

Build a reliable commerce and project operations home for WHITE ANT SCANDINAVIA while protecting
live Shopify state, customer data, financial evidence and brand integrity.

## Read before acting

Always read:

- `docs/MASTER_CONTEXT.md`
- `docs/BRAND.md`
- `docs/COMMERCE.md`
- `docs/CONNECTIONS.md`
- `docs/DECISIONS.md`
- `docs/ROADMAP.md`

Then read the relevant role in `agents/`. Read `docs/ARCHITECTURE.md` before adding themes, scripts,
apps or automation.

## Source-of-truth order

1. The user's explicit instruction for the current task.
2. The verified WHITE ANT system for the relevant object: Shopify, domain host, accounting,
   marketing platform or approved asset library.
3. Versioned code, configuration, tests and audit definitions in this repository.
4. `docs/MASTER_CONTEXT.md`, the relevant domain file and `docs/DECISIONS.md`.
5. A specialist file in `agents/`; roles define working method, not business facts.

Never reuse live facts or object IDs from Clarté Paris, AKTRIS or another shop.

## Mandatory shop verification

Before every Shopify workflow, record and verify:

- brand: WHITE ANT SCANDINAVIA;
- exact `myshopify.com` domain/account;
- production, preview or test environment;
- permissions and objects in scope;
- read-only versus mutating authority.

A `product: null`, missing GID or unexpected catalog is a possible shop mismatch—not proof that the
WHITE ANT product is absent. Stop writes and verify the connection.

## Commerce safety

- Shopify is authoritative for current products, variants, inventory, publication and media unless
  an approved upstream system owns a field.
- Variant-media changes require product/variant ID mapping, dry-run output, read-back verification
  and a rollback mapping.
- Never infer an image-to-colour assignment from filename or visual similarity alone when the source
  mapping is ambiguous.
- Price, compare-at price, inventory, publication, domain, payment, tax and fulfilment changes are
  release-gated.
- Prefer reversible, idempotent batches with exact allowlists and before/after evidence.

## Data, privacy and secrets

- Never commit customer/order exports, addresses, emails, phone numbers, payment data, tokens,
  credentials or raw financial exports.
- Use synthetic fixtures and redacted object-level audits.
- `.env` files are local-only; `.env.example` contains names and safe placeholders only.
- Keep WHITE ANT accounts, datasets and assets separate from other brands.
- Use least-privilege connections with documented scopes, owners and revocation.

## Repository discipline

- The repository currently contains an operations baseline, not verified storefront/theme source.
- Do not choose a framework or import another shop's theme before mapping the real WHITE ANT stack.
- Put project truth in `docs/`, specialist process in `agents/` and future implementation in explicit
  code/tool directories.
- Update `docs/MASTER_CONTEXT.md` after verified mapping and `docs/DECISIONS.md` after durable choices.
- Keep published history coherent for any connected deployment/editor.

## Verification and handoff

Documentation changes must pass:

```sh
npx prettier --check AGENTS.md README.md docs agents
git diff --check
```

If no formatter is installed, use `git diff --check` and manually verify headings, links and tables.
Theme/tool changes also require the verified project-specific build, lint, tests, preview and live
read-back.

Report exact target shop, changed IDs/files, checks, unresolved assumptions and rollback.
