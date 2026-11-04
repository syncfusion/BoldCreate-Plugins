# Nimble

BoldCreate plugin that connects agents to Nimble through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Real-time web search & extraction for AI agents.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Nimble**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Nimble**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install nimble@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "nimble": {
      "type": "http",
      "url": "https://mcp.nimbleway.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Nimble in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Nimble: https://www.nimbleway.com/

## Logo

Icon downloaded from the Claude connector directory listing for Nimble. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
