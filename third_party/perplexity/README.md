# Perplexity Docs

BoldCreate plugin that connects agents to Perplexity's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search Perplexity's official Sonar and API documentation.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Perplexity Docs**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Perplexity Docs**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install perplexity@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "perplexity": {
      "type": "http",
      "url": "https://docs.perplexity.ai/mcp"
    }
  }
}
```

## Setup

No settings.

This server needs no account or key.

## Docs

- Perplexity docs: https://docs.perplexity.ai

## Logo

Neutral tile with the product's initials.

## License

MIT
