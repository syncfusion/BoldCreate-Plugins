# Rillet

BoldCreate plugin that connects agents to Rillet through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Query your live GL and financials in plain English.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Rillet**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Rillet**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install rillet@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "rillet": {
      "type": "http",
      "url": "https://api.rillet.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Rillet in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Rillet: https://www.rillet.com/

## Logo

Icon downloaded from the Claude connector directory listing for Rillet. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
