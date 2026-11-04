# GovTribe

BoldCreate plugin that connects agents to GovTribe through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search US government contract opportunities and awards in GovTribe.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **GovTribe**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **GovTribe**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install govtribe@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "govtribe": {
      "type": "http",
      "url": "https://govtribe.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to GovTribe in the browser (OAuth). Tool calls run with that member's permissions.

The vendor repository does not state the auth mode. OAuth is an assumption. Confirm it against GovTribe's documentation before release.

## Docs

- GovTribe plugin (vendor repository): https://github.com/GovTribe/claude-plugin

## Logo

Neutral tile with the product's initials.

## License

MIT for this plugin's files.

The vendor repository (GovTribe/claude-plugin) is licensed Apache-2.0. This plugin contains only the server address from it, and no vendor code. The vendor's licence and copyright apply to their repository.
