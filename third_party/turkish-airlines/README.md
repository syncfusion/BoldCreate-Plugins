# Turkish Airlines

BoldCreate plugin that connects agents to Turkish Airlines through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search flights, plan trips, and manage bookings.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Turkish Airlines**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Turkish Airlines**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install turkish-airlines@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "turkish-airlines": {
      "type": "http",
      "url": "https://mcp-app.turkishtechlab.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Turkish Airlines in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Turkish Airlines: https://www.turkishairlines.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for Turkish Airlines. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
