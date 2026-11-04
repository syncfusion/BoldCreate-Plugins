# EDEN by Basecamp Research

BoldCreate plugin that connects agents to EDEN by Basecamp Research through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Design antibiotics and prioritise vaccine targets against drug-resistant pathogens using EDEN, Basecamp Research's biological foundation model.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **EDEN by Basecamp Research**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **EDEN by Basecamp Research**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install eden-by-basecamp-research@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "eden-by-basecamp-research": {
      "type": "http",
      "url": "https://mcp-public.basecamp-research.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to EDEN by Basecamp Research in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- EDEN by Basecamp Research: https://basecamp-research.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
