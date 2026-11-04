# Mixpanel

BoldCreate plugin that connects agents to Mixpanel through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Analyze, query, and manage your Mixpanel data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Mixpanel**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Mixpanel**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install mixpanel@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "mixpanel": {
      "type": "http",
      "url": "https://mcp.mixpanel.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Mixpanel in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Mixpanel: https://mixpanel.com/

## Logo

Mixpanel mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #7856FF, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
