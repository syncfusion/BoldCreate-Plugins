# FactSet AI-Ready Data

BoldCreate plugin that connects agents to FactSet AI-Ready Data through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Access institutional-quality financial data and analytics.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **FactSet AI-Ready Data**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **FactSet AI-Ready Data**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install factset@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "factset": {
      "type": "http",
      "url": "https://mcp.factset.com/content/v1"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to FactSet AI-Ready Data in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- FactSet AI-Ready Data: https://www.factset.com/

## Logo

Neutral tile with the product's initials.

## License

MIT
