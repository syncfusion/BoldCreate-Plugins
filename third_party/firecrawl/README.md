# Firecrawl

BoldCreate plugin that connects agents to Firecrawl through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search the web, read pages, and research documentation with Firecrawl.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Firecrawl**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Firecrawl**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install firecrawl@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "firecrawl": {
      "type": "http",
      "url": "https://mcp.firecrawl.dev/v2/mcp-search"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Firecrawl in the browser (OAuth). Tool calls run with that member's permissions.

Requests send search queries and page URLs to Firecrawl. Include only what the task needs.

## Docs

- Firecrawl plugin (vendor repository): https://github.com/firecrawl/firecrawl-claude-plugin

## Logo

Neutral tile with the product's initials.

## License

MIT
