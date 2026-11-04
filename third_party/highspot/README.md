# Highspot

BoldCreate plugin that connects agents to Highspot through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search, share content, and take action to win deals.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Highspot**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Highspot**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install highspot@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "highspot": {
      "type": "http",
      "url": "https://mcp.highspot.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Highspot in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Highspot: https://highspot.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for Highspot. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
