# AWS Marketplace

BoldCreate plugin that connects agents to AWS Marketplace through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Discover, evaluate, and buy solutions for the cloud.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **AWS Marketplace**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **AWS Marketplace**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install aws-marketplace@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "aws-marketplace": {
      "type": "http",
      "url": "https://marketplace-mcp.us-east-1.api.aws/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- AWS Marketplace: https://aws.amazon.com/marketplace

## Logo

Icon downloaded from the Claude connector directory listing for AWS Marketplace, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
