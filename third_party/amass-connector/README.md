# Amass Connector

BoldCreate plugin that connects agents to Amass Connector through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Life sciences intelligence, unified — publications, trials, drugs, genes, regulatory approvals, and patents in one cross-linked connector.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Amass Connector**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Amass Connector**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install amass-connector@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "amass-connector": {
      "type": "http",
      "url": "https://mcp.amass.tech/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Amass Connector in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Amass Connector: https://amass.tech/

## Logo

Neutral tile with the product's initials.}

## License

MIT
