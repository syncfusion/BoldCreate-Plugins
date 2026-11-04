# Jotform Sign

BoldCreate plugin that connects agents to Jotform Sign through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Create, share, and edit e-signature documents right inside Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Jotform Sign**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Jotform Sign**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install jotform-sign@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "jotform-sign": {
      "type": "http",
      "url": "https://mcp.jotform.com/mcp-sign-v1"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Jotform Sign in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Jotform Sign: https://www.jotform.com/

## Logo

Icon downloaded from the Claude connector directory listing for Jotform Sign, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
