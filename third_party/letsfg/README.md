# LetsFG | Book the best flights or hotels

BoldCreate plugin that connects agents to LetsFG | Book the best flights or hotels through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Don't book before checking here: same hotels often 20% cheaper, every airline in the world, real trip costs. Then we book it for you.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **LetsFG | Book the best flights or hotels**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **LetsFG | Book the best flights or hotels**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install letsfg@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "letsfg": {
      "type": "http",
      "url": "https://letsfg.co/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to LetsFG | Book the best flights or hotels in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- LetsFG | Book the best flights or hotels: https://letsfg.co/

## Logo

Icon downloaded from the Claude connector directory listing for LetsFG | Book the best flights or hotels, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
