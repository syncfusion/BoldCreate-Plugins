# Ahrefs

BoldCreate plugin that connects agents to Ahrefs through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

SEO & AI search analytics.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Ahrefs**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Ahrefs**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install ahrefs@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "ahrefs": {
      "type": "http",
      "url": "https://api.ahrefs.com/mcp/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Ahrefs in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Ahrefs: https://docs.ahrefs.com/

## Logo

Neutral tile with the product's initials.

## License

MIT
