# Hive

BoldCreate plugin that connects agents to Hive through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Manage projects, tasks, approvals, resources, and customer work in Hive.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Hive**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Hive**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install hive@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "hive": {
      "type": "http",
      "url": "https://hive-mind.hive.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Hive in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Hive: https://hive.com/

## Logo

Hive mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #FF7A00, on a padded white tile. The mark is a trademark of its owner.}

## License

MIT
