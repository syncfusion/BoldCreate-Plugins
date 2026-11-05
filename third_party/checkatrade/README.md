# Checkatrade

BoldCreate plugin that connects agents to Checkatrade through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Find trusted local tradespeople and book fixed-price jobs — without leaving Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Checkatrade**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Checkatrade**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install checkatrade@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "checkatrade": {
      "type": "http",
      "url": "https://api.checkatrade.com/consumer-claude-mcp/v1/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Checkatrade: https://www.checkatrade.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
