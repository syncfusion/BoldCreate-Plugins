# Greptile

BoldCreate plugin that connects agents to Greptile through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Read and resolve Greptile pull request reviews and search your organization's coding patterns.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Greptile**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Greptile**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install greptile@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "greptile": {
      "type": "http",
      "url": "https://api.greptile.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Greptile in the browser (OAuth). Tool calls run with that member's permissions.

The vendor's plugin also ships a command-line reviewer (`/greptile:review`, `/greptile:login`) that runs a bundled Node script. That script and those commands are not part of this plugin, so you can read and resolve reviews but not dispatch one from your working branch.

## Docs

- Greptile plugin (vendor repository): https://github.com/greptileai/claude-plugin

## Logo

Greptile brand mark, downloaded from greptile.com (`greptile-brand-mark.png`) and reduced to 192 px. The mark is a trademark of its owner.

## License

MIT
