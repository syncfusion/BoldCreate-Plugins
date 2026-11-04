# Twelve Data

BoldCreate plugin that connects agents to Twelve Data through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Real-time prices, 100+ technical indicators, and fundamentals for stocks, forex, crypto, and ETFs — ask in plain English, no API knowledge needed.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Twelve Data**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Twelve Data**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install twelve-data@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "twelve-data": {
      "type": "http",
      "url": "https://mcp.twelvedata.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Twelve Data in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Twelve Data: https://twelvedata.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
