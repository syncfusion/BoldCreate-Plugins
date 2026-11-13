# Dropbox

BoldCreate plugin that connects agents to Dropbox through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Connect your Dropbox files so you can search, reference, and organize them, save generated content, and create sharing links without switching tools.

It respects your existing Dropbox permissions: the agent works only with files your account can already access.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Dropbox**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Dropbox**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install dropbox@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "dropbox": {
      "type": "http",
      "url": "https://mcp.dropbox.com/cursor_app_mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Dropbox in the browser (OAuth) and reviews the permissions requested. Tool calls run with that member's permissions. Dropbox is the OAuth authorization server (`https://www.dropbox.com`).

Dropbox runs one endpoint per client. This plugin uses the one Dropbox publishes for Cursor, `cursor_app_mcp`. Dropbox also publishes `claude_app_mcp` and `gemini_app_mcp`; the tools and scopes are the same.

### OAuth scopes

| Scope | What it allows |
| --- | --- |
| `account_info.read` | Identify the signed-in account and support file previews. |
| `files.metadata.read` | Search, list folders, and read file or folder metadata. |
| `files.content.read` | Read file text content and create download metadata. |
| `files.content.write` | Create files and folders; copy, move and delete content; check file-operation jobs. |
| `sharing.read` | List shared links and read shared-link metadata. |
| `sharing.write` | Create shared links. |
| `file_requests.read` | List and inspect file requests. |
| `file_requests.write` | Create file requests. |

## Tools

The vendor documents 20 tools for this endpoint. Descriptions below are the vendor's own, from its [OAuth scope table](https://github.com/dropbox/dropbox-ai-plugins/blob/078f0ca36df40f054829b58731a5f86a561d9668/shared/OAUTH_SCOPES.md).

| Tool | What it does | Scope |
| --- | --- | --- |
| `search` | Read-only search over Dropbox file metadata. | `files.metadata.read` |
| `list_folder` | Read-only folder listing. | `files.metadata.read` |
| `get_file_metadata` | Read-only metadata lookup. | `files.metadata.read` |
| `fetch` | Reads extracted text content from a file. | `files.content.read` |
| `download_link` | Creates download metadata for file access. | `files.content.read` |
| `file_preview` | Reads preview metadata and preview-resource context. | `account_info.read` |
| `who_am_i` | Read-only account identity check. | `account_info.read` |
| `list_shared_links` | Read-only shared-link listing. | `sharing.read` |
| `get_shared_link_metadata` | Read-only shared-link metadata lookup. | `sharing.read` |
| `create_shared_link` | Creates or reuses a shared link. | `sharing.write` |
| `list_file_requests` | Read-only file-request listing. | `file_requests.read` |
| `get_file_request` | Read-only file-request lookup. | `file_requests.read` |
| `create_file_request` | Creates a Dropbox file request. | `file_requests.write` |
| `create_folder` | Creates a Dropbox folder. | `files.content.write` |
| `create_file` | Creates a text-oriented Dropbox file. | `files.content.write` |
| `upload_file` | Uploads files or content to Dropbox. | `files.content.write` |
| `copy` | Copies Dropbox content. | `files.content.write` |
| `move` | Moves Dropbox content. | `files.content.write` |
| `delete` | Deletes Dropbox content. | `files.content.write` |
| `check_job_status` | Checks async file-operation job status. | `files.content.write` |

**Input parameters.** The vendor does not publish input schemas for these tools, and the server needs a Dropbox sign-in before it will list them, so this README does not list full parameter tables. The vendor's workflow notes mention these inputs:

- `search` and `list_folder` return a `cursor` when there are more results. Pass only the cursor to continue.
- `list_folder` takes a `recursive` flag.
- `list_shared_links` pages the same way (`has_more` / cursor).
- `get_file_request` takes the raw file request ID.
- `create_file_request` needs a title and a destination folder, and can take a deadline. The destination must be a child folder (for example `/Your Name/Invoices`), not the team root or personal root.

To see the exact schemas, connect the plugin and ask the agent to list the Dropbox tools.

**Resources and prompts.** The vendor documents no MCP prompts. The only resource it mentions is an MCP Apps file preview, used by `file_preview`; it works in clients that support MCP Apps UI resources.

**Safety.** Tools that write (`create_*`, `upload_file`, `copy`, `move`, `delete`) change real Dropbox content. The vendor recommends confirming exact targets before any write, and listing the exact items before any delete.

## Skills

The `skills/` folder holds all 6 agent skills published in the vendor's [Cursor package](https://github.com/dropbox/dropbox-ai-plugins/tree/078f0ca36df40f054829b58731a5f86a561d9668/cursor/skills) at commit `078f0ca36df40f054829b58731a5f86a561d9668`, copied unchanged. The source is licensed under Apache-2.0, copyright (c) 2026 Dropbox, Inc. The original licence text is in `skills/LICENSE`. The vendor's Claude and Antigravity packages carry the same 6 skills.

The skills are instructions for the agent. They do not change how you sign in, and they add no install settings. They use the Dropbox tools above, which need the OAuth sign-in.

| Skill | What its description says |
| --- | --- |
| `find-dropbox-content` | Find Dropbox files and folders relevant to a user request. |
| `inspect-dropbox-file` | Inspect a Dropbox file or folder by checking metadata, shared links, and file content when needed. |
| `share-dropbox-content` | Share Dropbox files or folders by creating shared links, inspecting existing shared links, or explaining current shared-link state. |
| `collect-files-with-request` | Create, inspect, and manage Dropbox file requests for collecting uploads from other people. |
| `organize-dropbox-folder` | Organize Dropbox files and folders by creating folders, copying content, or moving content into a cleaner structure. |
| `clean-up-dropbox-content` | Clean up Dropbox content by identifying obsolete, duplicate, temporary, or unwanted files and deleting only after explicit review. |

None were left out. All six passed the repository checks: the name matches the folder, descriptions are under the length limit, no links point outside the skills folder, and none install software or edit configuration.

## Examples

- "Find the Q4 planning deck in Dropbox."
- "Summarize this Dropbox file and tell me when it was last modified."
- "Create a shared link for the Launch folder."
- "Create a Dropbox file request for vendor invoices."
- "Copy final PDFs into the Final folder."
- "Review duplicate exports in this folder and ask before deleting anything."

## Limits

From the vendor's notes:

- No sharing with named people or viewer management; only shared links.
- No revision history or restore.
- File content extraction depends on the file types and limits of the Dropbox MCP service.
- Some file operations finish asynchronously; use `check_job_status` before reporting a final result.

## Platforms

Any client that supports remote MCP servers over streamable HTTP with OAuth: BoldCreate Connect, Cursor and Claude Code. The server is hosted by Dropbox, so nothing is installed or run locally.

## Docs

- Dropbox AI plugins (vendor repository, Cursor package): https://github.com/dropbox/dropbox-ai-plugins/tree/main/cursor
- Dropbox support: https://www.dropbox.com/support
- Dropbox privacy policy: https://www.dropbox.com/privacy

## Logo

Dropbox logo from the vendor's Cursor package in [dropbox/dropbox-ai-plugins](https://github.com/dropbox/dropbox-ai-plugins/tree/078f0ca36df40f054829b58731a5f86a561d9668/cursor/assets) (Apache-2.0). The mark is a trademark of its owner.

## License

MIT, for the files in this folder.

The logo, the skills, the tool descriptions and the endpoint details come from [dropbox/dropbox-ai-plugins](https://github.com/dropbox/dropbox-ai-plugins) at commit `078f0ca36df40f054829b58731a5f86a561d9668`, licensed under the Apache License, Version 2.0 (SPDX `Apache-2.0`), copyright (c) 2026 Dropbox, Inc. The licence text is in `assets/LICENSE-Apache-2.0.txt`. The source repository has no NOTICE file, so there is no further attribution to carry forward. This plugin changes the descriptions and metadata and leaves the logo and the skills as published. Apache-2.0 does not grant any right to the Dropbox name or logo beyond describing where the plugin comes from.
