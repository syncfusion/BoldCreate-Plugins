# Demographic and Health Surveys

BoldCreate plugin that connects agents to Demographic and Health Surveys through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Data from The Demographic and Health Surveys Program.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Demographic and Health Surveys**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Demographic and Health Surveys**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install dhs-surveys@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "dhs-surveys": {
      "type": "http",
      "url": "https://api.dhsprogram.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Demographic and Health Surveys in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Demographic and Health Surveys: https://dhsprogram.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
