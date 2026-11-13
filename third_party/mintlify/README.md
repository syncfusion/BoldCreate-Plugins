# Mintlify

BoldCreate plugin that connects agents to Mintlify through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Edit your Mintlify content, restructure navigation, and open pull requests, with a Mintlify reference skill and writing rules.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Mintlify**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Mintlify**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install mintlify@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "mintlify": {
      "type": "http",
      "url": "https://mcp.mintlify.com"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to their own Mintlify account in the browser (OAuth). There is no API key to paste. You need a Mintlify project that your account can reach.

## What the server is

Mintlify's page for this server calls it the admin MCP. It lets an agent change a Mintlify project. Mintlify lists these groups of tools: content (read, search, edit and write pages), comments, navigation, configuration, project management (settings, custom domains, Git sources, site authentication, automations, members, analytics), review requests, and branches and publishing.

Mintlify says edits on a branch open a pull request, and that `publish` is for when the user asks. It also says that project management tools change the live project at once, with no branch or pull request. Those include authentication, domains and members. Review what the agent plans before you approve a change of that kind.

Mintlify's page says your dashboard role limits what a connection can do. Viewers can use read tools only.

## Servers not used

Mintlify also runs a search server for its own documentation at `https://mintlify.com/docs/mcp`. It needs no sign-in, so it cannot give each member their own account. This plugin does not set it. Mintlify's own plugin sets both servers. The skill below describes both and names the search server's tools.

## Authentication

A live check on 2026-11-13 found:

- An unauthenticated request to `https://mcp.mintlify.com` returned HTTP 401 with `WWW-Authenticate: Bearer` and a link to the protected-resource metadata.
- The metadata names the same host as the authorization server and lists 13 scopes: `docs:read`, `docs:write`, `nav:write`, `config:write`, `session:write`, `deployment:read`, `deployment:write`, `members:read`, `members:write`, `billing:read`, `integrations:write`, `analytics:read` and `offline_access`.
- The authorization server metadata lists a registration endpoint (dynamic client registration), PKCE with S256, and the `authorization_code` and `refresh_token` grants. The only token endpoint method is `none`, so registration does not issue a client secret.

So members connect without a client ID or client secret from your team. No registration request was sent to the server during the check.

Mintlify's page says Claude, ChatGPT and Cursor can always complete the sign-in, and that other clients need their redirect domain added by a project admin in the Mintlify dashboard. That page names Claude, ChatGPT and Cursor as always allowed and does not list BoldCreate Connect, so whether Connect's redirect address is accepted was not checked.

The same page describes credentials for non-interactive use. They can read content but cannot change it. This plugin does not set one.

**Not checked.** The tool list behind sign-in was not read. The tool names above come from Mintlify's page and skill, not from the server.

## Skills

The `skills/` folder holds the `mintlify` skill from [mintlify/cursor-plugin](https://github.com/mintlify/cursor-plugin/tree/f61ad66e0d187d11bcf5bf6cc4b7abdacc4a1c5c/skills/mintlify) at commit `f61ad66e0d187d11bcf5bf6cc4b7abdacc4a1c5c`, copied unchanged. It has a `SKILL.md` and 20 reference files on components, `docs.json` settings, navigation, API docs, the command-line tool, customization, writing and publishing.

The `rules/` folder holds `mintlify.mdc` from the same commit. It sets writing standards and file conventions, and applies to `.mdx` files and `docs.json`.

The folder tree hashes of the skill and the rule match the ones GitHub returns for that commit. A copy of the repository's `LICENSE` (MIT, copyright 2026 Mintlify) is in `skills/LICENSE`.

**What the skill does.** Its text says to check the live Mintlify documentation when a detail is not in the skill. Some of its steps use the `mint` command-line tool, which is not part of this plugin:

- It tells the agent to install it with `npm i -g mint`, to run `mint login`, `mint dev`, `mint validate`, `mint broken-links` and `mint deploy`, and, if the user agrees, `mint agent setup`. That last command adds Mintlify's admin server to the agent's own configuration and installs Mintlify skills, so the server may appear twice. Mintlify's page says to keep one entry.
- It names `npx @mintlify/scraping@latest` for turning an OpenAPI file into pages.
- Where it has no checkout and no command-line tool, it tells the agent to use the admin server's tools instead.

The skill describes both Mintlify servers and names the tools of the docs search server (`search_mintlify`, `query_docs_filesystem_mintlify`, `submit_feedback`). Those tools are not available through this plugin.

**A typo in the rule.** Two lines of `mintlify.mdc` say `s.json` where `docs.json` is meant ("The config file is always `s.json`" and "add new pages to `s.json` navigation"). The same text is in Mintlify's repository. Files are not edited after import, so it is kept as it is.

**Not included.** Mintlify's repository also holds a `.mintlify-agent-context.json` file and its own plugin manifest. Mintlify publishes separate plugins for Claude Code, Codex and Kiro, which were not used.

## Docs

- Admin MCP: https://www.mintlify.com/docs/ai/mintlify-mcp
- Search MCP: https://www.mintlify.com/docs/ai/model-context-protocol
- Plugin source: https://github.com/mintlify/cursor-plugin

## Logo

Mintlify's favicon from `mintlify.com`, centred on a white tile. It is Mintlify's own mark and a trademark of its owner. It is not covered by the MIT licence.

## License

MIT
