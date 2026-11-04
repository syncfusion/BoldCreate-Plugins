# Guru

BoldCreate plugin that connects agents to Guru through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search and interact with your company knowledge.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Guru**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Guru**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install guru@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "guru": {
      "type": "http",
      "url": "https://mcp.api.getguru.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Guru in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Guru: https://www.getguru.com/

## Logo

Icon downloaded from the Claude connector directory listing for Guru. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
