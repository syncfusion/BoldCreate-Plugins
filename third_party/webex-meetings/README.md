# Webex Meetings

BoldCreate plugin that connects agents to Webex Meetings through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

AI-powered workflows for Webex meetings.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Webex Meetings**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Webex Meetings**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install webex-meetings@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "webex-meetings": {
      "type": "http",
      "url": "https://mcp.webexapis.com/mcp/webex-meeting"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Webex Meetings in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Webex Meetings: https://www.cisco.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for Webex Meetings. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
