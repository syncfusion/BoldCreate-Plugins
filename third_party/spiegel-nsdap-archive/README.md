# NSDAP Archiv - DER SPIEGEL

BoldCreate plugin that connects agents to NSDAP Archiv - DER SPIEGEL through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search for NSDAP party members.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **NSDAP Archiv - DER SPIEGEL**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **NSDAP Archiv - DER SPIEGEL**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install spiegel-nsdap-archive@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "spiegel-nsdap-archive": {
      "type": "http",
      "url": "https://nsdap-mcp.prod.ki.spiegel.de/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to NSDAP Archiv - DER SPIEGEL in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- NSDAP Archiv - DER SPIEGEL: https://www.spiegel.de/

## Logo

Neutral tile with the product's initials.}

## License

MIT
