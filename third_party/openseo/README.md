# OpenSEO

BoldCreate plugin that connects agents to OpenSEO through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

SEO made simple.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **OpenSEO**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **OpenSEO**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install openseo@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "openseo": {
      "type": "http",
      "url": "https://app.openseo.so/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to OpenSEO in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- OpenSEO: https://openseo.so/

## Logo

Neutral tile with the product's initials.}

## License

MIT
