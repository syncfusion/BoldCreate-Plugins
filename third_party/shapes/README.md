# Shapes

BoldCreate plugin that connects agents to Shapes through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Analyse your live people data, right in Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Shapes**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Shapes**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install shapes@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "shapes": {
      "type": "http",
      "url": "https://mcp.shapes.co/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Shapes in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Shapes: https://shapes.co/

## Logo

Icon downloaded from the Claude connector directory listing for Shapes. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
