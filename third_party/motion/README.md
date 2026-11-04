# Motion Creative Analytics

BoldCreate plugin that connects agents to Motion Creative Analytics through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Analyze your Meta ad creative & competitor ad libraries.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Motion Creative Analytics**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Motion Creative Analytics**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install motion@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "motion": {
      "type": "http",
      "url": "https://projects.motionapp.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Motion Creative Analytics in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Motion Creative Analytics: https://motionapp.com/

## Logo

Neutral tile with the product's initials.

## License

MIT
