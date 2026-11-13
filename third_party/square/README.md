# Square

BoldCreate plugin that connects agents to Square through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Work with payments, orders, catalog, customers, and invoices.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Square**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Square**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install square@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "square": {
      "type": "http",
      "url": "https://mcp.squareup.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to their own Square account in the browser (OAuth). Square's own repository says the hosted server uses OAuth, so you do not create or manage access tokens.

## Authentication

A live check on 2026-11-13 found:

- An unauthenticated `initialize` request returned HTTP 401 with `WWW-Authenticate: Bearer` and a link to the protected-resource metadata.
- The metadata names `https://mcp.squareup.com` as the authorization server.
- The authorization server metadata lists a registration endpoint (dynamic client registration), PKCE with `plain` and `S256`, the `authorization_code` and `refresh_token` grants, and the token endpoint methods `client_secret_basic`, `client_secret_post` and `none`. It says client ID metadata documents are not supported.
- The protected-resource metadata at the server root lists 48 scopes, from `BANK_ACCOUNTS_READ` to `LOYALTY_WRITE`. The metadata for the `/mcp` path lists none. This plugin sets no scopes.

So members connect without a client ID or client secret from your team. No registration request was sent to the server during the check.

**Not checked.** The tool list is behind sign-in, so `tools/list` was not called.

## Other endpoints

Square's repository says the older `https://mcp.squareup.com/sse` endpoint is still served for existing SSE setups. This plugin uses `/mcp`.

The repository [square/square-mcp-server](https://github.com/square/square-mcp-server) is the self-hosted server. It runs on your own machine with your own access token. This plugin does not use it, and nothing was copied from it.

## Included

MCP server only. No skills, agents or rules.

## Docs

- Square MCP documentation: https://developer.squareup.com/docs/mcp
- Square MCP server source: https://github.com/square/square-mcp-server

## Logo

The Square mark taken from the navigation bar of developer.squareup.com, in Square's light-mode text colour `#151C1F`, on a padded white tile. It is a trademark of its owner and is not covered by the MIT licence.

## License

MIT
