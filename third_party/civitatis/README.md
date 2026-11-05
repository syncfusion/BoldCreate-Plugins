# Civitatis

BoldCreate plugin that connects agents to Civitatis through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search, plan, and book tours and activities worldwide with Civitatis.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Civitatis**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Civitatis**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install civitatis@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "civitatis": {
      "type": "http",
      "url": "https://civitatis-claude-app.civitatis.com/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Civitatis: https://www.civitatis.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
