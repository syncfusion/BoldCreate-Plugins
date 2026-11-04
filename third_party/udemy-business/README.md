# Udemy Business

BoldCreate plugin that connects agents to Udemy Business through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search and explore skill-building resources.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Udemy Business**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Udemy Business**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install udemy-business@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "udemy-business": {
      "type": "http",
      "url": "https://api.udemy.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Udemy Business in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Udemy Business: https://www.udemy.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Neutral tile with the product's initials.}

## License

MIT
