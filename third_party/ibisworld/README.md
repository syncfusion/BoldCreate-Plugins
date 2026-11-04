# IBISWorld

BoldCreate plugin that connects agents to IBISWorld through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Financials, risk data and analysis on 50,000 industries.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **IBISWorld**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **IBISWorld**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install ibisworld@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "ibisworld": {
      "type": "http",
      "url": "https://mcp.ibisworld.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to IBISWorld in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- IBISWorld: https://www.ibisworld.com/

## Logo

Icon downloaded from the Claude connector directory listing for IBISWorld, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
