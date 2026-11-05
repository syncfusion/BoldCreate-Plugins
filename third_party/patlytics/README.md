# Patlytics

BoldCreate plugin that connects agents to Patlytics through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Prior art, claims, and portfolio search.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Patlytics**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Patlytics**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install patlytics@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "patlytics": {
      "type": "http",
      "url": "https://mcp.patlytics.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Patlytics in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Patlytics: https://www.patlytics.ai/

## Logo

Neutral tile with the product's initials.}

## License

MIT
