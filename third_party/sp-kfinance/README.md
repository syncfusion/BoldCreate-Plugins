# S&P - Deterministic Retrieval

BoldCreate plugin that connects agents to S&P - Deterministic Retrieval through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Deterministic access to S&P Global data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **S&P - Deterministic Retrieval**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **S&P - Deterministic Retrieval**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install sp-kfinance@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "sp-kfinance": {
      "type": "http",
      "url": "https://kfinance.kensho.com/integrations/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to S&P - Deterministic Retrieval in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- S&P - Deterministic Retrieval: https://www.spglobal.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Neutral tile with the product's initials.

## License

MIT
