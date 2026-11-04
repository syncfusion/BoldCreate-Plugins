# TEXT TO QUANT

BoldCreate plugin that connects agents to TEXT TO QUANT through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Backtest trading strategies written in plain English on real market data, with graded, honesty flagged reports.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **TEXT TO QUANT**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **TEXT TO QUANT**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install text-to-quant@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "text-to-quant": {
      "type": "http",
      "url": "https://www.texttoquant.com/api/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to TEXT TO QUANT in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- TEXT TO QUANT: https://www.texttoquant.com/

## Logo

Icon downloaded from the Claude connector directory listing for TEXT TO QUANT, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
