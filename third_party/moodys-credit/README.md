# Moody's Credit MCP

BoldCreate plugin that connects agents to Moody's Credit MCP through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Risk insights, analytics, and decision intelligence.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Moody's Credit MCP**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Moody's Credit MCP**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install moodys-credit@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "moodys-credit": {
      "type": "http",
      "url": "https://mcp.moodys.com/genai-ready-data/Credit/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Moody's Credit MCP in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Moody's Credit MCP: https://moodys.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
