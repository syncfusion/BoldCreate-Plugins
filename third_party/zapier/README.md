# Zapier

BoldCreate plugin that connects agents to Zapier through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Run Zapier actions across the apps connected to your Zapier account.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Zapier**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Zapier**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install zapier@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "zapier": {
      "type": "http",
      "url": "https://mcp.zapier.com/api/v1/connect"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Zapier in the browser (OAuth). Tool calls run with that member's permissions.

The OAuth client is supplied by the BoldCreate Connect gateway.

## Docs

- Zapier plugin (vendor repository): https://github.com/zapier/zapier-mcp/tree/main/plugins/zapier

## Logo

Zapier mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #FF4F00, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
