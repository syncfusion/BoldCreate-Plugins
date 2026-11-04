# Webflow

BoldCreate plugin that connects agents to Webflow through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Design pages, manage CMS content, add motion, analyze traffic, and launch the whole site, all from a prompt and all inside the permissions your workspace already has.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Webflow**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Webflow**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install webflow@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "webflow": {
      "type": "http",
      "url": "https://mcp.webflow.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Webflow in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Webflow: https://developers.webflow.com/data/docs/ai-tools

## Logo

Webflow mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #146EF5, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
