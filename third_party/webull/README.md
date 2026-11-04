# Webull

BoldCreate plugin that connects agents to Webull through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Your Global Multi-Asset Trading & Analysis Powerhouse.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Webull**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Webull**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install webull@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "webull": {
      "type": "http",
      "url": "https://api.webull.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Webull in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Webull: https://www.webull.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
