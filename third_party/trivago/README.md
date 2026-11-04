# Trivago

BoldCreate plugin that connects agents to Trivago through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Use trivago's powerful metasearch to find your ideal hotel and compare prices from multiple providers.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Trivago**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Trivago**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install trivago@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "trivago": {
      "type": "http",
      "url": "https://mcp.trivago.com/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Trivago: https://www.trivago.com/

## Logo

Trivago mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #E32851, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
