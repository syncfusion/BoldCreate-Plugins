# Sonos

BoldCreate plugin that connects agents to Sonos through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Control your Sonos system.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Sonos**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Sonos**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install sonos@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "sonos": {
      "type": "http",
      "url": "https://mcp.ws.sonos.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Sonos in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Sonos: https://www.sonos.com/

## Logo

Sonos mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #000000, on a padded white tile. The mark is a trademark of its owner.}

## License

MIT
