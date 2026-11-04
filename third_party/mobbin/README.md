# Mobbin

BoldCreate plugin that connects agents to Mobbin through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Find UI & UX design references.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Mobbin**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Mobbin**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install mobbin@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "mobbin": {
      "type": "http",
      "url": "https://api.mobbin.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Mobbin in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Mobbin: https://mobbin.com/

## Logo

Neutral tile with the product's initials.

## License

MIT
