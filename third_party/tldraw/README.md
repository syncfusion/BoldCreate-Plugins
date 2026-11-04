# tldraw

BoldCreate plugin that connects agents to tldraw through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Let Claude sketch, draw, and diagram with you.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **tldraw**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **tldraw**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install tldraw@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "tldraw": {
      "type": "http",
      "url": "https://tldraw-mcp-app.tldraw.workers.dev/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- tldraw: https://www.tldraw.dev/

## Logo

tldraw mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #FAFAFA, on a padded white tile. The mark is a trademark of its owner.}

## License

MIT
