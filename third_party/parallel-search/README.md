# Parallel Search

BoldCreate plugin that connects agents to Parallel Search through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Free token-efficient search using Parallel.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Parallel Search**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Parallel Search**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install parallel-search@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "parallel-search": {
      "type": "http",
      "url": "https://search.parallel.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Parallel Search: https://parallel.ai/

## Logo

Neutral tile with the product's initials.}

## License

MIT
