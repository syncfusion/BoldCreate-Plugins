# Dovetail

BoldCreate plugin that connects agents to Dovetail through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Turn scattered feedback into decisions grounded in customer evidence.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Dovetail**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Dovetail**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install dovetail@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "dovetail": {
      "type": "http",
      "url": "https://dovetail.com/api/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Dovetail in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Dovetail: https://dovetail.com/

## Logo

Icon downloaded from the Claude connector directory listing for Dovetail. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
