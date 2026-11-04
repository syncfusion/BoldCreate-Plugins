# Cognito Forms

BoldCreate plugin that connects agents to Cognito Forms through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Create forms, analyze submissions, and download files.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Cognito Forms**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Cognito Forms**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install cognito-forms@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "cognito-forms": {
      "type": "http",
      "url": "https://mcp.cognitoforms.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Cognito Forms in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Cognito Forms: https://www.cognitoforms.com/

## Logo

Icon downloaded from the Claude connector directory listing for Cognito Forms. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT
