# Eraser

BoldCreate plugin that connects agents to Eraser through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Generate, manage, and update Eraser diagrams and files.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Eraser**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Eraser**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install eraser@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "eraser": {
      "type": "http",
      "url": "https://app.eraser.io/api/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Eraser in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Eraser: https://eraser.io/

## Logo

Icon downloaded from the Claude connector directory listing for Eraser. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
