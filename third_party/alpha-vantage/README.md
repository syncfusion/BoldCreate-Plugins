# Alpha Vantage MCP Server

BoldCreate plugin that connects agents to Alpha Vantage MCP Server through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Stock market data: stocks, options, fundamentals, earnings, SEC filings, indices, news, exchange rates, commodities, and other trading signals to power your quantitative finance workflow.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Alpha Vantage MCP Server**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Alpha Vantage MCP Server**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install alpha-vantage@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "alpha-vantage": {
      "type": "http",
      "url": "https://mcp.alphavantage.co/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Alpha Vantage MCP Server in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Alpha Vantage MCP Server: https://alphavantage.co/

## Logo

Neutral tile with the product's initials.

## License

MIT
