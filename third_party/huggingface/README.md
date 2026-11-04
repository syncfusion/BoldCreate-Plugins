# Hugging Face

BoldCreate plugin that connects agents to Hugging Face through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search Hugging Face for models, datasets, and spaces.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Hugging Face**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Hugging Face**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install huggingface@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "huggingface": {
      "type": "http",
      "url": "https://huggingface.co/mcp"
    }
  }
}
```

## Setup

No settings.

This server needs no account or key.

## Docs

- Hugging Face MCP server: https://huggingface.co/mcp

## Logo

Neutral tile with the product's initials.

## License

MIT
