# Botify MCP

BoldCreate plugin that connects agents to Botify MCP through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

AI search visibility, from insight to action.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Botify MCP**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Botify MCP**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install botify-mcp@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "botify-mcp": {
      "type": "http",
      "url": "https://mcp.botify.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Botify MCP in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Botify MCP: https://www.botify.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
