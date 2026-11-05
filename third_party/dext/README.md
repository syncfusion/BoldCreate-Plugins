# Dext

BoldCreate plugin that connects agents to Dext through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

For accounting and bookkeeping firms: ask Dext about client data health, VAT and CT positions, aged debt, workflow and team capacity - across one client or your whole portfolio. Read-only.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Dext**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Dext**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install dext@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "dext": {
      "type": "http",
      "url": "https://app.dext.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Dext in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Dext: https://dext.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
