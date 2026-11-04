# Lucid

BoldCreate plugin that connects agents to Lucid through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Ideate, diagram, and align teams.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Lucid**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Lucid**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install lucid@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "lucid": {
      "type": "http",
      "url": "https://mcp.lucid.app/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Lucid in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Lucid: https://lucid.co/

## Logo

Lucid mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #282C33, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
