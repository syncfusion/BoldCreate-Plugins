# Adspirer Search Ads

BoldCreate plugin that connects agents to Adspirer Search Ads through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

PPC and paid search agent for Google Ads and Microsoft Advertising (Bing Ads) — does competitor ads research, plans, launches, and autonomously runs your search advertising campaigns.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Adspirer Search Ads**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Adspirer Search Ads**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install adspirer-search-ads@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "adspirer-search-ads": {
      "type": "http",
      "url": "https://mcp.adspirer.com/search-ads"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Adspirer Search Ads in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Adspirer Search Ads: https://www.adspirer.com/

## Logo

Icon downloaded from the Claude connector directory listing for Adspirer Search Ads, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
