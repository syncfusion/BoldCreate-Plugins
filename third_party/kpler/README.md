# Kpler

BoldCreate plugin that connects agents to Kpler through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Explore Kpler's maritime and commodities intelligence.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Kpler**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Kpler**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install kpler@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "kpler": {
      "type": "http",
      "url": "https://claude.mcp.kpler.com/v1/mcp/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Kpler in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Kpler: https://www.kpler.com/

## Logo

Icon downloaded from the Claude connector directory listing for Kpler. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
