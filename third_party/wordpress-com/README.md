# WordPress.com

BoldCreate plugin that connects agents to WordPress.com through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Secure AI access to manage your WordPress.com sites.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **WordPress.com**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **WordPress.com**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install wordpress-com@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "wordpress-com": {
      "type": "http",
      "url": "https://public-api.wordpress.com/wpcom/v2/mcp/v1"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to WordPress.com in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- WordPress.com: https://wordpress.com/

## Logo

Neutral tile with the product's initials.

## License

MIT
