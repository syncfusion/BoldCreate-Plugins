# Vuetify MCP

BoldCreate plugin that connects agents to Vuetify MCP through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Official Vuetify docs, APIs, and bins for AI agents.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Vuetify MCP**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Vuetify MCP**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install vuetify-mcp@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "vuetify-mcp": {
      "type": "http",
      "url": "https://mcp.vuetifyjs.com/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Vuetify MCP: https://vuetifyjs.com/

## Logo

Icon downloaded from the Claude connector directory listing for Vuetify MCP. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
