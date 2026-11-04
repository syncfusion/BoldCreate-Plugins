# LatchBio

BoldCreate plugin that connects agents to LatchBio through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Analyze data and launch bioinformatics workflows.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **LatchBio**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **LatchBio**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install latchbio@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "latchbio": {
      "type": "http",
      "url": "https://mcp.latch.bio/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to LatchBio in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- LatchBio: https://latch.bio/

## Logo

Icon downloaded from the Claude connector directory listing for LatchBio. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
