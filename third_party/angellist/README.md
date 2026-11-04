# AngelList

BoldCreate plugin that connects agents to AngelList through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Turn your fund into something you can talk to.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **AngelList**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **AngelList**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install angellist@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "angellist": {
      "type": "http",
      "url": "https://mcp.angellist.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to AngelList in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- AngelList: https://www.angellist.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
