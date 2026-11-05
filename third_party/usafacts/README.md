# USAFacts Government Data Connector

BoldCreate plugin that connects agents to USAFacts Government Data Connector through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Give Claude a better source for government data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **USAFacts Government Data Connector**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **USAFacts Government Data Connector**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install usafacts@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "usafacts": {
      "type": "http",
      "url": "https://data.mcp.usafacts.org/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- USAFacts Government Data Connector: https://usafacts.org/

## Logo

Neutral tile with the product's initials.}

## License

MIT
