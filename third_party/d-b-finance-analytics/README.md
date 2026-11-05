# D&B Finance Analytics

BoldCreate plugin that connects agents to D&B Finance Analytics through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Commercial credit decisioning and portfolio risk workflows for AI.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **D&B Finance Analytics**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **D&B Finance Analytics**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install d-b-finance-analytics@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "d-b-finance-analytics": {
      "type": "http",
      "url": "https://mcp.financeanalytics.dnb.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to D&B Finance Analytics in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- D&B Finance Analytics: https://www.dnb.com/

## Logo

Icon downloaded from the Claude connector directory listing for D&B Finance Analytics, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
