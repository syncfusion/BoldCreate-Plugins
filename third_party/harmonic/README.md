# Harmonic

BoldCreate plugin that connects agents to Harmonic through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Discover, research, and enrich companies and people.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Harmonic**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Harmonic**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install harmonic@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "harmonic": {
      "type": "http",
      "url": "https://mcp.api.harmonic.ai/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Harmonic in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Harmonic: https://harmonic.ai/

## Logo

Icon downloaded from the Claude connector directory listing for Harmonic, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
