# Plaid Developer Tools

BoldCreate plugin that connects agents to Plaid Developer Tools through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Monitor, debug, and optimize your Plaid integration.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Plaid Developer Tools**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Plaid Developer Tools**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install plaid-developer-tools@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "plaid-developer-tools": {
      "type": "http",
      "url": "https://api.dashboard.plaid.com/mcp/sse"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Plaid Developer Tools in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Plaid Developer Tools: https://plaid.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
