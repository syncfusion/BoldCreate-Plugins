# Brightdeck

BoldCreate plugin that connects agents to Brightdeck through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Create presentations and slides, compatible with PowerPoint.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Brightdeck**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Brightdeck**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install brightdeck@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "brightdeck": {
      "type": "http",
      "url": "https://api.brightdeck.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Brightdeck in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Brightdeck: https://brightdeck.ai/

## Logo

Neutral tile with the product's initials.}

## License

MIT
