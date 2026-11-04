# Sprinto MCP

BoldCreate plugin that connects agents to Sprinto MCP through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Manage trust workflows.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Sprinto MCP**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Sprinto MCP**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install sprinto@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "sprinto": {
      "type": "http",
      "url": "https://mcp.sprinto.com/tools"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Sprinto MCP in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Sprinto MCP: https://sprinto.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for Sprinto MCP. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
