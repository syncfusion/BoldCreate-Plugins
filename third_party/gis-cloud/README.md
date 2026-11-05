# GIS Cloud

BoldCreate plugin that connects agents to GIS Cloud through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Run your entire GIS workflow in plain language: maps, data, analysis, field apps, and reports.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **GIS Cloud**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **GIS Cloud**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install gis-cloud@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "gis-cloud": {
      "type": "http",
      "url": "https://mcp.giscloud.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to GIS Cloud in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- GIS Cloud: https://www.giscloud.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
