# OpusClip

BoldCreate plugin that connects agents to OpusClip through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Turn long videos into viral short clips.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **OpusClip**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **OpusClip**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install opusclip@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "opusclip": {
      "type": "http",
      "url": "https://api.opus.pro/api/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to OpusClip in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- OpusClip: https://opus.pro/

## Logo

Neutral tile with the product's initials.

## License

MIT
