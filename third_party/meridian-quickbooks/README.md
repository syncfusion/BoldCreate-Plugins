# Meridian Connector for QuickBooks

BoldCreate plugin that connects agents to Meridian Connector for QuickBooks through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Make changes to QuickBooks Online from within Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Meridian Connector for QuickBooks**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Meridian Connector for QuickBooks**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install meridian-quickbooks@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "meridian-quickbooks": {
      "type": "http",
      "url": "https://qbo-connector.meridian.pilot.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Meridian Connector for QuickBooks in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Meridian Connector for QuickBooks: https://meridian.pilot.com/

## Logo

Icon downloaded from the Claude connector directory listing for Meridian Connector for QuickBooks, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
