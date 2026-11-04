# Zillow

BoldCreate plugin that connects agents to Zillow through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search homes, rentals, neighborhoods, and affordability.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Zillow**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Zillow**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install zillow@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "zillow": {
      "type": "http",
      "url": "https://mcp.zillow.com/api/v2"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Zillow: https://www.zillow.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Zillow mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #006AFF, on a padded white tile. The mark is a trademark of its owner.}

## License

MIT
