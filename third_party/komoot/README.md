# komoot

BoldCreate plugin that connects agents to komoot through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Discover outdoor routes and highlights.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **komoot**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **komoot**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install komoot@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "komoot": {
      "type": "http",
      "url": "https://claude.main.komoot.net/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- komoot: https://www.komoot.com/

## Logo

Icon downloaded from the Claude connector directory listing for komoot, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
