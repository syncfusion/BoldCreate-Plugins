# MyGeotab MCP

BoldCreate plugin that connects agents to MyGeotab MCP through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Bring your fleet into Claude — analyze, manage, and act.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **MyGeotab MCP**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **MyGeotab MCP**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install mygeotab-mcp@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "mygeotab-mcp": {
      "type": "http",
      "url": "https://mcp.geotab.com/mygeotab"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to MyGeotab MCP in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- MyGeotab MCP: https://geotab.com/geotab-mcp-connector

## Logo

Icon downloaded from the Claude connector directory listing for MyGeotab MCP, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
