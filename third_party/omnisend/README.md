# Omnisend MCP

BoldCreate plugin that connects agents to Omnisend MCP through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Analyze your Omnisend marketing performance.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Omnisend MCP**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Omnisend MCP**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install omnisend@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "omnisend": {
      "type": "http",
      "url": "https://mcp.omnisend.com/v2/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Omnisend MCP in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Omnisend MCP: https://www.omnisend.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
