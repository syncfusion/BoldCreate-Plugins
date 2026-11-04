# LinkedIn Hiring Pro

BoldCreate plugin that connects agents to LinkedIn Hiring Pro through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Draft, review, and post one free LinkedIn job from Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **LinkedIn Hiring Pro**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **LinkedIn Hiring Pro**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install linkedin-hiring-pro@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "linkedin-hiring-pro": {
      "type": "http",
      "url": "https://mcp.linkedin.com/mcp-hiring-pro"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to LinkedIn Hiring Pro in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- LinkedIn Hiring Pro: https://www.linkedin.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT
