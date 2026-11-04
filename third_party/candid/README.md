# Candid

BoldCreate plugin that connects agents to Candid through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Research nonprofits and funders using Candid's data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Candid**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Candid**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install candid@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "candid": {
      "type": "http",
      "url": "https://mcp.candid.org/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Candid in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Candid: https://candid.org/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for Candid, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
