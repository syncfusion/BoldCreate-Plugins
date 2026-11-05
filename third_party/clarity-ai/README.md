# Clarity AI

BoldCreate plugin that connects agents to Clarity AI through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Simulate fund classifications under proposed SFDR 2.0.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Clarity AI**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Clarity AI**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install clarity-ai@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "clarity-ai": {
      "type": "http",
      "url": "https://clarity-sfdr20-mcp.pro.clarity.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Clarity AI: https://clarity.ai/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for Clarity AI. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
