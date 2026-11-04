# Brek - Hotel Wholesale Booking

BoldCreate plugin that connects agents to Brek - Hotel Wholesale Booking through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search and compare hotels with public and private wholesale rates.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Brek - Hotel Wholesale Booking**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Brek - Hotel Wholesale Booking**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install brek-hotel-wholesale-booking@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "brek-hotel-wholesale-booking": {
      "type": "http",
      "url": "https://mcp.brek.com/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Brek - Hotel Wholesale Booking: https://www.brek.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
