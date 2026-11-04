# Fiscal.ai

BoldCreate plugin that connects agents to Fiscal.ai through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Clean Public Equity Fundamental Data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Fiscal.ai**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Fiscal.ai**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install fiscal-ai@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "fiscal-ai": {
      "type": "http",
      "url": "https://api.fiscal.ai/mcp/sse"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Fiscal.ai in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Fiscal.ai: https://fiscal.ai/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for Fiscal.ai. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
