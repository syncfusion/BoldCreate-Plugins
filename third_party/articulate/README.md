# Articulate

BoldCreate plugin that connects agents to Articulate through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Build interactive training right from Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Articulate**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Articulate**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install articulate@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "articulate": {
      "type": "http",
      "url": "https://mcp.articulate.com/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Articulate: https://www.articulate.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for Articulate, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
