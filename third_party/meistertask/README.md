# MeisterTask

BoldCreate plugin that connects agents to MeisterTask through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Create, search, and update tasks, projects, and notes.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **MeisterTask**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **MeisterTask**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install meistertask@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "meistertask": {
      "type": "http",
      "url": "https://mcp.meistertask.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to MeisterTask in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- MeisterTask: https://www.meisterlabs.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
