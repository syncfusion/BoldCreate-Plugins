# Jasper

BoldCreate plugin that connects agents to Jasper through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Keep every Claude session on-brand.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Jasper**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Jasper**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install jasper@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "jasper": {
      "type": "http",
      "url": "https://mcp.jasper.ai/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Jasper in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Jasper: https://jasper.ai/

## Logo

Icon downloaded from the Claude connector directory listing for Jasper. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
