# Daloopa

BoldCreate plugin that connects agents to Daloopa through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Financial fundamental data and KPIs with hyperlinks.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Daloopa**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Daloopa**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install daloopa@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "daloopa": {
      "type": "http",
      "url": "https://mcp.daloopa.com/server/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Daloopa in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Daloopa: https://daloopa.com/

## Logo

Neutral tile with the product's initials.

## License

MIT
