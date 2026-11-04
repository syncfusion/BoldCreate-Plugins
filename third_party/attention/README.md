# Attention

BoldCreate plugin that connects agents to Attention through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search, analyze, and act on client conversations.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Attention**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Attention**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install attention@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "attention": {
      "type": "http",
      "url": "https://api.attention.tech/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Attention in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Attention: https://attention.com/

## Logo

Icon downloaded from the Claude connector directory listing for Attention. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
