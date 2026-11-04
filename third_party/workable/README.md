# Workable

BoldCreate plugin that connects agents to Workable through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Your AI assistant for Hiring and HR — inside Workable.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Workable**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Workable**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install workable@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "workable": {
      "type": "http",
      "url": "https://mcp.workable.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Workable in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Workable: https://www.workable.com/

## Logo

Icon downloaded from the Claude connector directory listing for Workable, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
