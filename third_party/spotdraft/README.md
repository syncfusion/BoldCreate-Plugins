# SpotDraft

BoldCreate plugin that connects agents to SpotDraft through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search, review, and manage contracts from your SpotDraft workspace, right inside Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **SpotDraft**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **SpotDraft**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install spotdraft@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "spotdraft": {
      "type": "http",
      "url": "https://mcp.us.spotdraft.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to SpotDraft in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- SpotDraft: https://spotdraft.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
