# Helena by Enrich Labs

BoldCreate plugin that connects agents to Helena by Enrich Labs through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Your AI marketer for paid ads, SEO, email, social, and analytics.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Helena by Enrich Labs**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Helena by Enrich Labs**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install helena-by-enrich-labs@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "helena-by-enrich-labs": {
      "type": "http",
      "url": "https://agent.enrichlabs.ai/api/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Helena by Enrich Labs in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Helena by Enrich Labs: https://www.enrichlabs.ai/

## Logo

Icon downloaded from the Claude connector directory listing for Helena by Enrich Labs, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
