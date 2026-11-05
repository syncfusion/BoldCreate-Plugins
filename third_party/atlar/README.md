# Atlar

BoldCreate plugin that connects agents to Atlar through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Query your live treasury data: accounts, balances, transactions, and forecasts—directly from Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Atlar**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Atlar**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install atlar@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "atlar": {
      "type": "http",
      "url": "https://mcp.atlar.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Atlar in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Atlar: https://www.atlar.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
