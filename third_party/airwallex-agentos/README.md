# Airwallex

BoldCreate plugin that connects agents to Airwallex through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) servers over streamable HTTP, and adds the vendor's finance skills.

Bring Airwallex's global financial infrastructure to your AI agent. Orchestrate actions across your account in plain language, e.g., set up invoices from a PO, onboard suppliers from invoices, and check current cash position across currencies.

Vendor stage: **Beta**. The vendor describes the plugin as provided "as-is" and says AI agent output is probabilistic and should be reviewed by a qualified person before acting on it. It is not financial, legal or tax advice. See [Important notice](#important-notice-from-the-vendor).

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Airwallex**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Airwallex**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install airwallex-agentos@boldcreate-plugins`. Skills are prefixed with the plugin name, for example `/airwallex-agentos:contract-to-billing`.

## MCP

```json
{
  "mcpServers": {
    "airwallex-dev": {
      "type": "http",
      "url": "https://mcp.sandbox.airwallex.com/developer"
    },
    "airwallex-agentos": {
      "type": "http",
      "url": "https://mcp.airwallex.com/mcp"
    }
  }
}
```

| Server | URL | Environment |
| --- | --- | --- |
| `airwallex-dev` | `https://mcp.sandbox.airwallex.com/developer` | Sandbox |
| `airwallex-agentos` | `https://mcp.airwallex.com/mcp` | Production |

Both servers are installed together. Each declares its environment when the agent connects, and the skills tell the agent to default to sandbox, to say which environment an action targets, and to confirm before any production write. If you only want one environment, disable the other server in your client.

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Airwallex in the browser (OAuth) and reviews the permissions requested. Tool calls run with that member's permissions. The sign-in is per server, so you sign in once for sandbox and once for production. To switch accounts, re-authorize the server entry; there is no in-tool account switcher.

### Authentication

| Item | Value |
| --- | --- |
| Method | OAuth, authorization code flow with refresh tokens |
| PKCE | Yes, `S256` only |
| Client registration | Dynamic client registration and client ID metadata documents |
| Token endpoint auth | `none`, `client_secret_post`, `client_secret_basic`, `private_key_jwt` |
| OAuth version | Not stated by the vendor. The server metadata (code flow only, S256 PKCE) is consistent with OAuth 2.1, but the vendor does not say so. |
| Authorization server, production | `https://mcp.airwallex.com/mcp` (`/authorize`, `/token`, `/register`) |
| Authorization server, sandbox | `https://mcp.sandbox.airwallex.com/developer` (`/authorize`, `/token`, `/register`) |
| Protected-resource metadata | `/.well-known/oauth-protected-resource/mcp` and `/.well-known/oauth-protected-resource/developer` |

Checked live on 2026-11-13: both servers return `401` with a `WWW-Authenticate: Bearer resource_metadata=…` challenge when called without a token, and both serve their OAuth metadata.

### OAuth scopes

BoldCreate Connect requests the 35 scopes the production server lists. The scope names are the vendor's. The vendor publishes no description for them, so the groups below describe only what the names say.

| Group | Scopes |
| --- | --- |
| Account and money, read | `r:awx_action:balances_view`, `r:awx_action:conversions_view`, `r:awx_action:global_accounts_view`, `r:awx_action:transfers_view`, `r:awx_action:settings.account_details_view`, `r:awx_action:pa_view`, `r:awx_action:payment_links_view`, `r:awx_action:contact_management_view` |
| Issuing, read | `r:awx_action:issuing_cardholders_view`, `r:awx_action:issuing_cards_view`, `r:awx_action:issuing_transactions_view` |
| Billing, read | `r:org_action:billing.customer_view`, `.discount_view`, `.invoice_view`, `.payment_source_view`, `.price_view`, `.product_view`, `.subscription_view`, `.transaction_view`, `.usage_metering_view` |
| Spend, read | `r:org_action:expense_management.expense:api_view`, `r:org_action:spend.bills:api_view`, `r:org_action:spend.vendors:api_view` |
| Write | `w:awx_action:contact_management_edit`, `w:awx_action:issuing_cardholders_edit`, `w:awx_action:issuing_cards_edit`, `w:awx_action:payment_links_edit`, `w:awx_action:devx.feedback_write`, `w:org_action:billing.customer_edit`, `.discount_edit`, `.invoice_edit`, `.price_edit`, `.product_edit`, `.subscription_edit`, `.usage_metering_edit` |

The production server lists no transfer-edit or conversion-edit scope. The sandbox server lists 12 more (for example `w:awx_action:transfers_edit`, `w:awx_action:conversions_edit` and `w:awx_action:simulation_edit`); they are not requested here.

## Tools, resources and prompts

**Not documented, and not listed here.** The vendor's repository ships no tool list, no input schemas, no resources and no prompts for either server, and both servers need an Airwallex sign-in before they will list their tools. Nothing here is guessed.

What the vendor's files do say:

- The tool set depends on the connected server and may change between releases. The skills tell the agent to read tool names from the client's tool list, not to assume them.
- The servers publish a feedback tool; the agent finds its exact name from the tool list.
- Where a tool's schema marks `request_id` as required, the agent generates a fresh UUIDv4.
- The agent must show the full payload before calling any write tool.

To see the exact tools and parameters, connect the plugin, sign in, and ask the agent to list the Airwallex tools.

## Skills

The `skills/` folder holds all 5 agent skills published in the vendor's [`airwallex-agentos` plugin](https://github.com/airwallex/airwallex-marketplace/tree/f9d74f7ddb1b6ccadc3b05cb8f5c1ac54ed4b16a/plugins/airwallex-agentos/skills) at commit `f9d74f7ddb1b6ccadc3b05cb8f5c1ac54ed4b16a`, copied unchanged. The source is licensed under Apache-2.0, copyright 2025 Airwallex. The original licence text is in `skills/LICENSE`.

The skills work with the vendor's `airwallex` CLI or with the MCP servers above. In this plugin the MCP servers are the connector.

| Skill | Area | What its description says |
| --- | --- | --- |
| `contract-to-billing` | Billing | Extract billing details from purchase orders, contracts, or quotes, then set up Airwallex Billing by creating invoices and/or subscriptions, matching existing customers, products, and prices to avoid duplicates. |
| `beneficiary-creation` | Payouts | Extract bank details from supplier invoices or documents, validate per-country requirements, and create beneficiaries in Airwallex. Creates beneficiaries only; it does not move money. |
| `card-provisioning` | Issuing | Provision virtual or physical corporate cards: create cardholders, issue cards with spend limits, and manage card spending. Needs Issuing enabled on the account. |
| `manage-cashflow` | Treasury | Multi-currency cash management: balances, receivables, obligations, FX exposure, runway, rebalancing, and indicative FX rates. Money movement is not executed. |
| `awx-best-practices` | Fallback | Ad-hoc operations (list, get, update, delete, void, cancel), troubleshooting, and domains with no workflow skill, such as payment links, refunds, disputes, spend management and financial reports. Used only when no workflow skill fits. |

Supporting files inside the skills: `awx-best-practices/references/api_traps.md` and `surface-quickstart.md`, `card-provisioning/references/card-templates.md`, and `manage-cashflow/references/response-templates.md`.

Each skill links to a shared `references/feedback.md` in the vendor's plugin (copied here at `references/feedback.md`). It explains when the agent may offer to send product feedback, and only after you agree. BoldCreate Connect delivers skills one by one, so that link works from the Cursor and Claude Code installs but not from BoldCreate Connect.

The vendor ships no hooks, rules, commands or agents, so this plugin has none.

## Examples

The vendor's default prompts:

- "Extract billing details from this contract and create an invoice"
- "Create a beneficiary from this supplier document"
- "Provision a virtual card with a $5,000 monthly limit"
- "Show me a cashflow summary across all currencies"

## Limits

From the vendor's skills:

- The skills do not initiate money-out actions (transfers, FX conversions or payouts). Where the API supports them, the skills tell the agent not to run them. Conversions are done in the Airwallex Dashboard.
- `manage-cashflow` gives indicative FX rates only, and no forward rates.
- `card-provisioning` needs Issuing to be enabled on your Airwallex account, and never shows card numbers; use the Airwallex Dashboard for those.
- The sandbox server is the default. Production writes need your explicit confirmation.

## Platforms

Any client that supports remote MCP servers over streamable HTTP with OAuth.

| Platform | Status | Notes |
| --- | --- | --- |
| BoldCreate Connect | Supported | Install from Marketplace. Streamable HTTP with OAuth through BoldCreate Connect's own OAuth client. |
| Cursor | Supported | Vendor lists it in the Cursor Marketplace. Skills and MCP load; this plugin has no rules, hooks, commands or agents. |
| Claude Code | Supported | Skills and MCP load. |
| VS Code | **Not verified** | The vendor's files never mention VS Code or Copilot, and gives no install steps for it. VS Code's docs say it reads Claude-format plugins and supports HTTP MCP servers, but nobody has tested this plugin there, so it is not claimed as supported. |

## Docs

- Airwallex AI marketplace (vendor repository): https://github.com/airwallex/airwallex-marketplace
- Airwallex developer docs: https://www.airwallex.com/docs
- Vendor connector docs (named in the vendor README): https://www.airwallex.com/docs/developer-tools/ai/agentos/connectors
- Airwallex privacy policy: https://www.airwallex.com/terms/privacy-policy
- Airwallex terms: https://www.airwallex.com/terms

## Important notice from the vendor

Taken from the vendor's README: the plugin is a **beta**, provided "as-is". Actions taken through your Airwallex account, whether you start them or an AI agent does on your behalf, are governed by the [Airwallex Terms of Service](https://www.airwallex.com/terms) you accepted when you created your account. You are responsible for safeguarding your credentials. The plugin gives no financial, legal or tax advice, and its output should be reviewed by a qualified person before you act on it.

## Logo

The logo is the vendor's `icon.svg` from [airwallex/airwallex-marketplace](https://github.com/airwallex/airwallex-marketplace/tree/f9d74f7ddb1b6ccadc3b05cb8f5c1ac54ed4b16a/plugins/airwallex-agentos/assets), unchanged. The vendor states no separate terms for its brand assets. The mark is a trademark of its owner.

## License

MIT, for the files in this folder.

The skills, the MCP server details, the descriptions and the logo come from [airwallex/airwallex-marketplace](https://github.com/airwallex/airwallex-marketplace) at commit `f9d74f7ddb1b6ccadc3b05cb8f5c1ac54ed4b16a`, licensed under the Apache License, Version 2.0 (SPDX `Apache-2.0`), "Copyright 2025 Airwallex". The licence text is in `assets/LICENSE-Apache-2.0.txt` and `skills/LICENSE`. This plugin changes the description wording and metadata and leaves the skills and the logo as published. Apache-2.0 does not grant any right to the Airwallex name or logo beyond describing where the plugin comes from.

**Licence review of the source, 2026-11-13: Apache-2.0 confirmed, with open points.** This is not a clean "no issues" result:

- The source repository has **no NOTICE file**, so there is no NOTICE text to carry forward. Apache-2.0 only requires preserving a NOTICE that exists.
- The copyright line names "Airwallex" with no legal entity, and no file has a per-file header or SPDX tag.
- The vendor's `marketplace.json` files carry no licence field; the `plugin.json` files do (`Apache-2.0`).
- No dual licensing, no other licence on any skill, no GPL or other dependencies (the source has no dependency manifests or scripts), and no extra restrictions in the licence text were found.
- The vendor's README points to the Airwallex Terms of Service for use of the service. That governs use of your Airwallex account, not the licence of the files.
