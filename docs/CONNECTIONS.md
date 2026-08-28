# WHITE ANT SCANDINAVIA — Connections and Source Map

No connection is verified merely because a connector is installed or active. See
[`ACCOUNT_REGISTER.md`](ACCOUNT_REGISTER.md) for exact verified identifiers and
[`METRICS.md`](METRICS.md) for the reporting contract.

| System                | Purpose                            | Exact account/property                                                       | Access                     | Data direction   | Status                                                     |
| --------------------- | ---------------------------------- | ---------------------------------------------------------------------------- | -------------------------- | ---------------- | ---------------------------------------------------------- |
| Shopify storefront    | Catalog, media, storefront         | `whiteantscandinavia.com`; `xbpcuj-5a.myshopify.com`; shop ID `101526143302` | Public storefront read     | Public output    | Storefront verified; Admin **Ej anslutet**                 |
| Shopify theme         | Live storefront presentation       | Main theme ID `194303328582`; Horizon `4.1.3`                                | Public storefront metadata | Public output    | Published identity verified; source/deploy **Ej anslutet** |
| GitHub                | Docs and future code               | `sagahaljeryd/WHITEANTSCANDINAVIA`; repo ID `1349266417`                     | Owner repo                 | Versioned writes | Connected                                                  |
| Product/asset library | Facts and variant assets           | Not verified                                                                 | Not verified               | Read/publish     | **Ej anslutet**                                            |
| Project Drive         | Approved project files             | Exact project account/root not verified                                      | Not verified               | Read             | **Ej anslutet**                                            |
| Domain/DNS            | Canonical domains                  | `whiteantscandinavia.com`; registrar/DNS not verified                        | Public read only           | Configuration    | Domain live; control **Ej anslutet**                       |
| Accounting            | Bookkeeping/VAT                    | Fortnox company/account ID not verified                                      | Not verified               | Evidence/export  | **Ej anslutet**                                            |
| Bank/payouts          | Cash and settlement reconciliation | Bank, Shopify Payments and payout IDs not verified                           | Not verified               | Read             | **Ej anslutet**                                            |
| Klaviyo               | Signup/email events                | Public company ID `SnZXp5`; owner/list IDs not verified                      | Public hook only           | Event collection | Hook detected; data **Ej anslutet**                        |
| Analytics             | Measurement                        | GA4 property/stream not detected                                             | Not verified               | Read             | **Ej anslutet**                                            |
| Ads                   | Paid acquisition                   | Meta/TikTok/Google account and pixel IDs not verified                        | Not verified               | Read             | **Ej anslutet**                                            |
| Lovable               | Historical/app project             | No WHITE ANT project found in verified workspace                             | Workspace list read        | Read             | **Ej anslutet / no project found**                         |

## Current mismatch evidence

On 2026-08-28, a read-only connector check verified the active SAGA HQ Shopify connection as Clarté
Paris at `clarteparis.com`, not WHITE ANT. The connector was not switched or revoked and must not be
used for WHITE ANT reads or writes.

The connected Google Drive identity was a private account. It was not searched, listed or modified.
WHITE ANT Drive work remains blocked until the project-owned root/account is explicitly connected.

## Public storefront evidence

A read-only inspection of `whiteantscandinavia.com` on 2026-08-28 verified:

- Shopify shop domain `xbpcuj-5a.myshopify.com` and shop ID `101526143302`;
- published main theme ID `194303328582`, named “WHITE ANT – cart improvements preview
  2026-08-25”, schema Horizon `4.1.3`;
- Klaviyo storefront company ID `SnZXp5`;
- no GA4 measurement ID, Meta pixel ID or TikTok pixel ID detected in the inspected page markup.

Public metadata does not prove Admin/API permissions, event delivery or data quality.

For each connection record verification date, account identifier, environment, scopes, credential
owner, data categories, retention and revoke path. Never store credentials here.

WHITE ANT connections and data remain separate from Clarté Paris, AKTRIS and personal projects.
