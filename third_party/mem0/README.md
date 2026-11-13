# Mem0

BoldCreate plugin that connects agents to Mem0 through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Add, search, update, and delete long-term memories in Mem0.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Mem0**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Mem0**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install mem0@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "mem0": {
      "type": "http",
      "url": "https://mcp.mem0.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to their own Mem0 account in the browser (OAuth). Mem0's documentation says memories are stored in the member's Mem0 account, not on their computer.

Mem0's documentation also allows an API key sent as a bearer token, for clients without browser sign-in. This plugin does not set one.

## Endpoint

A live check on 2026-11-13 found that `https://mcp.mem0.ai/mcp` answers HTTP 307 with a redirect to `https://mcp.mem0.ai/mcp/`. A POST request keeps its method through the redirect. The URL in this plugin is the one in Mem0's documentation.

## Authentication

The same check found:

- An unauthenticated request to `/mcp/` returned HTTP 401 with `WWW-Authenticate: Bearer` and a link to the protected-resource metadata.
- The metadata is served at the server root. It names `https://mcp.mem0.ai/` as the authorization server. The path-specific metadata URL for `/mcp` returned 404.
- The authorization server metadata lists a registration endpoint (dynamic client registration), PKCE with S256, the `authorization_code` and `refresh_token` grants, and the scopes `read` and `write`.
- Token endpoint methods are `client_secret_post` and `client_secret_basic`. Registration issues a client secret, and the server lists no public-client method.

So members connect without a client ID or client secret from your team. No registration request was sent to the server during the check.

**Not checked.** `initialize` and `tools/list` need sign-in, so the tool list was not called. The list below comes from Mem0's documentation.

## What it can do

Mem0's documentation lists these tools:

| Tool | What Mem0 says it does |
| --- | --- |
| `add_memory` | Save text or conversation history for a user or agent |
| `search_memories` | Semantic search across existing memories with filters |
| `get_memories` | List memories with structured filters and pagination |
| `get_memory` | Retrieve one memory by its `memory_id` |
| `update_memory` | Overwrite a memory's text or metadata after confirming the ID |
| `delete_memory` | Delete a single memory by `memory_id` |
| `delete_all_memories` | Bulk delete all memories in scope |
| `delete_entities` | Delete a user, agent, app or run entity and its memories |
| `list_entities` | List the users, agents, apps and runs stored in Mem0 |
| `list_events` | List memory operation events with filters and pagination |
| `get_event_status` | Check the status of an async memory operation by `event_id` |

Several of these delete data. Review a delete request before you approve it.

## Left out

- **The linked repository.** `mem0ai/mem0-mcp` is archived. Its README says the project is no longer maintained and points to the hosted server above. It is a local Python server that needs an API key, and it is not used here. It lists 9 tools, and the current documentation lists 11.
- **Mem0's own plugin for Cursor** (`integrations/cursor-plugin` in `mem0ai/mem0`). It runs a local Python program with an API key and registers hooks for eight events. This plugin uses the hosted server, with no hooks.
- **Mem0's standalone skills** (`skills/` in `mem0ai/mem0`). Only three of the six name a licence. The others describe SDK and CLI use, install steps and a migration script, so none are included.

## Docs

- Mem0 MCP server: https://docs.mem0.ai/platform/mem0-mcp

## Logo

Mem0 mark taken from the favicon on mem0.ai, centred on a white tile. It is a trademark of its owner and is not covered by the MIT licence.

## License

MIT
