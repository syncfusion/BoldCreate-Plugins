# Shopify

BoldCreate plugin that connects agents to Shopify through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Build, manage, and analyze your Shopify store.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Shopify**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Shopify**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install shopify@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "shopify": {
      "type": "http",
      "url": "https://setup.shopify.com/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Shopify: https://www.shopify.com/

## Logo

Shopify mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #7AB55C, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
