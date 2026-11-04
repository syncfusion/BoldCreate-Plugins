# CourtListener

BoldCreate plugin that connects agents to CourtListener through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Legal research across millions of court records.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **CourtListener**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **CourtListener**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install courtlistener@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "courtlistener": {
      "type": "http",
      "url": "https://mcp.courtlistener.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to CourtListener in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- CourtListener: https://free.law/

## Logo

Neutral tile with the product's initials.

## License

MIT
