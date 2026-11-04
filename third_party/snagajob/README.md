# Snagajob

BoldCreate plugin that connects agents to Snagajob through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Find your next job.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Snagajob**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Snagajob**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install snagajob@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "snagajob": {
      "type": "http",
      "url": "https://platform.jobget.com/jobs-mcp/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Snagajob: https://www.jobget.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
