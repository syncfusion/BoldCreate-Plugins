# Tavily

BoldCreate plugin that connects agents to Tavily through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search the web and extract page content with Tavily.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Tavily**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Tavily**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install tavily@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "tavily": {
      "type": "http",
      "url": "https://mcp.tavily.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Tavily (OAuth). Tool calls run with that member's permissions.

The vendor repository does not state the auth mode for the hosted server. OAuth is an assumption. Confirm it against Tavily's MCP documentation before release.

## Docs

- Tavily plugin (vendor repository): https://github.com/tavily-ai/skills

## Logo

Neutral tile with the product's initials.

## License

MIT
