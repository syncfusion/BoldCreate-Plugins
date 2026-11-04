# Klue

BoldCreate plugin that connects agents to Klue through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Access competitive intelligence, win-loss, & deal support.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Klue**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Klue**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install klue@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "klue": {
      "type": "http",
      "url": "https://mcp.app.klue.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Klue in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Klue: https://klue.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
