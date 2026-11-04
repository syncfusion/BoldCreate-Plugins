# AdWhispr Ads

BoldCreate plugin that connects agents to AdWhispr Ads through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Research any brand's live Facebook and TikTok ads, find your real competitors, and launch campaigns on Google, TikTok, and Meta from chat.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **AdWhispr Ads**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **AdWhispr Ads**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install adwhispr-ads@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "adwhispr-ads": {
      "type": "http",
      "url": "https://adwhispr.com/api/claude/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to AdWhispr Ads in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- AdWhispr Ads: https://adwhispr.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
