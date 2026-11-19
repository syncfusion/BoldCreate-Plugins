# Hugging Face

BoldCreate plugin that connects agents to Hugging Face through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Connect your AI assistant to the Hugging Face Hub: search and explore models, datasets, Spaces, and papers.

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

Icon downloaded from the Claude connector directory listing for Hugging Face. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.

## License

MIT
