# Dropbox

BoldCreate plugin that connects agents to Dropbox through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search, organize, and take action on your Dropbox content.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Dropbox**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Dropbox**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install dropbox@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "dropbox": {
      "type": "http",
      "url": "https://mcp.dropbox.com/claude_app_mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Dropbox in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Dropbox: https://www.dropbox.com/

## Logo

Dropbox mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #0061FF, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
