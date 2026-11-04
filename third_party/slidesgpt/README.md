# SlidesGPT

BoldCreate plugin that connects agents to SlidesGPT through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Make presentations and slides, export to PowerPoint.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **SlidesGPT**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **SlidesGPT**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install slidesgpt@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "slidesgpt": {
      "type": "http",
      "url": "https://claude.slidesgpt.com/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- SlidesGPT: https://slidesgpt.com/

## Logo

Neutral tile with the product's initials.

## License

MIT
