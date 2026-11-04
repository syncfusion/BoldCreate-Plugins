# Plaud

BoldCreate plugin that connects agents to Plaud through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search and extract insights from your Plaud recordings.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Plaud**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Plaud**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install plaud@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "plaud": {
      "type": "http",
      "url": "https://mcp.plaud.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Plaud in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Plaud: https://www.plaud.ai/

## Logo

Neutral tile with the product's initials.

## License

MIT
