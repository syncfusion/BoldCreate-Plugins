# Hubstaff

BoldCreate plugin that connects agents to Hubstaff through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

AI-ready workforce insights.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Hubstaff**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Hubstaff**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install hubstaff@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "hubstaff": {
      "type": "http",
      "url": "https://mcp.hubstaff.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Hubstaff in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Hubstaff: https://hubstaff.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
