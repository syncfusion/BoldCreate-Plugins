# iubenda: Privacy policy & cookie banner

BoldCreate plugin that connects agents to iubenda: Privacy policy & cookie banner through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

GDPR and CCPA compliance: cookie consent, cookie scanner, and terms and conditions.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **iubenda: Privacy policy & cookie banner**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **iubenda: Privacy policy & cookie banner**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install iubenda@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "iubenda": {
      "type": "http",
      "url": "https://mcp-server.iubenda.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to iubenda: Privacy policy & cookie banner in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- iubenda: Privacy policy & cookie banner: https://www.iubenda.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
