# Fireflies

BoldCreate plugin that connects agents to Fireflies through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Analyze and generate insights from meeting transcripts.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Fireflies**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Fireflies**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install fireflies@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "fireflies": {
      "type": "http",
      "url": "https://api.fireflies.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Fireflies in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Fireflies: https://docs.fireflies.ai/

## Logo

Neutral tile with the product's initials.

## License

MIT
