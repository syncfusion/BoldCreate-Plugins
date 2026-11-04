# DevRev

BoldCreate plugin that connects agents to DevRev through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search and update your company's knowledge graph.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **DevRev**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **DevRev**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install devrev@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "devrev": {
      "type": "http",
      "url": "https://api.devrev.ai/mcp/v1"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to DevRev in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- DevRev: https://devrev.ai/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Neutral tile with the product's initials.}

## License

MIT
