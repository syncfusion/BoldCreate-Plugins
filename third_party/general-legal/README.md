# General Legal

BoldCreate plugin that connects agents to General Legal through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Submit contracts for attorney review, answer their questions, and get redlined documents back — without leaving Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **General Legal**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **General Legal**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install general-legal@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "general-legal": {
      "type": "http",
      "url": "https://mcp.general.legal/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to General Legal in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- General Legal: https://general.legal/

## Logo

Icon downloaded from the Claude connector directory listing for General Legal, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
