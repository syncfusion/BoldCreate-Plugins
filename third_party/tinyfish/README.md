# TinyFish

BoldCreate plugin that connects agents to TinyFish through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Browser automation, web scraping, web search and fetch via a cloud browser agent: automate websites, log in to portals, submit forms, scrape social media, listings, prices, reviews, monitor changes.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **TinyFish**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **TinyFish**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install tinyfish@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "tinyfish": {
      "type": "http",
      "url": "https://agent.tinyfish.ai/mcp/claude"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to TinyFish in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- TinyFish: https://tinyfish.ai/

## Logo

Neutral tile with the product's initials.}

## License

MIT
