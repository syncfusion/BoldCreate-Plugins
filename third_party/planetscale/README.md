# PlanetScale

BoldCreate plugin that connects agents to PlanetScale through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Inspect PlanetScale organizations, databases, branches, schema and Insights data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **PlanetScale**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **PlanetScale**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install planetscale@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "planetscale": {
      "type": "http",
      "url": "https://mcp.pscale.dev/mcp/planetscale"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to PlanetScale in the browser (OAuth). Tool calls run with that member's permissions.

The vendor's plugin also bundles two sets of skills (database best practices and a PlanetScale review pack). They are not part of this plugin.

## Docs

- PlanetScale plugin (vendor repository): https://planetscale.com/docs/connect/mcp

## Logo

PlanetScale mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #000000, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
