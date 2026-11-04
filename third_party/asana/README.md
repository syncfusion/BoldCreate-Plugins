# Asana

BoldCreate plugin that connects agents to Asana through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Connect to Asana to coordinate tasks, projects, and goals.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Asana**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Asana**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install asana@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "asana": {
      "type": "http",
      "url": "https://mcp.asana.com/v2/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Asana in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Asana: https://developers.asana.com/docs/using-asanas-mcp-server

## Logo

Asana mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #F06A6A, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
