# Helium 10

BoldCreate plugin that connects agents to Helium 10 through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Access your Helium 10 data directly in Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Helium 10**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Helium 10**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install helium-10@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "helium-10": {
      "type": "http",
      "url": "https://mcp.helium10.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Helium 10 in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Helium 10: https://www.helium10.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
