# Leadfeeder

BoldCreate plugin that connects agents to Leadfeeder through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Look up companies that visit your website with Leadfeeder.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Leadfeeder**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Leadfeeder**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install leadfeeder@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "leadfeeder": {
      "type": "http",
      "url": "https://mcp.leadfeeder.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Leadfeeder in the browser (OAuth). Tool calls run with that member's permissions.

The vendor repository does not state the auth mode. OAuth is an assumption. Confirm it against Leadfeeder's MCP documentation before release.

## Docs

- Leadfeeder plugin (vendor repository): https://github.com/Leadfeeder/leadfeeder-mcp-plugin

## Logo

Neutral tile with the product's initials.

## License

MIT for this plugin's files.

The vendor repository (Leadfeeder/leadfeeder-mcp-plugin) is licensed Apache-2.0. This plugin contains only the server address from it, and no vendor code. The vendor's licence and copyright apply to their repository.
