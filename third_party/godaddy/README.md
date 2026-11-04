# GoDaddy

BoldCreate plugin that connects agents to GoDaddy through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search domains and check availability.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **GoDaddy**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **GoDaddy**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install godaddy@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "godaddy": {
      "type": "http",
      "url": "https://api.godaddy.com/v1/domains/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- GoDaddy: https://www.godaddy.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

GoDaddy mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #1BDBDB, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
