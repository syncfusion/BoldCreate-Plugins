# Brevo

BoldCreate plugin that connects agents to Brevo through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Analyze campaigns, know your audience and create drafts.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Brevo**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Brevo**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install brevo@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "brevo": {
      "type": "http",
      "url": "https://mcp.brevo.com/v1/anthropic/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Brevo in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Brevo: https://www.brevo.com/

## Logo

Brevo mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #0B996E, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
