# mcp.betterstack.com

BoldCreate plugin that connects agents to mcp.betterstack.com through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Better Stack plugin for Claude: observability for AI agents (logs, metrics, dashboards, uptime, incidents).

## Install

- **BoldCreate Connect:** open **Marketplace**, find **mcp.betterstack.com**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **mcp.betterstack.com**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install mcp-betterstack-com@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "mcp-betterstack-com": {
      "type": "http",
      "url": "https://mcp.betterstack.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to mcp.betterstack.com in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- mcp.betterstack.com: https://betterstack.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
