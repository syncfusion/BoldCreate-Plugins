# Google Chat

BoldCreate plugin that connects agents to Google Chat through Google's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Read Google Chat spaces and messages, and post messages.

> **Developer Preview.** Google's Workspace MCP servers are part of the Google Workspace Developer Preview Program and may change before general availability.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Google Chat**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Google Chat**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install google-chat@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "google-chat": {
      "type": "http",
      "url": "https://chatmcp.googleapis.com/mcp/v1",
      "auth": {
        "CLIENT_ID": "${CLIENT_ID}",
        "CLIENT_SECRET": "${CLIENT_SECRET}"
      }
    }
  }
}
```

## Setup

Set these when you install the plugin. Secrets are stored encrypted and sent only to the MCP server.

| Setting | Required | Secret | What to enter |
| --- | --- | --- | --- |
| **Client ID** (`CLIENT_ID`) | Yes | No | A Google OAuth client your team created. Every team member signs in under it. |
| **Client secret** (`CLIENT_SECRET`) | Yes | Yes | The secret for that OAuth client. Stored encrypted. |

Auth is OAuth. The first time the agent calls a tool, each member signs in to their own account in the browser. Tool calls run with that member's permissions.

## Set up your team's OAuth client

Google's MCP servers don't support dynamic client registration, so a team admin provides one Google OAuth client and every member signs in under it. Consent screens and audit logs then show your team's own app.

1. In the Google Cloud console, open **Google Auth Platform > Clients** and create a client of type **Web application**. Select **Use this client for an AI-powered agent**.
2. Add the BoldCreate Connect OAuth callback URL (shown on the plugin's settings page) as an authorized redirect URI.
3. Add these scopes to the project's OAuth consent screen:
   - `https://www.googleapis.com/auth/chat.spaces.readonly`
   - `https://www.googleapis.com/auth/chat.memberships.readonly`
   - `https://www.googleapis.com/auth/chat.messages.readonly`
   - `https://www.googleapis.com/auth/chat.messages.create`
   - `https://www.googleapis.com/auth/chat.users.readstate`
4. In BoldCreate Connect, open the plugin's settings and enter the **Client ID** and **Client secret**.

Claude Code plugins can't carry an OAuth client secret, so the generated Claude Code manifest leaves the client out. In Claude Code, pass the client when you add the server, for example `claude mcp add --transport http --client-id <id> --client-secret google-chat <url>`.

## Tools

A live check on 2026-11-17 found that `tools/list` on `https://chatmcp.googleapis.com/mcp/v1` answers without sign-in and lists 4 tools:

| Tool | Read only | What it does |
| --- | --- | --- |
| `search_conversations` | Yes | Finds spaces, direct messages and group chats and returns their conversation IDs. |
| `list_messages` | Yes | Returns messages from one conversation, filtered by thread, time range and count. |
| `search_messages` | Yes | Searches messages by keyword across the spaces the member can access. |
| `send_message` | No | Sends a message to a conversation, with Markdown. This is the only tool that changes data. |

Google's docs list 9 tools: those four plus `mark_as_read`, `mark_as_unread`, `list_memberships`, `get_notification_settings` and `update_notification_settings`. The live server did not list the other five. Google's docs say `update_notification_settings` needs the scope `https://www.googleapis.com/auth/chat.users.spacesettings`. This plugin requests the five scopes in the list above and not that one, so the member is not asked for access to notification settings. If Google adds those tools to the live list, add that scope to the consent screen and to the plugin.

## Authentication check

On 2026-11-17, a tool call without a token returned HTTP 401 with `WWW-Authenticate: Bearer` and a link to the protected-resource metadata. The metadata names `https://accounts.google.com` as the authorization server. Its metadata has no registration endpoint, which matches the setup above. No registration request was sent.

Google's release notes say that from November 11, 2026, Google Workspace MCP servers reject requests from OAuth clients that are not marked **Use this client for an AI-powered agent**. A client that was not marked by November 12, 2026 stays non-agentic and cannot call the servers. Create a new client with that setting.

**Not checked.** Tool calls behind sign-in were not made. Whether Google accepts BoldCreate Connect's redirect address was not checked.

## Before you connect

Your Google Cloud project must be enrolled in the Google Workspace Developer Preview Program, with the product's API and its MCP service enabled. A Workspace admin may need to allow the OAuth client for your domain.

## Docs

- Configure the Chat MCP server: https://developers.google.com/workspace/chat/api/guides/configure-mcp-server
- Chat MCP reference: https://developers.google.com/workspace/chat/api/reference/mcp
- Configure the Google Workspace MCP servers: https://developers.google.com/workspace/guides/configure-mcp-servers

## Logo

Google Chat mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #34A853, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
