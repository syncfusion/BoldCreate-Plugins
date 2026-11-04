# Wrike

BoldCreate plugin that connects agents to Wrike through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Manage, update and move work forward from Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Wrike**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Wrike**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install wrike@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "wrike": {
      "type": "http",
      "url": "https://mcp.wrike.com/v2"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Wrike in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Wrike: https://www.wrike.com/

## Logo

Neutral tile with the product's initials.

## License

MIT
