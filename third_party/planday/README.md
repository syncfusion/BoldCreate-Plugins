# Planday

BoldCreate plugin that connects agents to Planday through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Manage Planday scheduling (Early access).

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Planday**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Planday**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install planday@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "planday": {
      "type": "http",
      "url": "https://public-mcp-server.prod-westeurope.planday.cloud/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Planday in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Planday: https://planday.com/

## Logo

Icon downloaded from the Claude connector directory listing for Planday, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
