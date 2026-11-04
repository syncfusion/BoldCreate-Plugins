# LZ Virtual Mail

BoldCreate plugin that connects agents to LZ Virtual Mail through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Manage your physical mail from anywhere.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **LZ Virtual Mail**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **LZ Virtual Mail**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install lz-virtual-mail@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "lz-virtual-mail": {
      "type": "http",
      "url": "https://api.earthclassmail.com/v2/mcp/claude"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to LZ Virtual Mail in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- LZ Virtual Mail: https://www.legalzoom.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
