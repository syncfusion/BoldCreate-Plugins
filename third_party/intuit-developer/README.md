# Intuit Developer

BoldCreate plugin that connects agents to Intuit Developer through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Build and test integrations with Intuit APIs.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Intuit Developer**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Intuit Developer**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install intuit-developer@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "intuit-developer": {
      "type": "http",
      "url": "https://ai-inc-developer.intuit.com/v1/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Intuit Developer in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Intuit Developer: https://developer.intuit.com/

## Logo

Icon downloaded from the Claude connector directory listing for Intuit Developer, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
