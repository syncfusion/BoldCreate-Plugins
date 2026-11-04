# WorkOS

BoldCreate plugin that connects agents to WorkOS through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Manage your WorkOS workspace from Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **WorkOS**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **WorkOS**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install workos@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "workos": {
      "type": "http",
      "url": "https://mcp.workos.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to WorkOS in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- WorkOS: https://workos.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
