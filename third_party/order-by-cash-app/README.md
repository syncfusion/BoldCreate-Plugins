# Order by Cash App

BoldCreate plugin that connects agents to Order by Cash App through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Discover local food spots and order with a conversation.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Order by Cash App**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Order by Cash App**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install order-by-cash-app@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "order-by-cash-app": {
      "type": "http",
      "url": "https://connect.squareup.com/v2/mcp/cash-app"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Order by Cash App: https://block.xyz/

## Logo

Icon downloaded from the Claude connector directory listing for Order by Cash App, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
