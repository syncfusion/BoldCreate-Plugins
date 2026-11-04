# Drata

BoldCreate plugin that connects agents to Drata through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Agentic Trust Management on demand.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Drata**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Drata**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install drata@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "drata": {
      "type": "http",
      "url": "https://mcp.drata.com/mcp/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Drata in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Drata: https://drata.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Neutral tile with the product's initials.}

## License

MIT
