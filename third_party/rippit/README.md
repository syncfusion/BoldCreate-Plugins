# Rippit

BoldCreate plugin that connects agents to Rippit through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Run dynamic AI analysis on 100% of conversations.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Rippit**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Rippit**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install rippit@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "rippit": {
      "type": "http",
      "url": "https://mcp.rippit.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Rippit in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Rippit: https://www.rippit.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
