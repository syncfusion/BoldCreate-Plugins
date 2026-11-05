# Lorikeet

BoldCreate plugin that connects agents to Lorikeet through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

A universal concierge for complex businesses.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Lorikeet**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Lorikeet**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install lorikeet@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "lorikeet": {
      "type": "http",
      "url": "https://mcp.lorikeetcx.ai/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Lorikeet in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Lorikeet: https://www.lorikeetcx.ai/

## Logo

Icon downloaded from the Claude connector directory listing for Lorikeet. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
