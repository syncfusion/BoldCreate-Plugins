# Fibery

BoldCreate plugin that connects agents to Fibery through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Build your modular workspace with Claude: describe any process, from roadmaps and CRM to hiring and OKRs, and get it set up in Fibery, a work platform for orgs run by nerds.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Fibery**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Fibery**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install fibery@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "fibery": {
      "type": "http",
      "url": "https://mcp.fibery.io/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Fibery in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Fibery: https://fibery.com/

## Logo

Icon downloaded from the Claude connector directory listing for Fibery. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
