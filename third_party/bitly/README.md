# Bitly

BoldCreate plugin that connects agents to Bitly through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Shorten links, generate QR Codes, and track performance.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Bitly**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Bitly**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install bitly@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "bitly": {
      "type": "http",
      "url": "https://api-ssl.bitly.com/v4/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Bitly in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Bitly: https://bitly.com/

## Logo

Icon downloaded from the Claude connector directory listing for Bitly, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
