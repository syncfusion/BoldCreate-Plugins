# Viator

BoldCreate plugin that connects agents to Viator through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Book travel experiences around the world.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Viator**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Viator**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install viator@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "viator": {
      "type": "http",
      "url": "https://exp-app-mcp.prod.ep.viator.com/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Viator: https://www.viator.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for Viator, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
