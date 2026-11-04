# Airwallex Developer

BoldCreate plugin that connects agents to Airwallex Developer through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Integrate with the Airwallex Platform using Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Airwallex Developer**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Airwallex Developer**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install airwallex@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "airwallex": {
      "type": "http",
      "url": "https://mcp-demo.airwallex.com/developer"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Airwallex Developer in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Airwallex Developer: https://www.airwallex.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
