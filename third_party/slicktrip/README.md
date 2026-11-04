# SlickTrip

BoldCreate plugin that connects agents to SlickTrip through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search flights, hotels and seats, then get alerted the moment a price drops.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **SlickTrip**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **SlickTrip**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install slicktrip@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "slicktrip": {
      "type": "http",
      "url": "https://mcp.slicktrip.com/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- SlickTrip: https://slicktrip.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
