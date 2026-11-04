# CodeWords

BoldCreate plugin that connects agents to CodeWords through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Build AI agents and automations by chatting.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **CodeWords**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **CodeWords**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install codewords@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "codewords": {
      "type": "http",
      "url": "https://runtime.codewords.ai/run/devx_mcp/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to CodeWords in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- CodeWords: https://codewords.ai/

## Logo

Neutral tile with the product's initials.}

## License

MIT
