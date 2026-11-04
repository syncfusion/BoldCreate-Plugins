# CoinMarketCap

BoldCreate plugin that connects agents to CoinMarketCap through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Real-time crypto market and on-chain data analysis.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **CoinMarketCap**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **CoinMarketCap**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install coinmarketcap@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "coinmarketcap": {
      "type": "http",
      "url": "https://mcp.coinmarketcap.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to CoinMarketCap in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- CoinMarketCap: https://coinmarketcap.com/

## Logo

CoinMarketCap mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #17181B, on a padded white tile. The mark is a trademark of its owner.}

## License

MIT
