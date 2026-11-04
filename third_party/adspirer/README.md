# Adspirer Ads & Performance Marketing Agent

BoldCreate plugin that connects agents to Adspirer Ads & Performance Marketing Agent through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Your performance marketing and paid media agent — an Agent that plans, launches, and autonomously runs your ad campaigns across Google, Meta, LinkedIn, TikTok, and more.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Adspirer Ads & Performance Marketing Agent**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Adspirer Ads & Performance Marketing Agent**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install adspirer@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "adspirer": {
      "type": "http",
      "url": "https://mcp.adspirer.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Adspirer Ads & Performance Marketing Agent in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Adspirer Ads & Performance Marketing Agent: https://www.adspirer.com/

## Logo

Icon downloaded from the Claude connector directory listing for Adspirer Ads & Performance Marketing Agent, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
