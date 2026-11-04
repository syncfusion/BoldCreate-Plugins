# AWS MCP

BoldCreate plugin that connects agents to AWS MCP through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Give agents secure access to AWS via MCP.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **AWS MCP**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **AWS MCP**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install aws-mcp@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "aws-mcp": {
      "type": "http",
      "url": "https://aws-mcp.us-east-1.api.aws/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- AWS MCP: https://aws.amazon.com/products/developer-tools/agent-toolkit-for-aws

## Logo

Neutral tile with the product's initials.

## License

MIT
