# Lumonic

BoldCreate plugin that connects agents to Lumonic through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Analyze portfolio data and reporting in Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Lumonic**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Lumonic**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install lumonic@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "lumonic": {
      "type": "http",
      "url": "https://mcp.lumonic.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Lumonic in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Lumonic: https://www.lumonic.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
