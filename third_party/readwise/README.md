# Readwise

BoldCreate plugin that connects agents to Readwise through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Save, read, search, and learn.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Readwise**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Readwise**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install readwise@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "readwise": {
      "type": "http",
      "url": "https://mcp2.readwise.io/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Readwise in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Readwise: https://readwise.io/

## Logo

Neutral tile with the product's initials.}

## License

MIT
