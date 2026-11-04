# ShipBob

BoldCreate plugin that connects agents to ShipBob through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Your orders, inventory, and shipments from any prompt.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **ShipBob**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **ShipBob**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install shipbob@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "shipbob": {
      "type": "http",
      "url": "https://api.shipbob.com/developer-api/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to ShipBob in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- ShipBob: https://www.shipbob.com/

## Logo

Icon downloaded from the Claude connector directory listing for ShipBob, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
