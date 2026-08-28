# WHITE ANT SCANDINAVIA — Agent Workflows

Automations may prepare audits, mappings and drafts. They do not change the live shop or publish by
default.

## Catalog and content

`Verified product source -> SKU/variant map -> claim check -> product/content draft -> brand review -> legal/commercial review -> QA -> owner approval -> publish`

## Variant media

`Verify WHITE ANT shop -> export product/variant/media IDs -> join approved colour/media map -> detect ambiguity -> dry run -> owner approval -> reversible assignment -> read-back -> rollback evidence`

## Engineering

`Issue -> scope -> implementation -> tests/lint/build -> privacy/security review -> QA -> pull request -> approval -> merge/deploy`

## Scheduled safe work

- read-only repository, catalog-connection and mapping readiness checks;
- draft launch, SEO and merchandising backlogs from approved sources;
- flag stale mappings, product claims and review dates;
- stop on wrong-shop signals, `product: null` or unexpected identifiers;
- never auto-publish, change prices/inventory or send customer messages.
