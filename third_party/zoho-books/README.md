# Zoho Books

BoldCreate plugin that connects agents to Zoho Books through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Zoho Books MCP for Smart Finance Ops.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Zoho Books**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Zoho Books**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install zoho-books@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "zoho-books": {
      "type": "http",
      "url": "https://claude-zohobooks.zohomcp.com/mcp/message"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Zoho Books in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Zoho Books: https://www.zoho.com/mcp/

## Logo

Icon downloaded from the Claude connector directory listing for Zoho Books, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
