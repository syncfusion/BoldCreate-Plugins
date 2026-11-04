# Klaviyo

BoldCreate plugin that connects agents to Klaviyo through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Report, strategize & create with real-time Klaviyo data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Klaviyo**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Klaviyo**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install klaviyo@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "klaviyo": {
      "type": "http",
      "url": "https://mcp.klaviyo.com/mcp?include-mcp-app=true"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Klaviyo in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Klaviyo: https://klaviyo.com/

## Logo

Neutral tile with the product's initials.

## License

MIT
