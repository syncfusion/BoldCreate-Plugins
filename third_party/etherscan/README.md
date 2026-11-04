# Etherscan

BoldCreate plugin that connects agents to Etherscan through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Explore wallets, tokens, transactions, contracts, logs, blocks, and gas across 60+ EVM chains with Etherscan.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Etherscan**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Etherscan**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install etherscan@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "etherscan": {
      "type": "http",
      "url": "https://mcp-keyless.etherscan.io/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Etherscan: https://etherscan.io/

## Logo

Neutral tile with the product's initials.}

## License

MIT
