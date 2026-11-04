# Menti

BoldCreate plugin that connects agents to Menti through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Make Mentimeter presentations.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Menti**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Menti**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install menti@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "menti": {
      "type": "http",
      "url": "https://ai.mentimeter.com/api/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Menti in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Menti: https://www.mentimeter.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
