# Pitch

BoldCreate plugin that connects agents to Pitch through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Create, edit, and share presentations, then see who engaged with them.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Pitch**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Pitch**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install pitch@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "pitch": {
      "type": "http",
      "url": "https://mcp.pitch.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Pitch in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Pitch: https://pitch.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
