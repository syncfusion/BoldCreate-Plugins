# Owkin

BoldCreate plugin that connects agents to Owkin through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Interact with AI agents built for biology.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Owkin**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Owkin**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install owkin@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "owkin": {
      "type": "http",
      "url": "https://mcp.k.owkin.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Owkin in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Owkin: https://www.owkin.com/

## Logo

Icon downloaded from the Claude connector directory listing for Owkin, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
