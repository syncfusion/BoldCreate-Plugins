# Cloudflare Developer Platform

BoldCreate plugin that connects agents to Cloudflare's developer docs through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search Cloudflare's developer documentation for Workers, Pages, R2, D1, and more.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Cloudflare Developer Platform**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Cloudflare Developer Platform**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install cloudflare@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "cloudflare": {
      "type": "http",
      "url": "https://docs.mcp.cloudflare.com/mcp"
    }
  }
}
```

## Setup

No settings.

This server needs no account or key.

## Docs

- Cloudflare MCP docs server: https://developers.cloudflare.com/mcp

## Logo

Neutral tile with the product's initials.

## License

MIT
