# Fastmail

BoldCreate plugin that connects agents to Fastmail through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

An MCP server for Fastmail customers and accounts.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Fastmail**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Fastmail**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install fastmail@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "fastmail": {
      "type": "http",
      "url": "https://api.fastmail.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Fastmail in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Fastmail: https://fastmail.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
