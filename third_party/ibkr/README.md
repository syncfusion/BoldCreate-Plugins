# Interactive Brokers (IBKR)

BoldCreate plugin that connects agents to Interactive Brokers (IBKR) through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Trade, invest, analyze, and manage global markets.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Interactive Brokers (IBKR)**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Interactive Brokers (IBKR)**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install ibkr@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "ibkr": {
      "type": "http",
      "url": "https://api.ibkr.com/v1/api/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Interactive Brokers (IBKR) in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Interactive Brokers (IBKR): https://www.interactivebrokers.com/

## Logo

Neutral tile with the product's initials.

## License

MIT
