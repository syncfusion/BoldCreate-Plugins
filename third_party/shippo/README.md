# Shippo

BoldCreate plugin that connects agents to Shippo through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Multi-carrier shipping, from a single package to high volume: compare live rates across USPS, UPS, FedEx, DHL, and 40+ carriers, then buy labels, validate addresses, and track packages.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Shippo**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Shippo**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install shippo@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "shippo": {
      "type": "http",
      "url": "https://mcp.shippo.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Shippo in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Shippo: https://shippo.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
