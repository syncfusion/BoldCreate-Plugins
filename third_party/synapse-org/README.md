# Synapse.org

BoldCreate plugin that connects agents to Synapse.org through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search and metadata tools for Synapse scientific data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Synapse.org**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Synapse.org**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install synapse-org@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "synapse-org": {
      "type": "http",
      "url": "https://mcp.synapse.org/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Synapse.org in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Synapse.org: https://sagebionetworks.org/

## Logo

Neutral tile with the product's initials.}

## License

MIT
