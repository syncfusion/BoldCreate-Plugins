# PocketSmith Complete Access

BoldCreate plugin that connects agents to PocketSmith Complete Access through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search and categorise transactions, track your budgets and analyse spending trends, forecast your net worth and monitor your cashflow! Work with your live PocketSmith data in plain language.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **PocketSmith Complete Access**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **PocketSmith Complete Access**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install pocketsmith-complete-access@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "pocketsmith-complete-access": {
      "type": "http",
      "url": "https://mcp.pocketsmith.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to PocketSmith Complete Access in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- PocketSmith Complete Access: https://www.pocketsmith.com/

## Logo

Icon downloaded from the Claude connector directory listing for PocketSmith Complete Access, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
