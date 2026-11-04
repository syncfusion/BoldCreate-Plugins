# TikTok for Business

BoldCreate plugin that connects agents to TikTok for Business through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Create, manage, and analyze advertising campaigns on TikTok.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **TikTok for Business**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **TikTok for Business**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install tiktok-for-business@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "tiktok-for-business": {
      "type": "http",
      "url": "https://business-api.tiktok.com/open_mcp/tt-ads-mcp-layer-anthropic"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to TikTok for Business in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- TikTok for Business: https://www.tiktok.com/

## Logo

TikTok for Business mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #000000, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
