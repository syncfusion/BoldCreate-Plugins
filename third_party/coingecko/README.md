# CoinGecko

BoldCreate plugin that connects agents to CoinGecko through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Track cryptocurrency prices, markets, exchanges, and trending coins.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **CoinGecko**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **CoinGecko**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install coingecko@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "coingecko": {
      "type": "http",
      "url": "https://mcp.coingecko.com/mcp"
    }
  }
}
```

## Setup

No settings.

This server needs no account or key.

## Docs

- CoinGecko MCP server: https://www.coingecko.com/en/mcp

## Logo

Neutral tile with the product's initials.

## License

MIT
