# AirOps

BoldCreate plugin that connects agents to AirOps through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Craft content that wins AI search.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **AirOps**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **AirOps**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install airops@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "airops": {
      "type": "http",
      "url": "https://app.airops.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to AirOps in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- AirOps: https://www.airops.com/

## Logo

Icon downloaded from the Claude connector directory listing for AirOps. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
