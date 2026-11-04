# Jobber

BoldCreate plugin that connects agents to Jobber through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Get answers and take action with context from your Jobber account.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Jobber**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Jobber**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install jobber@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "jobber": {
      "type": "http",
      "url": "https://mcp.getjobber.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Jobber in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Jobber: https://www.getjobber.com/?utm_source=anthropic&utm_medium=organic&utm_campaign=directory-listing (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Neutral tile with the product's initials.}

## License

MIT
