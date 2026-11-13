# Razorpay

BoldCreate plugin that connects agents to Razorpay through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Work with your Razorpay account: payments, orders, refunds, payment links, and settlements.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Razorpay**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Razorpay**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install razorpay@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "razorpay": {
      "type": "http",
      "url": "https://mcp.razorpay.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to their own Razorpay account in the browser (OAuth). Razorpay's documentation says OAuth gives per-user consent and avoids sharing API secret keys. It also says the page is available in India.

## Authentication

A live check on 2026-11-13 found:

- An unauthenticated request to `/mcp` returned HTTP 401 with `WWW-Authenticate: Bearer` and a link to the protected-resource metadata. The body said "Please provide your api key for authentication purposes".
- The metadata names `https://mcp.razorpay.com` as the authorization server. Neither the protected-resource metadata nor the authorization server metadata lists scopes.
- The authorization server metadata lists a registration endpoint (`/register`, dynamic client registration), PKCE with S256, and the `authorization_code` and `refresh_token` grants.
- The only token endpoint method is `client_secret_post`, so registration issues a client secret. The metadata does not list client ID metadata documents.
- A request with a made-up bearer token was rejected with `OAUTH_BAD_TOKEN`, so the server treats a bearer token as an OAuth token.

Razorpay's documentation describes dynamic client registration as the recommended method for MCP clients. Its example registration asks for a scope named `read_only`. This plugin sets no scopes, because the server does not list any.

**Merchant token.** Razorpay's repository README also describes a "merchant token": your API key and secret joined with a colon and base64 encoded, sent as `Authorization: Basic <token>`. `boldcreate.json` lists `basic-api-token` as an alternative. This plugin does not set it. I did not test that header.

**Not checked.** The tool list is behind sign-in, so `tools/list` was not called. No registration request was sent to the server during the check.

## What the server offers

The tools below come from the README of [razorpay/razorpay-mcp-server](https://github.com/razorpay/razorpay-mcp-server), not from the live server. Razorpay's documentation page says "35+ tools". The README table lists 45, of which 41 are marked as supported on the remote server.

| Area | Examples from the table |
| --- | --- |
| Payments | `fetch_payment`, `fetch_all_payments`, `capture_payment`, `update_payment`, `initiate_payment`, `submit_otp` |
| Payment links | `create_payment_link`, `create_payment_link_upi`, `send_payment_link`, `update_payment_link` |
| Orders | `create_order`, `fetch_order`, `update_order`, `fetch_order_payments` |
| Refunds | `fetch_refund`, `fetch_all_refunds`, `update_refund` |
| QR codes | `create_qr_code`, `fetch_qr_code`, `fetch_payments_for_qr_code` |
| Settlements and payouts | `fetch_all_settlements`, `fetch_settlement_recon_details`, `fetch_all_payouts` |
| Saved payment methods | `fetch_tokens`, `revoke_token` |
| Checkout helpers | `detect_stack`, `integrate_razorpay_checkout` |

The README marks four tools as not supported on the remote server: `create_refund`, `close_qr_code`, `create_instant_settlement` and `create_registration_link`. Razorpay's documentation says the local server gives access to all tools. This plugin uses only the remote server.

Several tools change data or move money: for example `capture_payment`, `initiate_payment`, `create_order`, `create_payment_link` and `send_payment_link`. Review them before you approve a call.

## What is not included

- **No skills, agents, rules or hooks.** Razorpay's repositories that I found hold servers and plugin templates, not skill folders.
- **Razorpay's Cursor plugin.** [razorpay/razorpay-cursor-plugins](https://github.com/razorpay/razorpay-cursor-plugins) has two plugins. Neither was imported. The remote-server one has a logo file whose own comment says it is a placeholder to replace "with the official Razorpay logo from the brand team". The other connects to a separate shopping server at `merchants.agent.razorpay.com`, which is a different product.
- **The local server.** It runs from Docker or a Go build with API keys in environment variables. This plugin does not use it.

## Docs

- Razorpay MCP server: https://razorpay.com/docs/mcp-server
- OAuth with the MCP server: https://razorpay.com/docs/mcp-server/oauth
- Server source: https://github.com/razorpay/razorpay-mcp-server

## Logo

The Razorpay glyph from `razorpay.com/assets/razorpay-glyph.svg`, placed on a white tile. It is a trademark of its owner and is not covered by the MIT licence.

## License

MIT
