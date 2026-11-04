# Bigin by Zoho CRM

BoldCreate plugin that connects agents to Bigin by Zoho CRM through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Simplify sales and customer management for small businesses.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Bigin by Zoho CRM**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Bigin by Zoho CRM**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install bigin-by-zoho-crm@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "bigin-by-zoho-crm": {
      "type": "http",
      "url": "https://bigin.zohomcp.com/mcp/message"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Bigin by Zoho CRM in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Bigin by Zoho CRM: https://www.zoho.com/

## Logo

Icon downloaded from the Claude connector directory listing for Bigin by Zoho CRM, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
