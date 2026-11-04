# Fireworks AI Docs

BoldCreate plugin that connects agents to Fireworks AI's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search Fireworks AI's official documentation for inference, fine-tuning, and deployed models.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Fireworks AI Docs**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Fireworks AI Docs**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install fireworks-ai@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "fireworks-ai": {
      "type": "http",
      "url": "https://docs.fireworks.ai/mcp"
    }
  }
}
```

## Setup

No settings.

This server needs no account or key.

## Docs

- Fireworks AI docs: https://docs.fireworks.ai

## Logo

Neutral tile with the product's initials.

## License

MIT
