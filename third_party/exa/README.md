# Exa

BoldCreate plugin that connects agents to Exa through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search the web and fetch page content with Exa.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Exa**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Exa**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install exa@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "exa": {
      "type": "http",
      "url": "https://mcp.exa.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Exa in the browser (OAuth). Tool calls run with that member's permissions.

Exa recommends OAuth. It also accepts an API key, which this plugin does not use.

## Docs

- Exa plugin (vendor repository): https://github.com/exa-labs/exa-mcp-server

## Logo

Neutral tile with the product's initials.

## License

MIT
