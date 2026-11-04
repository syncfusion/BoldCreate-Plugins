# Send

BoldCreate plugin that connects agents to Send through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Create HTML in Claude. Share it with Send.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Send**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Send**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install send@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "send": {
      "type": "http",
      "url": "https://www.send.co/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Send in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Send: https://www.send.co/

## Logo

Neutral tile with the product's initials.}

## License

MIT
