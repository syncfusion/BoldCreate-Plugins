# Slack

BoldCreate plugin that connects agents to Slack through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search Slack messages, read channels and threads, and find context from your workspace.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Slack**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Slack**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install slack@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "slack": {
      "type": "http",
      "url": "https://mcp.slack.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Slack in the browser (OAuth). Tool calls run with that member's permissions.

The vendor's own plugin hard-codes an OAuth client ID. This plugin does not. The OAuth client is supplied by the BoldCreate Connect gateway.

## Docs

- Slack MCP plugin (vendor repository): https://github.com/slackapi/slack-mcp-plugin/tree/main

## Logo

Neutral tile with the product's initials.

## License

MIT
