# Wealth.com

BoldCreate plugin that connects agents to Wealth.com through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Bring your clients' estate plans, tax returns, and documents into Claude — with instant snapshots, risk analysis, and advisor-ready summaries.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Wealth.com**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Wealth.com**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install wealth-com@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "wealth-com": {
      "type": "http",
      "url": "https://mcp.wealth.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Wealth.com in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Wealth.com: https://www.wealth.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for Wealth.com, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
