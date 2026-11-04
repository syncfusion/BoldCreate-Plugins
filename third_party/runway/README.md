# Runway (runway.team)

BoldCreate plugin that connects agents to Runway (runway.team) through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Automate, coordinate, and monitor your team's mobile app releases.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Runway (runway.team)**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Runway (runway.team)**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install runway@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "runway": {
      "type": "http",
      "url": "https://mcp.runway.team/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Runway (runway.team) in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Runway (runway.team): https://www.runway.team/

## Logo

Neutral tile with the product's initials.}

## License

MIT
