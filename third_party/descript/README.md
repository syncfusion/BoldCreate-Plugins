# Descript

BoldCreate plugin that connects agents to Descript through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Import, edit, or create video with prompts.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Descript**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Descript**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install descript@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "descript": {
      "type": "http",
      "url": "https://api.descript.com/v2/mcp/claude"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Descript in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Descript: https://descript.com/

## Logo

Neutral tile with the product's initials.

## License

MIT
