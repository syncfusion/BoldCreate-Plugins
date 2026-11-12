# BoldDesk

BoldCreate plugin that connects agents to BoldDesk through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Create, update and route support tickets, reply to conversations, log work, and search the Knowledge Base in BoldDesk.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **BoldDesk**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **BoldDesk**.
- **Claude Code:** `/plugin marketplace add SF3922-Shreedhar/BoldCreate-Connectors`, then `/plugin install bolddesk@boldcreate-connectors`.

## MCP

```json
{
  "mcpServers": {
    "bolddesk": {
      "type": "http",
      "url": "https://${BOLDDESK_HOST}/mcp"
    }
  }
}
```

## What it can do

| Area | What the agent can do |
| --- | --- |
| Tickets | Create, update, list and read tickets, change status, read response and resolution insights, and read ticket forms, fields and valid statuses. |
| Conversations | Post public replies, public notes and internal notes, and read message and change history. |
| Ticket links | Create and list related, parent and child links, and external web links. |
| Activities | Create, update, list and comment on tasks, calls and meetings. |
| Approvals | Create approval requests, list and read them, and submit responses. |
| Worklogs | Add and list billable and non-billable time entries. |
| Directory | Search contacts, contact groups, agents and assignment groups. |
| Identity and reference | Read the current user, organization and brand access, and field options such as categories, types, sources and time zones. |
| Knowledge Base | Browse category and section trees, search and list articles, read article details, and create articles. |

Everything is limited to what the signed-in user can see and do in BoldDesk, including their brand access.

## Setup

Set this when you install the plugin.

| Setting | Required | Secret | What to enter |
| --- | --- | --- | --- |
| **BoldDesk host** (`BOLDDESK_HOST`) | Yes | No | The full host name of your BoldDesk account, such as yourcompany.bolddesk.com (not just "yourcompany"), or your mapped custom domain. It must match your account, or BoldDesk rejects the request. |

## Sign-in options

BoldDesk supports two ways to sign in. Both use the endpoint `https://<host>/mcp`, and either one acts with the permissions and brand access of the user who signs in.

| Option | Use it for | How |
| --- | --- | --- |
| **OAuth 2.0** (default) | People using an AI assistant or editor | Choose OAuth in **Authentication**. BoldDesk registers the client automatically, so there is no client ID or secret. The first time the agent calls a tool, each member signs in to BoldDesk in the browser and accepts the consent request. |
| **API key** | Trusted server-side and automation workflows | Choose **API key** in **Authentication**, set the header name to `x-api-key`, and enter your BoldDesk API key. |

## Before you connect

- A BoldDesk admin turns the MCP server on and manages connected OAuth clients in **AI Center, MCP Server**. BoldDesk registers clients dynamically, so there is no client ID or secret to enter here.
- The endpoint must match your account host. A request to a mismatched host is rejected.
- BoldDesk recommends trying read-only requests first, before using tools that create or change data.
- Keep API keys secret and rotate them regularly. Review connected OAuth clients in **AI Center, MCP Server** and revoke any you no longer use.

## Docs

- BoldDesk MCP Server: https://developer.bolddesk.com/mcp-server/

## Logo

BoldDesk icon from the vendor's developer site (developer.bolddesk.com), trimmed to the visible mark. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.

## License

MIT
