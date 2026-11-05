# Vertiso Memory

BoldCreate plugin that connects agents to Vertiso Memory through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Portable, durable memory for every AI agent you use.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Vertiso Memory**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Vertiso Memory**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install vertiso-memory@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "vertiso-memory": {
      "type": "http",
      "url": "https://memory.vertiso.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Vertiso Memory in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Vertiso Memory: https://www.vertiso.com/

## Logo

Icon downloaded from the Claude connector directory listing for Vertiso Memory, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
