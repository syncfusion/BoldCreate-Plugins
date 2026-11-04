# Kahoot!

BoldCreate plugin that connects agents to Kahoot! through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Create kahoots instantly.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Kahoot!**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Kahoot!**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install kahoot@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "kahoot": {
      "type": "http",
      "url": "https://mcp.kahoot.it/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Kahoot! in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Kahoot!: https://www.kahoot.com/

## Logo

Kahoot! mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #46178F, on a padded white tile. The mark is a trademark of its owner.}

## License

MIT
