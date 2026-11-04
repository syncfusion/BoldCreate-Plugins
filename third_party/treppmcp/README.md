# TreppMCP

BoldCreate plugin that connects agents to TreppMCP through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Bring Trepp's trusted CRE, CMBS, CRE CLO, and Lending data, analytics, and market intelligence directly into your AI workflows.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **TreppMCP**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **TreppMCP**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install treppmcp@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "treppmcp": {
      "type": "http",
      "url": "https://mcp.trepp.com/v1/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to TreppMCP in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- TreppMCP: https://www.trepp.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
