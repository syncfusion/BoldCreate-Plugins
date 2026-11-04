# Superhuman Docs

BoldCreate plugin that connects agents to Superhuman Docs through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Create, search, update docs and tables.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Superhuman Docs**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Superhuman Docs**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install superhuman-docs@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "superhuman-docs": {
      "type": "http",
      "url": "https://docs.superhuman.com/apis/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Superhuman Docs in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Superhuman Docs: https://superhuman.com/

## Logo

Neutral tile with the product's initials.

## License

MIT
