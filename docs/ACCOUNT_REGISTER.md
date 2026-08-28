# WHITE ANT SCANDINAVIA — Account Register

**Last verified:** 2026-08-28 UTC.

This register records identities and connection state without storing credentials, customer data or
personal account identifiers. A public storefront signal proves storefront identity, not Admin API
access.

| System | Exact account, domain or property | Legal owner | Admin/credential owner | Verification and access | Status | Next step |
| --- | --- | --- | --- | --- | --- | --- |
| Shopify storefront | `whiteantscandinavia.com`; `xbpcuj-5a.myshopify.com`; shop ID `101526143302` | Maren Moerk AB | Not verified | Public storefront read on 2026-08-28 | Storefront verified; Admin **not connected** | Connect the exact WHITE ANT shop, then read back shop info before any catalog or analytics query |
| Shopify theme | Main theme ID `194303328582`; “WHITE ANT – cart improvements preview 2026-08-25”; Horizon `4.1.3` | Maren Moerk AB | Not verified | Public storefront metadata on 2026-08-28 | Published theme identified; source/deploy path **not connected** | Verify theme source, preview theme, deployment owner and rollback |
| Shopify connector in SAGA HQ | Clarté Paris at `clarteparis.com` | Different project | Saga | Connector shop-info read on 2026-08-28 | Wrong project — stopped | Do not switch or revoke in WHITE ANT work; add a separate WHITE ANT-authorized path |
| GitHub | `sagahaljeryd/WHITEANTSCANDINAVIA`; repo ID `1349266417` | Project repository | `sagahaljeryd` has Admin | GitHub API read/write; main commit `28a0674aeca281a7074d3532d46ffb28e4edd8ea` | Connected | Keep storefront/theme source separate until ownership is verified |
| Project Drive | Exact WHITE ANT Drive account/folder not verified | Expected Maren Moerk AB / WHITE ANT | Not verified | Connected Drive identity is private and was not searched | **Ej anslutet** | Connect or share only the project-owned WHITE ANT root |
| Lovable | No WHITE ANT project in the verified Lovable workspace | Not applicable | Not verified | Workspace project list read on 2026-08-28 | **Ej anslutet / no project found** | Provide exact Lovable project URL/ID if a separate project exists |
| Accounting | Fortnox company/account ID not visible | Expected Maren Moerk AB | Not verified | No project accounting connector available | **Ej anslutet** | Connect Maren Moerk AB in read-only mode and verify organisation number |
| Bank and payouts | Bank account, Shopify Payments account and payout IDs not visible | Expected Maren Moerk AB | Not verified | No project bank/payout connection available | **Ej anslutet** | Connect read-only payout and bank evidence; keep credentials outside Git |
| Klaviyo | Public company ID `SnZXp5` | Not verified | Not verified | Storefront script detected on 2026-08-28 | Hook detected; account/data **not connected** | Verify account owner, list IDs, consent and event delivery |
| Google Analytics | Property and measurement ID not detected | Not verified | Not verified | Public storefront inspection | **Ej anslutet** | Connect the exact GA4 property and verify production data stream |
| Meta Ads/Pixel | Facebook CAPI capability signal present; pixel/ad account ID not visible | Not verified | Not verified | Public storefront metadata only | **Ej anslutet** | Verify pixel, dataset, business and ad-account IDs |
| TikTok | Pixel and ad account not detected | Not verified | Not verified | Public storefront inspection | **Ej anslutet** | Verify exact pixel and ad-account IDs |
| Domain/DNS | `whiteantscandinavia.com` | Registrant/provider not verified | Not verified | Public HTTPS storefront | Domain live; registrar/DNS **not connected** | Record registrar, DNS provider, owner, renewal and rollback |

## Mandatory verification gate

Before any Admin, catalog, order, analytics or financial query, read back the exact target identity
and stop if it is not WHITE ANT SCANDINAVIA / Maren Moerk AB. Never reuse Clarté Paris sessions,
object IDs, reports or exports.
