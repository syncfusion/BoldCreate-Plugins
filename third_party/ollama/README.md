# Ollama Docs

BoldCreate plugin that connects agents to Ollama's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search Ollama's official documentation for running and serving local large language models.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Ollama Docs**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Ollama Docs**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install ollama@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "ollama": {
      "type": "http",
      "url": "https://docs.ollama.com/mcp"
    }
  }
}
```

## Setup

No settings.

This server needs no account or key.

## Docs

- Ollama docs: https://docs.ollama.com

## Logo

Neutral tile with the product's initials.

## License

MIT
