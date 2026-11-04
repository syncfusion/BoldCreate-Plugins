# monday.com

BoldCreate plugin that connects agents to monday.com through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Manage monday.com boards, items, and workspaces.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **monday.com**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **monday.com**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install monday@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "monday": {
      "type": "http",
      "url": "https://mcp.monday.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to monday.com in the browser (OAuth). Tool calls run with that member's permissions.

The OAuth client is supplied by the BoldCreate Connect gateway.

## Docs

- monday.com plugin (vendor repository): https://github.com/mondaycom/mcp/tree/master/plugins/monday-crm

## Logo

Official monday.com icon, downloaded from monday.com. The mark is a trademark of its owner.

## License

MIT
