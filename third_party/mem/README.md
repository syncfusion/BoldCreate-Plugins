# Mem

BoldCreate plugin that connects agents to Mem through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

The AI notebook for everything on your mind.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Mem**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Mem**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install mem@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "mem": {
      "type": "http",
      "url": "https://mcp.mem.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Mem in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Mem: https://get.mem.ai/

## Logo

Icon downloaded from the Claude connector directory listing for Mem. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
