# Harness

BoldCreate plugin that connects agents to Harness through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Build, Ship and Secure your apps on Harness Platform.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Harness**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Harness**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install harness@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "harness": {
      "type": "http",
      "url": "https://mcp.harness.io/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Harness in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Harness: https://www.harness.io/

## Logo

Neutral tile with the product's initials.}

## License

MIT
