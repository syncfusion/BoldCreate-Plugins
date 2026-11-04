# Unsplash

BoldCreate plugin that connects agents to Unsplash through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Find and use free HD images.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Unsplash**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Unsplash**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install unsplash@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "unsplash": {
      "type": "http",
      "url": "https://mcp.unsplash.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Unsplash in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Unsplash: https://unsplash.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Unsplash mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #000000, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
