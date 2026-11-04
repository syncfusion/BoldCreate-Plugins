# Brightflag

BoldCreate plugin that connects agents to Brightflag through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Connect to Brightflag to interact with matter, vendor and spend data within Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Brightflag**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Brightflag**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install brightflag@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "brightflag": {
      "type": "http",
      "url": "https://mcp-us.brightflag.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Brightflag in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Brightflag: https://brightflag.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for Brightflag, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
