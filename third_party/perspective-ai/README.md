# Perspective AI

BoldCreate plugin that connects agents to Perspective AI through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

An AI Concierge that turns forms into conversations.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Perspective AI**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Perspective AI**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install perspective-ai@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "perspective-ai": {
      "type": "http",
      "url": "https://getperspective.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Perspective AI in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Perspective AI: https://getperspective.ai/

## Logo

Icon downloaded from the Claude connector directory listing for Perspective AI, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
