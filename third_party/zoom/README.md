# Zoom

BoldCreate plugin that connects agents to Zoom through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search, recap, and act on your Zoom meetings.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Zoom**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Zoom**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install zoom@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "zoom": {
      "type": "http",
      "url": "https://mcp.zoom.us/mcp/zoom/streamable"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Zoom in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Zoom: https://developers.zoom.us/docs/mcp/

## Logo

Zoom mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #0B5CFF, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
