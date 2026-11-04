# Expensify

BoldCreate plugin that connects agents to Expensify through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search and analyze your Expensify data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Expensify**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Expensify**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install expensify@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "expensify": {
      "type": "http",
      "url": "https://www.expensify.com/mcp/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Expensify in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Expensify: https://www.expensify.com/

## Logo

Expensify mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #0185FF, on a padded white tile. The mark is a trademark of its owner.}

## License

MIT
