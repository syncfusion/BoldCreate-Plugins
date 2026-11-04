# Roam Research

BoldCreate plugin that connects agents to Roam Research through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Let Claude read, search, and write in your Roam graphs.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Roam Research**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Roam Research**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install roam-research@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "roam-research": {
      "type": "http",
      "url": "https://mcp.roamresearch.com/mcp/claude"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Roam Research in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Roam Research: https://roamresearch.com/

## Logo

Roam Research mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #343A40, on a padded white tile. The mark is a trademark of its owner.}

## License

MIT
