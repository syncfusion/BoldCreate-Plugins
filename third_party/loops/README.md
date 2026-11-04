# Loops

BoldCreate plugin that connects agents to Loops through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Run Loops with Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Loops**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Loops**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install loops@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "loops": {
      "type": "http",
      "url": "https://mcp.loops.so/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Loops in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Loops: https://loops.so/

## Logo

Loops mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #FC5200, on a padded white tile. The mark is a trademark of its owner.}

## License

MIT
