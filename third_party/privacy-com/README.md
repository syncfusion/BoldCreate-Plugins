# Privacy.com

BoldCreate plugin that connects agents to Privacy.com through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Manage virtual cards and track your spending patterns.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Privacy.com**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Privacy.com**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install privacy-com@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "privacy-com": {
      "type": "http",
      "url": "https://mcp.privacy.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Privacy.com in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Privacy.com: https://privacy.com/

## Logo

Icon downloaded from the Claude connector directory listing for Privacy.com, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
