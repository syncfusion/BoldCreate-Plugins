# Juro contracts

BoldCreate plugin that connects agents to Juro contracts through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Query & work with contracts effortlessly throughout the lifecycle to agree contracts faster.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Juro contracts**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Juro contracts**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install juro-contracts@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "juro-contracts": {
      "type": "http",
      "url": "https://integrations.app.juro.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Juro contracts in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Juro contracts: https://juro.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
