# Coinversa Pulse

BoldCreate plugin that connects agents to Coinversa Pulse through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Live crypto, stock, gold & oil trading data from Hyperliquid: see what the best traders and whales are doing on Bitcoin, ETH, the S&P 500 and more.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Coinversa Pulse**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Coinversa Pulse**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install coinversa-pulse@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "coinversa-pulse": {
      "type": "http",
      "url": "https://mcp.coinversa.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Coinversa Pulse in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Coinversa Pulse: https://coinversa.ai/

## Logo

Icon downloaded from the Claude connector directory listing for Coinversa Pulse, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
