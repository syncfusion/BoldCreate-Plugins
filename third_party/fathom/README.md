# Fathom – Your Meeting Intelligence Layer

BoldCreate plugin that connects agents to Fathom – Your Meeting Intelligence Layer through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Your meeting notes, transcripts, and context – now part of every Claude conversation.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Fathom – Your Meeting Intelligence Layer**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Fathom – Your Meeting Intelligence Layer**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install fathom@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "fathom": {
      "type": "http",
      "url": "https://api.fathom.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Fathom – Your Meeting Intelligence Layer in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Fathom – Your Meeting Intelligence Layer: https://fathom.ai/

## Logo

Fathom – Your Meeting Intelligence Layer mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #9187FF, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
