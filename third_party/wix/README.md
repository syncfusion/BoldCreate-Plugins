# Wix

BoldCreate plugin that connects agents to Wix through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Manage and build sites and apps on Wix.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Wix**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Wix**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install wix@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "wix": {
      "type": "http",
      "url": "https://mcp.wix.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Wix in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Wix: https://dev.wix.com/docs/sdk/articles/use-the-wix-mcp/about-the-wix-mcp

## Logo

Wix mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #0C6EFC, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
