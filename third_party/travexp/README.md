# TravExp

BoldCreate plugin that connects agents to TravExp through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Create rich, interactive travel itineraries.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **TravExp**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **TravExp**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install travexp@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "travexp": {
      "type": "http",
      "url": "https://travexpserver-1-5480123242.us-central1.run.app/mcp-standard"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- TravExp: https://www.travexp.live/

## Logo

Neutral tile with the product's initials.}

## License

MIT
