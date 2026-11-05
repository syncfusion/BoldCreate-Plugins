# Embat

BoldCreate plugin that connects agents to Embat through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Ask Embat about cash, debt, payments, and accounting.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Embat**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Embat**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install embat@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "embat": {
      "type": "http",
      "url": "https://tellme.embat.io/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Embat in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Embat: https://www.embat.io/

## Logo

Icon downloaded from the Claude connector directory listing for Embat. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
