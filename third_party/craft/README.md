# Craft

BoldCreate plugin that connects agents to Craft through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Notes & second brain.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Craft**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Craft**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install craft@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "craft": {
      "type": "http",
      "url": "https://mcp.craft.do/my/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Craft in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Craft: https://www.craft.do/

## Logo

Icon downloaded from the Claude connector directory listing for Craft, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
