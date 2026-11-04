# ZoomInfo

BoldCreate plugin that connects agents to ZoomInfo through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search ZoomInfo companies and contacts.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **ZoomInfo**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **ZoomInfo**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install zoominfo@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "zoominfo": {
      "type": "http",
      "url": "https://mcp.zoominfo.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to ZoomInfo in the browser (OAuth). Tool calls run with that member's permissions. The vendor's repository does not state the auth mode for the hosted server, so confirm it against ZoomInfo's documentation before release.

## Docs

- ZoomInfo plugin (vendor repository): https://github.com/Zoominfo/zoominfo-mcp-plugin

## Logo

Official ZoomInfo icon, downloaded from www.zoominfo.com. The mark is a trademark of its owner.

## License

MIT
