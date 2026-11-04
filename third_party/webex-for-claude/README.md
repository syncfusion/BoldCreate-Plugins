# Webex for Claude

BoldCreate plugin that connects agents to Webex for Claude through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Access your Webex meetings, messaging, and Vidcast content securely in Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Webex for Claude**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Webex for Claude**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install webex-for-claude@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "webex-for-claude": {
      "type": "http",
      "url": "https://mcp.webexapis.com/mcp/webex-suite"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Webex for Claude in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Webex for Claude: https://cisco.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for Webex for Claude, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
