# Aiwyn Tax (formerly Column Tax)

BoldCreate plugin that connects agents to Aiwyn Tax (formerly Column Tax) through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Estimate your federal & state taxes with Aiwyn's tax engine.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Aiwyn Tax (formerly Column Tax)**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Aiwyn Tax (formerly Column Tax)**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install aiwyn-tax@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "aiwyn-tax": {
      "type": "http",
      "url": "https://mcp.columnapi.com/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Aiwyn Tax (formerly Column Tax): https://aiwyn.ai/

## Logo

Icon downloaded from the Claude connector directory listing for Aiwyn Tax (formerly Column Tax), converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
