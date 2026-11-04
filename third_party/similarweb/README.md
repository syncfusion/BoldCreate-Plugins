# Similarweb

BoldCreate plugin that connects agents to Similarweb through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Real time web, mobile app, and market data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Similarweb**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Similarweb**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install similarweb@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "similarweb": {
      "type": "http",
      "url": "https://mcp.similarweb.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Similarweb in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Similarweb: https://similarweb.com/

## Logo

Similarweb mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #092540, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
