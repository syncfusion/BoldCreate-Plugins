# Vaisala Xweather

BoldCreate plugin that connects agents to Vaisala Xweather through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Access real-time, forecast, and historical weather.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Vaisala Xweather**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Vaisala Xweather**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install vaisala-xweather@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "vaisala-xweather": {
      "type": "http",
      "url": "https://mcp.api.xweather.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Vaisala Xweather in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Vaisala Xweather: https://xweather.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
