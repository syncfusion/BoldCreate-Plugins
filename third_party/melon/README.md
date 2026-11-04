# Melon

BoldCreate plugin that connects agents to Melon through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Browse music charts & your personalized music picks.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Melon**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Melon**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install melon@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "melon": {
      "type": "http",
      "url": "https://mcp.melon.com/mcp/"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Melon: https://newsroom.kakaoent.com/

## Logo

Icon downloaded from the Claude connector directory listing for Melon, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
