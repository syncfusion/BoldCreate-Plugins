# Vanta

BoldCreate plugin that connects agents to Vanta through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Review Vanta compliance tests, controls, vendors, and vulnerabilities.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Vanta**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Vanta**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install vanta@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "vanta-us": {
      "type": "http",
      "url": "https://mcp.vanta.com/mcp"
    },
    "vanta-eu": {
      "type": "http",
      "url": "https://mcp.eu.vanta.com/mcp"
    },
    "vanta-aus": {
      "type": "http",
      "url": "https://mcp.aus.vanta.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Vanta in the browser (OAuth). Tool calls run with that member's permissions.

The plugin lists one server per Vanta region: US, EU and Australia. Use the one that matches your Vanta account.

Vanta's MCP server is in beta and, per the vendor, is open to Vanta Admins only.

## Docs

- Vanta plugin (vendor repository): https://github.com/VantaInc/vanta-mcp-plugin

## Logo

Neutral tile with the product's initials.

## License

MIT
