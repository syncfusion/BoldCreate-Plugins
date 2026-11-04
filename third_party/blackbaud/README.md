# Blackbaud

BoldCreate plugin that connects agents to Blackbaud through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search, explore, and query Blackbaud data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Blackbaud**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Blackbaud**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install blackbaud@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "blackbaud": {
      "type": "http",
      "url": "https://mcp.sky.blackbaud.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Blackbaud in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Blackbaud: https://mcp.sky.blackbaud.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for Blackbaud, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
