# ClickUp

BoldCreate plugin that connects agents to ClickUp through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Project management & collaboration for teams & agents.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **ClickUp**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **ClickUp**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install clickup@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "clickup": {
      "type": "http",
      "url": "https://mcp.clickup.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to ClickUp in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- ClickUp: https://developer.clickup.com/docs/connect-an-ai-assistant-to-clickups-mcp-server

## Logo

ClickUp mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #7B68EE, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
