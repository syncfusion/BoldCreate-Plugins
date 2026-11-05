# Addepar MCP

BoldCreate plugin that connects agents to Addepar MCP through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Bring Addepar portfolio intelligence into Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Addepar MCP**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Addepar MCP**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install addepar-mcp@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "addepar-mcp": {
      "type": "http",
      "url": "https://mcp.addepar.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Addepar MCP in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Addepar MCP: https://addepar.com/

## Logo

Icon downloaded from the Claude connector directory listing for Addepar MCP. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
