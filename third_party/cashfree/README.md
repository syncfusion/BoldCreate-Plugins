# Cashfree

BoldCreate plugin that connects agents to Cashfree through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Query transactions, settlements, and reports, and call Payment Gateway APIs in Cashfree.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Cashfree**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Cashfree**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install cashfree@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "cashfree": {
      "type": "http",
      "url": "https://mcp.cashfree.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to the Cashfree Merchant Dashboard in the browser (OAuth). Cashfree's documentation says this needs an active merchant account with owner-level access. The tools then act on that merchant account.

## Authentication

A live check on 2026-11-13 found:

- An unauthenticated request to `/mcp` returned HTTP 401 with a JSON body (`"type": "authentication_error"`). The response had **no `WWW-Authenticate` header**, so the challenge does not point a client to the sign-in metadata.
- The protected-resource metadata at the server root names `https://mcp.cashfree.com` as the authorization server, with the scopes `mcp-workflows-read`, `mcp-workflows-write`, `mcp-pg-read` and `mcp-pg-write`. The path-specific metadata URL for `/mcp` returned 404.
- The authorization server metadata lists a registration endpoint (dynamic client registration), PKCE with S256, and the `authorization_code` and `refresh_token` grants.
- The only token endpoint method is `client_secret_post`, so registration issues a client secret. The metadata does not list client ID metadata documents.

Cashfree's documentation says Cursor and Claude Code handle the sign-in automatically, and that Claude and ChatGPT list Cashfree in their own directories. Because the 401 has no `WWW-Authenticate` header, a client that needs that header to find the metadata may not start the sign-in. That was not tested here.

**Not checked.** The tool list is behind sign-in, so `tools/list` was not called. No registration request was sent to the server.

## Tools

The tools below come from [Cashfree's MCP Server page](https://www.cashfree.com/docs/tools-ai/mcp-server), not from the live server.

- **Transactions (5):** `get_transaction_details`, `search_transactions`, `search_orders`, `get_payment_modes`, `search_product_docs`.
- **Settlements (14):** `get_unsettled_amount`, `get_next_settlement_date`, `search_standard_settlements`, `get_standard_settlement_details`, the `get_on_demand_*` tools, `search_on_demand_settlements`, `get_instant_settlement_rates`, `get_merchant_free_trial_credits`, `search_vendor_settlements`, `get_vendor_settlement_details`, `get_settlement_recon_routes`.
- **Reports (5):** `list_reports`, `generate_recon_report`, `generate_summary_report`, `get_report_status`, `download_report`.
- **Payment Gateway (13):** `create_order`, `get_order`, `get_order_extended`, `get_payment_by_id`, `get_payments_for_an_order`, `create_payment_link`, `fetch_payment_link_details`, `get_orders_for_a_payment_link`, `cancel_payment_link`, `create_refund`, `get_refund`, `simulate_payment`, `fetch_simulation`.

Some of these tools change data, for example `create_order`, `create_payment_link`, `create_refund` and `cancel_payment_link`. The page's use cases also mention dispute tools that are not in its tool table. Which of the two is right was not checked.

## What was left out

- **The local server.** `cashfree/cashfree-mcp` runs on the member's machine with Payment Gateway, Payouts and SecureID API keys in environment variables. It is a different server from the hosted one and needs stored secrets, so this plugin does not use it. Cashfree's docs say the hosted server lists Payment Gateway and dashboard tools. Payouts and SecureID tools appear only in the local server's README.
- **Agent skills.** `cashfree/agent-skills` has no skill folders to copy. It is a command-line installer that writes skill files from templates. It has no `LICENSE` file in the repository root, although its `package.json` says MIT. It also contains code that sends install and feedback events, including a merchant ID derived from an app ID, to a URL set when the package is published. The skills were not imported.
- **The Shopify demo.** `cashfree/shopify-cashfree-mcp` is a sample app for a Shopify store and is not a Cashfree server.
- **The documentation server.** Cashfree also hosts a documentation MCP server at `https://www.cashfree.com/docs/mcp`. It answered `initialize` with HTTP 200 and no sign-in, and its page lists two read-only search tools. It is a separate server and is not part of this plugin.

## Docs

- Cashfree MCP Server: https://www.cashfree.com/docs/tools-ai/mcp-server
- Cashfree AI Stack: https://www.cashfree.com/docs/tools-ai/overview

## Logo

Icon from `www.cashfree.com/favicon.svg`, centred on a white tile. It is the owner's own icon and a trademark of its owner. It is not covered by the MIT licence.

## License

MIT
