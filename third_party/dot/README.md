# dot.

BoldCreate plugin that connects agents to dot. through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Get feedback on anything you build in Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **dot.**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **dot.**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install dot@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "dot": {
      "type": "http",
      "url": "https://mcp.leaveadot.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to dot. in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- dot.: https://www.leaveadot.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
