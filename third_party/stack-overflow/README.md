# Stack Overflow

BoldCreate plugin that connects agents to Stack Overflow through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Access Stack Overflow's trusted content.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Stack Overflow**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Stack Overflow**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install stack-overflow@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "stack-overflow": {
      "type": "http",
      "url": "https://mcp.stackoverflow.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Stack Overflow in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Stack Overflow: https://stackoverflow.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Stack Overflow mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #F58025, on a padded white tile. The mark is a trademark of its owner.}

## License

MIT
