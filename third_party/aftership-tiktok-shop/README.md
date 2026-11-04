# AfterShip Channels for TikTok Shop

BoldCreate plugin that connects agents to AfterShip Channels for TikTok Shop through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

List, sync & grow your TikTok Shop business.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **AfterShip Channels for TikTok Shop**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **AfterShip Channels for TikTok Shop**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install aftership-tiktok-shop@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "aftership-tiktok-shop": {
      "type": "http",
      "url": "https://mcp.aftership.com/channels"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to AfterShip Channels for TikTok Shop in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- AfterShip Channels for TikTok Shop: https://www.aftership.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for AfterShip Channels for TikTok Shop. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
