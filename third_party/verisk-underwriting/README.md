# Verisk Underwriting Intelligence

BoldCreate plugin that connects agents to Verisk Underwriting Intelligence through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Ask questions. Get underwriting insights from Verisk.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Verisk Underwriting Intelligence**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Verisk Underwriting Intelligence**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install verisk-underwriting@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "verisk-underwriting": {
      "type": "http",
      "url": "https://gatewaymcp.verisk.com/underwriting/intelligencemcp/v1"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Verisk Underwriting Intelligence in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Verisk Underwriting Intelligence: https://verisk.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
