# Moda - Slides and Designs

BoldCreate plugin that connects agents to Moda - Slides and Designs through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Fully editable PowerPoints, Meta ads, motion graphics & social.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Moda - Slides and Designs**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Moda - Slides and Designs**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install moda-slides-and-designs@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "moda-slides-and-designs": {
      "type": "http",
      "url": "https://agents.moda.app/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Moda - Slides and Designs in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Moda - Slides and Designs: https://moda.app/

## Logo

Neutral tile with the product's initials.}

## License

MIT
