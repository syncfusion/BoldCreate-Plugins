# Reclaim.ai

BoldCreate plugin that connects agents to Reclaim.ai through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Advanced scheduling for personal and work calendars.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Reclaim.ai**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Reclaim.ai**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install reclaim-ai@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "reclaim-ai": {
      "type": "http",
      "url": "https://mcp.reclaim.ai/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Reclaim.ai in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Reclaim.ai: https://reclaim.ai/

## Logo

Neutral tile with the product's initials.}

## License

MIT
