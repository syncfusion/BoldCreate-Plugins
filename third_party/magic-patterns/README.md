# Magic Patterns

BoldCreate plugin that connects agents to Magic Patterns through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Discuss and iterate on Magic Patterns designs.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Magic Patterns**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Magic Patterns**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install magic-patterns@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "magic-patterns": {
      "type": "http",
      "url": "https://mcp.magicpatterns.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Magic Patterns in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Magic Patterns: https://www.magicpatterns.com/

## Logo

Icon downloaded from the Claude connector directory listing for Magic Patterns, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
