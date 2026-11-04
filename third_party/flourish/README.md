# Flourish

BoldCreate plugin that connects agents to Flourish through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Turn data into interactive charts you can edit.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Flourish**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Flourish**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install flourish@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "flourish": {
      "type": "http",
      "url": "https://app.flourish.studio/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Flourish in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Flourish: https://flourish.studio/

## Logo

Neutral tile with the product's initials.}

## License

MIT
