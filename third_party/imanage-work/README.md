# iManage Work

BoldCreate plugin that connects agents to iManage Work through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Governed knowledge. AI ready.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **iManage Work**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **iManage Work**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install imanage-work@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "imanage-work": {
      "type": "http",
      "url": "https://cloudimanage.com/mcp/work"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to iManage Work in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- iManage Work: https://imanage.com/

## Logo

Icon downloaded from the Claude connector directory listing for iManage Work, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
