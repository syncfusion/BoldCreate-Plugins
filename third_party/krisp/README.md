# Krisp

BoldCreate plugin that connects agents to Krisp through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Add your meetings context via transcripts and notes.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Krisp**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Krisp**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install krisp@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "krisp": {
      "type": "http",
      "url": "https://mcp.krisp.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Krisp in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Krisp: https://krisp.ai/

## Logo

Icon downloaded from the Claude connector directory listing for Krisp. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
