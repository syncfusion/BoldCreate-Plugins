# AUTONOMAD

BoldCreate plugin that connects agents to AUTONOMAD through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Flights, hotels and tours booked in one payment, and changed when plans change, all from Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **AUTONOMAD**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **AUTONOMAD**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install autonomad@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "autonomad": {
      "type": "http",
      "url": "https://mcp.autonomad.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- AUTONOMAD: https://www.autonomad.ai/

## Logo

Icon downloaded from the Claude connector directory listing for AUTONOMAD, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
