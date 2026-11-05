# Onfire

BoldCreate plugin that connects agents to Onfire through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

GTM intelligence, prospecting, and buying signals.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Onfire**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Onfire**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install onfire@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "onfire": {
      "type": "http",
      "url": "https://mcp.onfire.ai/v1/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Onfire in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Onfire: https://onfire.ai/

## Logo

Neutral tile with the product's initials.}

## License

MIT
