# Addgene

BoldCreate plugin that connects agents to Addgene through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search Addgene's catalog of plasmids and viral preps.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Addgene**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Addgene**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install addgene@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "addgene": {
      "type": "http",
      "url": "https://mcp-server.addgene.org/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Addgene in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Addgene: https://www.addgene.org/

## Logo

Neutral tile with the product's initials.}

## License

MIT
