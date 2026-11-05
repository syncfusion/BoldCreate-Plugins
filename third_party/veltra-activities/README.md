# Veltra Activities

BoldCreate plugin that connects agents to Veltra Activities through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Design the genuine experiences of tomorrow.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Veltra Activities**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Veltra Activities**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install veltra-activities@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "veltra-activities": {
      "type": "http",
      "url": "https://ai.veltra.com/veltra/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Veltra Activities: https://www.veltra.com/

## Logo

Icon downloaded from the Claude connector directory listing for Veltra Activities. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
