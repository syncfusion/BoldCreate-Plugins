# RingCentral Chat

BoldCreate plugin that connects agents to RingCentral Chat through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Stay on top of team communications and collaborate in RingCentral Team Chat directly within Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **RingCentral Chat**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **RingCentral Chat**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install ringcentral-chat@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "ringcentral-chat": {
      "type": "http",
      "url": "https://mcp.labs.ringcentral.com/ringex/v1.1.0/team-chat"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to RingCentral Chat in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- RingCentral Chat: https://ringcentral.com/

## Logo

Icon downloaded from the Claude connector directory listing for RingCentral Chat, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
