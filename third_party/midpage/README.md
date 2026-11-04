# Midpage Legal Research

BoldCreate plugin that connects agents to Midpage Legal Research through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Conduct legal research and create work product.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Midpage Legal Research**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Midpage Legal Research**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install midpage@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "midpage": {
      "type": "http",
      "url": "https://app.midpage.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Midpage Legal Research in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Midpage Legal Research: https://www.midpage.ai/

## Logo

Neutral tile with the product's initials.}

## License

MIT
