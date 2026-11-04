# Crunchbase

BoldCreate plugin that connects agents to Crunchbase through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Access reliable company data, market signals, and forward-looking predictions to research organizations, compare performance, uncover emerging trends, and make faster, more informed business decisions.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Crunchbase**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Crunchbase**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install crunchbase@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "crunchbase": {
      "type": "http",
      "url": "https://mcp.crunchbase.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Crunchbase in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Crunchbase: https://www.crunchbase.com/

## Logo

Crunchbase mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #0288D1, on a padded white tile. The mark is a trademark of its owner.}

## License

MIT
