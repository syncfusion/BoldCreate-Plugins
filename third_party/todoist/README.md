# Todoist

BoldCreate plugin that connects agents to Todoist through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Connect agents to Todoist to read, add and change tasks, and to reorganize projects.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Todoist**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Todoist**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install todoist@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "todoist": {
      "type": "http",
      "url": "https://ai.todoist.net/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Todoist in the browser (OAuth) and approves access. Todoist's help page says this works with any assistant that supports MCP and that no API key is needed. Members can review or revoke the access in Todoist under **Settings > Integrations**.

## Access

Todoist's help page says the assistant asks for the `data:read_write` scope. That lets it read and change Todoist data: create tasks and projects, edit what is there, and complete tasks. Todoist's plugin page adds that the agent can delete data too.

Todoist lists these limits:

- A managed work or school account may need its administrator to allow third-party connections.
- The server cannot place a new project inside a workspace folder when it creates the project. Ask the agent to move the project afterwards.
- Completing a recurring task moves its date to the next time. The completed copy shows in the activity log, whose history depends on the plan (7 days on Beginner, full history on Pro and Business).

## Authentication

A live check on 2026-11-15 found:

- An unauthenticated request to `/mcp` returned HTTP 401 with `WWW-Authenticate: Bearer`, a link to the protected-resource metadata and the scope `data:read_write`.
- The metadata names `https://todoist.com` as the authorization server. Its metadata lists a registration endpoint (`/oauth/register`, dynamic client registration), PKCE with S256, and support for client ID metadata documents.
- No registration request was sent to the server.

**Not checked.** The tool list behind sign-in was not read. Whether Todoist accepts BoldCreate Connect's redirect address was not checked.

## Not included

- **Skills.** Todoist's repository has no skills for users. Its `.agents` folder holds skills for people who work on the code, so they were not imported.
- **Twist.** Doist also makes Twist. Its hosted server at `ai.twist.com` returned HTTP 403 from the build environment for every request, so it could not be checked and is not part of this plugin.
- **The local server.** The `@todoist/mcp` package runs on your own machine and needs an API token. It is not used here.

## Docs

- Connect Todoist to an AI assistant: https://www.todoist.com/help/todoist/todoist-and-ai/connect-todoist-to-an-ai-assistant-xMSzFfHng
- Plugin source: https://github.com/todoist/todoist-mcp (MIT)
- Todoist privacy policy: https://www.todoist.com/privacy

## Logo

The plugin icon from [todoist/todoist-mcp](https://github.com/todoist/todoist-mcp), centred on a white tile. It is Todoist's own icon and a trademark of its owner. It is not covered by the MIT licence. I could not view the logo.

## License

MIT
