# PaperOffice

BoldCreate plugin that connects agents to PaperOffice through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Built for companies. Ready for AI agents. The headless DMS for Claude: search, read, extract, approve, send for signing and archive documents in your own account, with your permissions.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **PaperOffice**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **PaperOffice**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install paperoffice@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "paperoffice": {
      "type": "http",
      "url": "https://mcp.paperoffice.ai/claude"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to PaperOffice in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- PaperOffice: https://paperoffice.ai/

## Logo

Neutral tile with the product's initials.}

## License

MIT
