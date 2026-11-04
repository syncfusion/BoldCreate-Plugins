# Unblocked

BoldCreate plugin that connects agents to Unblocked through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Bring full context to every agent and AI tools.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Unblocked**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Unblocked**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install unblocked@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "unblocked": {
      "type": "http",
      "url": "https://getunblocked.com/api/mcpsse"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Unblocked in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Unblocked: https://getunblocked.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
