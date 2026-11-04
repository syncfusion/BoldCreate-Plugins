# Consensus

BoldCreate plugin that connects agents to Consensus through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Explore scientific research.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Consensus**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Consensus**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install consensus@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "consensus": {
      "type": "http",
      "url": "https://mcp.consensus.app/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Consensus in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Consensus: https://consensus.app/

## Logo

Neutral tile with the product's initials.

## License

MIT
