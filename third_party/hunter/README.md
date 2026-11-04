# Hunter

BoldCreate plugin that connects agents to Hunter through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Find and verify professional email addresses with Hunter.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Hunter**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Hunter**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install hunter@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "hunter": {
      "type": "http",
      "url": "https://mcp.hunter.io/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Hunter in the browser (OAuth). Tool calls run with that member's permissions. The vendor's repository does not state the auth mode for the hosted server, so confirm it against Hunter's documentation before release.

## Docs

- Hunter plugin (vendor repository): https://github.com/hunter-io/claude-plugin

## Logo

Neutral tile with the product's initials.

## License

MIT
