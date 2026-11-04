# Play Sheet Music

BoldCreate plugin that connects agents to Play Sheet Music through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Ask Claude to generate and play some sheet music for you with a visual component.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Play Sheet Music**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Play Sheet Music**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install play-sheet-music@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "play-sheet-music": {
      "type": "http",
      "url": "https://example-server.modelcontextprotocol.io/sheet-music/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Play Sheet Music: https://modelcontextprotocol.io/

## Logo

Icon downloaded from the Claude connector directory listing for Play Sheet Music. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
