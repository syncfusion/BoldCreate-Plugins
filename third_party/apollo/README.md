# Apollo

BoldCreate plugin that connects agents to Apollo through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search and enrich contacts and accounts in Apollo.io.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Apollo**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Apollo**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install apollo@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "apollo": {
      "type": "http",
      "url": "https://mcp.apollo.io/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Apollo in the browser (OAuth). Tool calls run with that member's permissions. The vendor's repository does not state the auth mode for the hosted server, so confirm it against Apollo's documentation before release.

## Docs

- Apollo plugin (vendor repository): https://github.com/apolloio/apollo-mcp-plugin

## Logo

Neutral tile with the product's initials.

## License

MIT
