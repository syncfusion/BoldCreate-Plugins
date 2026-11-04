# Robin (Workplace)

BoldCreate plugin that connects agents to Robin (Workplace) through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Robin is the workplace platform teams use to manage desks, rooms, and hybrid office schedules, and optimize how their workplace is planned and used.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Robin (Workplace)**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Robin (Workplace)**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install robin@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "robin": {
      "type": "http",
      "url": "https://mcp.robinpowered.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Robin (Workplace) in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Robin (Workplace): https://robinpowered.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
