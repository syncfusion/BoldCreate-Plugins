# Wiley Scholar Gateway

BoldCreate plugin that connects agents to Wiley Scholar Gateway through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Enhance responses with scholarly research and citations.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Wiley Scholar Gateway**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Wiley Scholar Gateway**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install wiley-scholar-gateway@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "wiley-scholar-gateway": {
      "type": "http",
      "url": "https://connector.scholargateway.ai/v2/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Wiley Scholar Gateway in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Wiley Scholar Gateway: https://www.wiley.com/

## Logo

Neutral tile with the product's initials.

## License

MIT
