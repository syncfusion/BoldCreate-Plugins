# CData Connect AI

BoldCreate plugin that connects agents to CData Connect AI through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Managed MCP platform for 350 sources.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **CData Connect AI**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **CData Connect AI**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install cdata-connect-ai@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "cdata-connect-ai": {
      "type": "http",
      "url": "https://mcp.cloud.cdata.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to CData Connect AI in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- CData Connect AI: https://www.cdata.com/ai (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Neutral tile with the product's initials.}

## License

MIT
