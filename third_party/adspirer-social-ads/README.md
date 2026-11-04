# Adspirer Social Ads

BoldCreate plugin that connects agents to Adspirer Social Ads through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Paid social agent for Meta Ads (Facebook & Instagram) and TikTok Ads — researches competitor ads, plans, launches (paused) and autonomously runs your social advertising campaigns.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Adspirer Social Ads**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Adspirer Social Ads**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install adspirer-social-ads@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "adspirer-social-ads": {
      "type": "http",
      "url": "https://mcp.adspirer.com/social-ads"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Adspirer Social Ads in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Adspirer Social Ads: https://www.adspirer.com/

## Logo

Icon downloaded from the Claude connector directory listing for Adspirer Social Ads, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
