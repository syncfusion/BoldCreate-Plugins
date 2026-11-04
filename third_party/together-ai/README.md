# Together AI Docs

BoldCreate plugin that connects agents to Together AI's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search Together AI's official documentation for models, inference, and fine-tuning.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Together AI Docs**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Together AI Docs**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install together-ai@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "together-ai": {
      "type": "http",
      "url": "https://docs.together.ai/mcp"
    }
  }
}
```

## Setup

No settings.

This server needs no account or key.

## Docs

- Together AI docs: https://docs.together.ai

## Logo

Neutral tile with the product's initials.

## License

MIT
