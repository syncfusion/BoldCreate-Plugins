# Unthread

BoldCreate plugin that connects agents to Unthread through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Manage and automate your support tickets.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Unthread**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Unthread**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install unthread@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "unthread": {
      "type": "http",
      "url": "https://app.unthread.io/api/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Unthread in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Unthread: https://unthread.io/

## Logo

Icon downloaded from the Claude connector directory listing for Unthread. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
