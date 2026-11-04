# Fyxer

BoldCreate plugin that connects agents to Fyxer through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search your inbox, and draft replies in your voice.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Fyxer**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Fyxer**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install fyxer@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "fyxer": {
      "type": "http",
      "url": "https://app.fyxer.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Fyxer in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Fyxer: https://www.fyxer.com/

## Logo

Icon downloaded from the Claude connector directory listing for Fyxer, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
