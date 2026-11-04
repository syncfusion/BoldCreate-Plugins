# Bird

BoldCreate plugin that connects agents to Bird through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Send email, SMS, and WhatsApp, place calls, verify users, and run your agent's inbox.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Bird**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Bird**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install bird@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "bird": {
      "type": "http",
      "url": "https://mcp.bird.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Bird in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Bird: https://www.bird.com/

## Logo

Icon downloaded from the Claude connector directory listing for Bird. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
