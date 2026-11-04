# Digits

BoldCreate plugin that connects agents to Digits through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Track and analyze your finances with Digits.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Digits**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Digits**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install digits@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "digits": {
      "type": "http",
      "url": "https://api.digits.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Digits in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Digits: https://digits.com/

## Logo

Icon downloaded from the Claude connector directory listing for Digits. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
