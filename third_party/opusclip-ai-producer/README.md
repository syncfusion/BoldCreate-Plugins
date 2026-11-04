# AI Producer by OpusClip

BoldCreate plugin that connects agents to AI Producer by OpusClip through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Edit videos with AI.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **AI Producer by OpusClip**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **AI Producer by OpusClip**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install opusclip-ai-producer@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "opusclip-ai-producer": {
      "type": "http",
      "url": "https://producer.opus.pro/api/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to AI Producer by OpusClip in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- AI Producer by OpusClip: https://www.opus.pro/

## Logo

Neutral tile with the product's initials.}

## License

MIT
