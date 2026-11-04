# Wispr Flow

BoldCreate plugin that connects agents to Wispr Flow through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Your meetings, notes, and tasks from Wispr Flow — now native context for Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Wispr Flow**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Wispr Flow**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install wispr-flow@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "wispr-flow": {
      "type": "http",
      "url": "https://api.wisprflow.ai/connect/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Wispr Flow in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Wispr Flow: https://wisprflow.ai/

## Logo

Neutral tile with the product's initials.

## License

MIT
