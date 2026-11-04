# Jotform

BoldCreate plugin that connects agents to Jotform through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Create forms, surveys, quizzes & analyze submissions.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Jotform**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Jotform**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install jotform@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "jotform": {
      "type": "http",
      "url": "https://mcp.jotform.com/mcp-app"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Jotform in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Jotform: https://www.jotform.com/

## Logo

Neutral tile with the product's initials.

## License

MIT
