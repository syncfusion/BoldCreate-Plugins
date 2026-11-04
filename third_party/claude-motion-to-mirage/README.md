# Claude Motion to Mirage

BoldCreate plugin that connects agents to Claude Motion to Mirage through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Import a Claude Motion video into Mirage.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Claude Motion to Mirage**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Claude Motion to Mirage**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install claude-motion-to-mirage@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "claude-motion-to-mirage": {
      "type": "http",
      "url": "https://mcp.mirage.app/claude-motion"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Claude Motion to Mirage in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Claude Motion to Mirage: https://mirage.app/

## Logo

Claude Motion to Mirage mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #D97757, on a padded white tile. The mark is a trademark of its owner.}

## License

MIT
