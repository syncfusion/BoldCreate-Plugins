# Financial Datasets

BoldCreate plugin that connects agents to Financial Datasets through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Access stock market data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Financial Datasets**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Financial Datasets**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install financial-datasets@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "financial-datasets": {
      "type": "http",
      "url": "https://mcp.financialdatasets.ai/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Financial Datasets in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Financial Datasets: https://www.financialdatasets.ai/

## Logo

Neutral tile with the product's initials.}

## License

MIT
