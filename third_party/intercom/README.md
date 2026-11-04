# Intercom

BoldCreate plugin that connects agents to Intercom through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search Intercom conversations, contacts, and help center articles.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Intercom**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Intercom**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install intercom@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "intercom": {
      "type": "http",
      "url": "https://mcp.intercom.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Intercom in the browser (OAuth). Tool calls run with that member's permissions.

The OAuth client is supplied by the BoldCreate Connect gateway.

## Docs

- Intercom plugin (vendor repository): https://github.com/intercom/intercom-plugin

## Logo

Intercom mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #6AFDEF, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
