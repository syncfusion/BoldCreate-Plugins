# Excalidraw

BoldCreate plugin that connects agents to Excalidraw through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Create and edit hand-drawn style diagrams, wireframes, and sketches from text prompts.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Excalidraw**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Excalidraw**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install excalidraw@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "excalidraw": {
      "type": "http",
      "url": "https://mcp.excalidraw.com/mcp"
    }
  }
}
```

## Setup

No settings.

This server needs no account or key.

## Docs

- Excalidraw MCP server: https://github.com/excalidraw/excalidraw-mcp

## Logo

Neutral tile with the product's initials.

## License

MIT
