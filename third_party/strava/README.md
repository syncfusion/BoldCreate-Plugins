# Strava

BoldCreate plugin that connects agents to Strava through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Analyze, summarize, and explore your Strava data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Strava**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Strava**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install strava@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "strava": {
      "type": "http",
      "url": "https://mcp.strava.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Strava in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Strava: https://strava.com/

## Logo

Strava mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #FC4C02, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
