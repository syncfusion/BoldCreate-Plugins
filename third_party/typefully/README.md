# Typefully - Social Media Scheduler

BoldCreate plugin that connects agents to Typefully - Social Media Scheduler through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Social media scheduler for great writing on X (Twitter), LinkedIn, Substack, Threads, Bluesky, and Mastodon.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Typefully - Social Media Scheduler**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Typefully - Social Media Scheduler**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install typefully@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "typefully": {
      "type": "http",
      "url": "https://mcp.typefully.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Typefully - Social Media Scheduler in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Typefully - Social Media Scheduler: https://typefully.com/

## Logo

Icon downloaded from the Claude connector directory listing for Typefully - Social Media Scheduler, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
