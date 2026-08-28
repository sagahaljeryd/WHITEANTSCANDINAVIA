# WHITE ANT SCANDINAVIA — KPI and Finance Contract

**Status:** Measurement definitions established; current values remain **Ej anslutet** until the exact
project-owned sources are connected.

Every reported value must include source account/property, reporting period, timezone, refresh time,
currency where applicable and comparison period. Never treat missing data as zero.

## Executive scorecard

| Layer      | KPI                        | Definition                                                                                                                  | Authoritative source                   | Current value   |
| ---------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | --------------- |
| Demand     | Qualified sessions         | Sessions in target markets after bot/internal filtering                                                                     | Exact GA4/Shopify analytics property   | **Ej anslutet** |
| Demand     | Product-view rate          | Sessions with product view ÷ qualified sessions                                                                             | Exact analytics property               | **Ej anslutet** |
| Intent     | Add-to-cart rate           | Sessions with add to cart ÷ qualified sessions                                                                              | Exact analytics property               | **Ej anslutet** |
| Intent     | Checkout-start rate        | Sessions starting checkout ÷ qualified sessions                                                                             | Shopify/analytics reconciliation       | **Ej anslutet** |
| Commercial | Conversion rate            | Orders ÷ eligible online-store sessions; state platform definition                                                          | Exact WHITE ANT Shopify                | **Ej anslutet** |
| Commercial | Net sales                  | Gross sales − discounts − returns/refunds; tax and shipping shown separately                                                | Exact WHITE ANT Shopify                | **Ej anslutet** |
| Commercial | Average order value        | Net sales ÷ orders; state inclusion of tax/shipping                                                                         | Exact WHITE ANT Shopify                | **Ej anslutet** |
| Product    | Sell-through               | Units sold ÷ units available for sale in the same cohort                                                                    | Shopify plus approved inventory source | **Ej anslutet** |
| Product    | Product-data completeness  | Active SKUs passing required fact/asset/variant checks ÷ active SKUs                                                        | Shopify plus approved product source   | **Ej anslutet** |
| Retention  | Returning-customer rate    | Returning customers ÷ customers in the period                                                                               | Exact WHITE ANT Shopify                | **Ej anslutet** |
| CRM        | Signup conversion          | Valid consented signups ÷ eligible visitors                                                                                 | Klaviyo plus analytics                 | **Ej anslutet** |
| Finance    | Contribution margin        | Net sales ex VAT + shipping income − COGS − fulfilment/shipping cost − payment/platform fees − attributable creator/ad cost | Shopify, accounting, payouts, bank     | **Ej anslutet** |
| Finance    | Payout reconciliation gap  | Expected payouts − bank receipts, by payout ID                                                                              | Shopify Payments plus bank             | **Ej anslutet** |
| Finance    | Estimated operating profit | Contribution margin − operating costs, labelled estimated until booked/reconciled                                           | Fortnox plus bank reconciliation       | **Ej anslutet** |

## Required financial bridge

Report these lines separately for each period and currency:

1. gross sales;
2. discounts;
3. refunds/returns;
4. net sales;
5. VAT/tax;
6. shipping income;
7. payment, platform and currency fees;
8. COGS by fulfilled/refunded unit;
9. outbound, return and packaging cost;
10. advertising and creator cost;
11. contribution margin;
12. operating costs;
13. Shopify/provider payouts;
14. bank receipts and reconciliation gap;
15. estimated profit and booked accounting result.

Gross sales, total sales, payouts, cash receipts and profit are different measures.

## Channel measurement

For each paid or creator channel, record spend, impressions, reach, clicks, landing-page sessions,
add-to-cart, checkout, orders, net sales, refunds, new-customer contribution margin and attribution
window. ROAS must never replace contribution-margin measurement.

## Data quality status

Use exactly:

- **Connected:** exact account/property verified and current data read back.
- **Stale:** exact source verified but refresh is outside the agreed cadence.
- **Ej anslutet:** no verified project-owned read path.
- **Blocked — wrong project:** available connection belongs to another project.

No cross-brand or cross-entity rollup is consolidated accounting.
