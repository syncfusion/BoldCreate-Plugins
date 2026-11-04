# Xero

BoldCreate plugin that connects agents to Xero through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Access your Xero financials from any conversation.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Xero**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Xero**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install xero@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "xero": {
      "type": "http",
      "url": "https://mcp.xero.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Xero in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Xero: https://developer.xero.com/documentation/guides/mcp/

## Logo

Xero mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #13B5EA, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
