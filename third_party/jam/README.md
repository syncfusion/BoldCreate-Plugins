# Jam

BoldCreate plugin that connects agents to Jam through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Record screen and collect automatic context for issues.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Jam**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Jam**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install jam@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "jam": {
      "type": "http",
      "url": "https://mcp.jam.dev/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Jam in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Jam: https://jam.dev/

## Logo

Icon downloaded from the Claude connector directory listing for Jam, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
