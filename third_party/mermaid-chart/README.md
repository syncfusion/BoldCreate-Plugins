# Mermaid Chart

BoldCreate plugin that connects agents to Mermaid Chart through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Validates Mermaid syntax, renders diagrams as high-quality SVG, and displays them instantly in an interactive UI where users can preview, zoom, and iterate in real time.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Mermaid Chart**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Mermaid Chart**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install mermaid-chart@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "mermaid-chart": {
      "type": "http",
      "url": "https://chatgpt.mermaid.ai/anthropic/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Mermaid Chart: https://www.mermaidchart.com/

## Logo

Mermaid Chart mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #FF3670, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
