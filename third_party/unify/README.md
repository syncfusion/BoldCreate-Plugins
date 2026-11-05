# Unify

BoldCreate plugin that connects agents to Unify through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Find, enrich, and sequence prospects from 40+ data sources.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Unify**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Unify**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install unify@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "unify": {
      "type": "http",
      "url": "https://mcp.unifygtm.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Unify in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Unify: https://www.unifygtm.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
