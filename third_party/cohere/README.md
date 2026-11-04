# Cohere Docs

BoldCreate plugin that connects agents to Cohere's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search Cohere's official documentation for the Command and Embed models and the Cohere API.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Cohere Docs**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Cohere Docs**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install cohere@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "cohere": {
      "type": "http",
      "url": "https://docs.cohere.com/mcp"
    }
  }
}
```

## Setup

No settings.

This server needs no account or key.

## Docs

- Cohere docs: https://docs.cohere.com

## Logo

Neutral tile with the product's initials.

## License

MIT
