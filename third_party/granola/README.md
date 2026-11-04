# Granola

BoldCreate plugin that connects agents to Granola through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

The AI notepad for meetings, now in Claude. Ask about your notes, transcripts and meeting context.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Granola**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Granola**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install granola@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "granola": {
      "type": "http",
      "url": "https://mcp.granola.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Granola in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Granola: https://docs.granola.ai/help-center/sharing/integrations/mcp

## Logo

Neutral tile with the product's initials.

## License

MIT
