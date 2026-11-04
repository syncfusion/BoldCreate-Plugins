# Clarify

BoldCreate plugin that connects agents to Clarify through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Query your CRM. Create records. Ask anything.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Clarify**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Clarify**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install clarify@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "clarify": {
      "type": "http",
      "url": "https://api.clarify.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Clarify in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Clarify: https://www.clarify.ai/

## Logo

Icon downloaded from the Claude connector directory listing for Clarify, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
