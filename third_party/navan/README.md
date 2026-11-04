# Navan

BoldCreate plugin that connects agents to Navan through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Access and analyze your Navan financial and travel data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Navan**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Navan**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install navan@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "navan": {
      "type": "http",
      "url": "https://mcp.navan.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Navan in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Navan: https://navan.com/

## Logo

Icon downloaded from the Claude connector directory listing for Navan, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
