# Ramp Data

BoldCreate plugin that connects agents to Ramp Data through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search and analyze Ramp spend across 50,000+ businesses.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Ramp Data**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Ramp Data**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install ramp-data@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "ramp-data": {
      "type": "http",
      "url": "https://mcp.ramp.com/ramp-data/anthropic/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Ramp Data: https://ramp.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
