# FreshBooks

BoldCreate plugin that connects agents to FreshBooks through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Check profit, cash, invoices, clients, and more in your FreshBooks account.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **FreshBooks**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **FreshBooks**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install freshbooks@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "freshbooks": {
      "type": "http",
      "url": "https://mcp.freshbooks.com/v1"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to their own FreshBooks account in the browser (OAuth) and approves the permissions. FreshBooks' support articles say the connection covers all active businesses on that login, and that answers follow the member's role in the FreshBooks account.

## What it does

FreshBooks describes the connector as a secure, read-only way to ask about live FreshBooks data. Its support article lists these areas:

- Core accounting reports: Profit and Loss, Balance Sheet, General Ledger, Trial Balance, and Revenue by Client
- Client management
- Estimates
- Expenses
- Invoicing and payments
- Recurring invoices
- Sales and item reporting

The same article lists four optional write permissions as "coming soon": manage revenue (invoices, estimates, credit notes, payments, recurring templates), manage payables (expenses and bills), manage operations (clients, projects, team members, time entries, billable items) and manage books (journal entries). The live server already lists matching scopes (see below), so write access may be offered at sign-in. Members choose which optional permissions to approve.

**Not checked.** The tool list is behind sign-in, so `tools/list` was not called. FreshBooks' articles describe the connector by area and do not name tools, so this README names none.

## Authentication

A live check on 2026-11-13 found:

- An unauthenticated request to `/v1` returned HTTP 401 with `WWW-Authenticate: Bearer`, a link to the protected-resource metadata, and a scope list.
- The metadata is served at `/.well-known/oauth-protected-resource/v1`. The root path returned 404. It names the resource "FreshBooks Aggregated MCP Gateway" and `https://auth.freshbooks.com/` as the authorization server.
- The scopes the server lists are `mcp:all:read`, `offline_access`, `mcp:revenue:write`, `mcp:payables:write`, `mcp:operations:write` and `mcp:books:write`. This plugin sets no scopes, so the client uses the list in the 401 challenge.
- The authorization server metadata lists a registration endpoint (`/service/auth/oauth/registration`, dynamic client registration), PKCE with `plain` and `S256`, and the grants `authorization_code` and `refresh_token`, among others.
- The token endpoint methods are `client_secret_basic` and `client_secret_post`, so registration issues a client secret. The metadata does not list client ID metadata documents.

So members connect without a client ID or client secret from your team. No registration request was sent to the server during the check.

## Left out

The FreshBooks GitHub organisation (`github.com/freshbooks`) has three repositories: `ember-responsive`, `freshbooks-nodejs-sdk` and `statsdecor`. None is an MCP server, plugin or skill, so nothing was imported. The server address comes from the live check and from FreshBooks' support articles, not from a repository. Cursor, Devin, Claude and OpenAI plugin repositories checked on the same day had no FreshBooks entry.

## Docs

- FreshBooks connector in Claude: https://support.freshbooks.com/hc/en-us/articles/47907329443597
- FreshBooks plugin for ChatGPT: https://support.freshbooks.com/hc/en-us/articles/49963536840077

## Logo

Icon from FreshBooks' site (`freshbooks.com/mask-icon.svg`), drawn in FreshBooks blue (`#0075DD`, the colour named in the site's `mask-icon` link) and centred on a white tile. It is FreshBooks' own mark and a trademark of its owner. It is not covered by the MIT licence.

## License

MIT
