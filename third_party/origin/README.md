# Origin

BoldCreate plugin that connects agents to Origin through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

See what AI agents are doing across your endpoint fleet.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Origin**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Origin**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install origin@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "origin": {
      "type": "http",
      "url": "https://mcp.prod.originhq.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Origin in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Origin: https://www.originhq.com/

## Logo

Icon downloaded from the Claude connector directory listing for Origin, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
