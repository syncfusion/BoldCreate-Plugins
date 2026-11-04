# Subtext

BoldCreate plugin that connects agents to Subtext through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Session replay, built for agents. Give Claude a session link and it investigates the real production session—DOM, screenshots, console, network—to find the root cause.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Subtext**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Subtext**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install subtext@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "subtext": {
      "type": "http",
      "url": "https://api.fullstory.com/mcp/subtext"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Subtext in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Subtext: https://subtext.fullstory.com/

## Logo

Icon downloaded from the Claude connector directory listing for Subtext, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
