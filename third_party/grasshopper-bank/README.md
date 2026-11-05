# Grasshopper Bank

BoldCreate plugin that connects agents to Grasshopper Bank through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Query and analyze your financial data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Grasshopper Bank**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Grasshopper Bank**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install grasshopper-bank@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "grasshopper-bank": {
      "type": "http",
      "url": "https://grasshopper-mcp.prd.narmitech.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Grasshopper Bank in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Grasshopper Bank: https://www.grasshopper.bank/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for Grasshopper Bank, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
