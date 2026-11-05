# MindMeister

BoldCreate plugin that connects agents to MindMeister through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Build, search, and edit mind maps in Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **MindMeister**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **MindMeister**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install mindmeister@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "mindmeister": {
      "type": "http",
      "url": "https://mcp.mindmeister.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to MindMeister in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- MindMeister: https://www.meisterlabs.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
