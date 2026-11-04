# Speko

BoldCreate plugin that connects agents to Speko through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Make phone calls, transcribe audio, and narrate text.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Speko**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Speko**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install speko@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "speko": {
      "type": "http",
      "url": "https://mcp.speko.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Speko in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Speko: https://speko.ai/

## Logo

Neutral tile with the product's initials.}

## License

MIT
