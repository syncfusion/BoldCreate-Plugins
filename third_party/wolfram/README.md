# Wolfram

BoldCreate plugin that connects agents to Wolfram through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Inject precise, real-time computation and knowledge.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Wolfram**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Wolfram**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install wolfram@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "wolfram": {
      "type": "http",
      "url": "https://agenttools.wolfram.com/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Wolfram: https://www.wolfram.com/

## Logo

Icon downloaded from the Claude connector directory listing for Wolfram. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
