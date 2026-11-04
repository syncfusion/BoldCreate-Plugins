# Sumble

BoldCreate plugin that connects agents to Sumble through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Deep research any account's teams, tech, and people.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Sumble**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Sumble**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install sumble@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "sumble": {
      "type": "http",
      "url": "https://mcp.sumble.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Sumble in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Sumble: https://sumble.com/

## Logo

Icon downloaded from the Claude connector directory listing for Sumble, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
