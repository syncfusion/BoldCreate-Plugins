# Salesflare

BoldCreate plugin that connects agents to Salesflare through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Manage and explore your CRM in Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Salesflare**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Salesflare**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install salesflare@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "salesflare": {
      "type": "http",
      "url": "https://mcp.salesflare.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Salesflare in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Salesflare: https://salesflare.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
