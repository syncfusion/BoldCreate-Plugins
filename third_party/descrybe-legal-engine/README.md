# Descrybe Legal Engine

BoldCreate plugin that connects agents to Descrybe Legal Engine through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Ground your work in clean, structured U.S. primary law.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Descrybe Legal Engine**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Descrybe Legal Engine**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install descrybe-legal-engine@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "descrybe-legal-engine": {
      "type": "http",
      "url": "https://mcp.descrybe.com/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Descrybe Legal Engine: https://descrybe.com/

## Logo

Icon downloaded from the Claude connector directory listing for Descrybe Legal Engine. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
