# Coupler.io

BoldCreate plugin that connects agents to Coupler.io through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Access business data from hundreds of sources.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Coupler.io**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Coupler.io**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install coupler-io@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "coupler-io": {
      "type": "http",
      "url": "https://mcp.coupler.io/mcp/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Coupler.io in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Coupler.io: https://coupler.io/

## Logo

Neutral tile with the product's initials.}

## License

MIT
