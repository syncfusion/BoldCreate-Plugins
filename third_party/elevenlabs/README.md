# ElevenLabs

BoldCreate plugin that connects agents to ElevenLabs through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Manage your ElevenAgents voice agents in your chat.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **ElevenLabs**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **ElevenLabs**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install elevenlabs@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "elevenlabs": {
      "type": "http",
      "url": "https://api.elevenlabs.io/v1/mcp-claude-marketplace"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to ElevenLabs in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- ElevenLabs: https://elevenlabs.io/

## Logo

ElevenLabs mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #000000, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
