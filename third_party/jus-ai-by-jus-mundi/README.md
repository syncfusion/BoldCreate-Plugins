# Jus AI by Jus Mundi (Light Mode)

BoldCreate plugin that connects agents to Jus AI by Jus Mundi (Light Mode) through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

AI-powered global arbitration intelligence.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Jus AI by Jus Mundi (Light Mode)**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Jus AI by Jus Mundi (Light Mode)**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install jus-ai-by-jus-mundi@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "jus-ai-by-jus-mundi": {
      "type": "http",
      "url": "https://mcp.jusmundi.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Jus AI by Jus Mundi (Light Mode) in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Jus AI by Jus Mundi (Light Mode): https://jusmundi.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Neutral tile with the product's initials.}

## License

MIT
