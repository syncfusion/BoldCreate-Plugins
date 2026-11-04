# Kuliko AI

BoldCreate plugin that connects agents to Kuliko AI through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Your Learning Companion.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Kuliko AI**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Kuliko AI**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install kuliko-ai@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "kuliko-ai": {
      "type": "http",
      "url": "https://mcp.kuliko.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Kuliko AI in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Kuliko AI: https://kuliko.ai/

## Logo

Icon downloaded from the Claude connector directory listing for Kuliko AI, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
