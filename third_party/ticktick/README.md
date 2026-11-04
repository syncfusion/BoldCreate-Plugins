# TickTick

BoldCreate plugin that connects agents to TickTick through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search, create and manage your tasks/habit it TickTick.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **TickTick**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **TickTick**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install ticktick@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "ticktick": {
      "type": "http",
      "url": "https://mcp.ticktick.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to TickTick in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- TickTick: https://ticktick.com/

## Logo

TickTick mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #4772FA, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
