# Fellow.ai

BoldCreate plugin that connects agents to Fellow.ai through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Chat with your meetings to uncover actionable insights.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Fellow.ai**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Fellow.ai**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install fellow-ai@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "fellow-ai": {
      "type": "http",
      "url": "https://fellow.app/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Fellow.ai in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Fellow.ai: https://fellow.ai/

## Logo

Icon downloaded from the Claude connector directory listing for Fellow.ai, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
