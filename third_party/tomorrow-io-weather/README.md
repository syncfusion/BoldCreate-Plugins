# Tomorrow.io Weather MCP App

BoldCreate plugin that connects agents to Tomorrow.io Weather MCP App through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Interactive weather, air quality, pollen, and wildfire-risk widgets powered by Tomorrow.io — live forecasts and conditions for any location, right inside Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Tomorrow.io Weather MCP App**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Tomorrow.io Weather MCP App**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install tomorrow-io-weather@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "tomorrow-io-weather": {
      "type": "http",
      "url": "https://api.tomorrow.io/v4/weather-intelligence/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Tomorrow.io Weather MCP App: https://www.tomorrow.io/

## Logo

Icon downloaded from the Claude connector directory listing for Tomorrow.io Weather MCP App, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
