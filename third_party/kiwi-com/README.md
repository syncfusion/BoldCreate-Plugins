# Kiwi.com

BoldCreate plugin that connects agents to Kiwi.com through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search flights in Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Kiwi.com**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Kiwi.com**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install kiwi-com@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "kiwi-com": {
      "type": "http",
      "url": "https://mcp.kiwi.com/"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Kiwi.com: https://kiwi.com/

## Logo

Neutral tile with the product's initials.

## License

MIT
