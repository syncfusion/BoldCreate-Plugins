# Swagger

BoldCreate plugin that connects agents to Swagger through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Build, govern, and document APIs.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Swagger**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Swagger**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install swagger@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "swagger": {
      "type": "http",
      "url": "https://swagger.mcp.smartbear.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Swagger in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Swagger: https://smartbear.com/

## Logo

Icon downloaded from the Claude connector directory listing for Swagger. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
