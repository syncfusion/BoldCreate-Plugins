# OpenRush

BoldCreate plugin that connects agents to OpenRush through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

SEO and competitor analysis with live search data: keyword research, rank tracking, gap analysis, and site audits.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **OpenRush**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **OpenRush**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install openrush@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "openrush": {
      "type": "http",
      "url": "https://api.openrush.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to OpenRush in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- OpenRush: https://openrush.com/

## Logo

Icon downloaded from the Claude connector directory listing for OpenRush, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
