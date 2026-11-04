# Crypto.com

BoldCreate plugin that connects agents to Crypto.com through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Real time prices, orders, charts, and more for crypto.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Crypto.com**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Crypto.com**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install crypto-com@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "crypto-com": {
      "type": "http",
      "url": "https://mcp.crypto.com/market-data/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Crypto.com: https://crypto.com/

## Logo

Icon downloaded from the Claude connector directory listing for Crypto.com, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
