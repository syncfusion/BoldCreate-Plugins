# Calendly

BoldCreate plugin that connects agents to Calendly through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Manage scheduling and access meeting recaps.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Calendly**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Calendly**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install calendly@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "calendly": {
      "type": "http",
      "url": "https://mcp.calendly.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Calendly in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Calendly: https://developer.calendly.com/

## Logo

Calendly mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #006BFF, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
