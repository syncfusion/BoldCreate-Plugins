# Blockscout

BoldCreate plugin that connects agents to Blockscout through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Query Ethereum and EVM blockchains: blocks, transactions, addresses, tokens, and smart contracts.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Blockscout**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Blockscout**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install blockscout@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "blockscout": {
      "type": "http",
      "url": "https://mcp.blockscout.com/mcp"
    }
  }
}
```

## Setup

No settings.

This server needs no account or key.

## Docs

- Blockscout MCP server: https://www.blockscout.com/mcp

## Logo

Neutral tile with the product's initials.

## License

MIT
