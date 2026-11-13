# Wix

BoldCreate plugin that connects agents to Wix through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search the Wix documentation, write code for the Wix platform, and make API calls on Wix sites.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Wix**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Wix**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install wix@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "wix": {
      "type": "http",
      "url": "https://mcp.wix.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to their own Wix account in the browser (OAuth).

## Authentication

A live check on 2026-11-13 found:

- An unauthenticated request to `/mcp` returned HTTP 401 with `WWW-Authenticate: Bearer` and a link to the protected-resource metadata.
- The metadata names `https://mcp.wix.com` as the authorization server, with the scope `offline_access`.
- The authorization server metadata lists a registration endpoint (dynamic client registration), PKCE with `plain` and `S256`, and the `authorization_code` and `refresh_token` grants.
- Token endpoint methods are `client_secret_basic`, `client_secret_post` and `none`.

So members connect without a client ID or client secret from your team. No registration request was sent to the server during the check.

**Not checked.** The tool list is behind sign-in, so `tools/list` was not called. The tools below come from the README of Wix's `wix/wix-mcp` repository, not from the live server.

## What the server offers

Wix's README lists these tools, all enabled by default:

| Tool | What it does, in Wix's words |
| --- | --- |
| `SearchWixWDSDocumentation` | Search the Wix Design System documentation. |
| `SearchWixRESTDocumentation` | Search the Wix REST documentation. |
| `SearchWixSDKDocumentation` | Search the Wix SDK documentation. |
| `SearchBuildAppsDocumentation` | Search the Wix Build Apps documentation. |
| `SearchWixHeadlessDocumentation` | Search the Wix Headless documentation. |
| `WixBusinessFlowsDocumentation` | Include complete step-by-step instructions for multi-step sample flows. |
| `ReadFullDocsArticle` | Fetch the full content of an article by article URL. |
| `ReadFullDocsMethodSchema` | Get the full request and response schema of an API method. |
| `ListWixSites` | Query the sites for a Wix account. |
| `CallWixSiteAPI` | Perform an action or query for a given account and selected site. |
| `ManageWixSite` | Perform a site-level action, such as creating a site. |
| `SupportAndFeedback` | Prompt the user for feedback and send it to Wix. |

## Skills

The `skills/` folder holds 4 of the 15 skills published in [wix/skills](https://github.com/wix/skills/tree/b69326692b240e198183953535d2754ef42f6238/skills) at commit `b69326692b240e198183953535d2754ef42f6238`, copied unchanged: `wix-docs`, `wix-manage`, `wix-readme` and `wix-studio-two`. Wix's repository is a read-only mirror of a private repository. Its `LICENSE` is MIT, copyright 2025 Wix.com, and a copy is in `skills/LICENSE`.

These four contain Markdown only, with no scripts.

**Left out.** The other 11 skills are not included:

- Skills with scripts that start child processes or call Wix and other hosts: `wix-app` (9 `.cjs` files), `wix-design-system` (1) and `wix-headless-kit` (13 `.mjs` files). The headless kit's scripts run `npm`, `npx` and `git`, clone `https://github.com/wix/skills.git`, open `wix login` and call `manage.wix.com` and `wixapis.com`.
- Skills that are large or ship project templates: `wix-headless-templates` (855 files), `wix-replatform` (567 files), `wix-headless-replatform`, `wix-headless`, `wix-vibe-headless`, `wix-harmony-editor` (31 files, with scripts), `wix-headless-cold-start` and `wix-base44-connector`.
- Wix's plugin hook files, the `yaml/` and `antigravity/` folders and the CI workflows.

**Links to skills not included.** `wix-manage/references/donations/create-and-update-donation-campaigns.md` links to `wix-headless`, and `wix-readme` describes the full Wix plugin, which has more skills than this one. Those links and descriptions will not resolve here.

**Commands in the skills.** `wix-docs` shows `curl` calls to `dev.wix.com` and `npx @wix/cli@latest token` and `npx -y skills add wix/skills/skills/wix-manage`. `wix-studio-two` shows an `npm install` command to run on a remote machine. They run only if the agent runs them. Review them before you approve them.

**Access.** The `wix-manage` skill says it requires Wix REST API access (API key or OAuth), and `wix-studio-two` says it needs to make Wix REST API calls for the user's account and sites.

## Docs

- About the Wix MCP: https://dev.wix.com/docs/sdk/articles/use-the-wix-mcp/about-the-wix-mcp
- Wix MCP server repository: https://github.com/wix/wix-mcp
- Wix skills: https://github.com/wix/skills

## Logo

Wix wordmark from the `assets/logo.svg` in [wix/skills](https://github.com/wix/skills), redrawn in black on a white tile (Wix's file is white on a black plate). It is a trademark of its owner and is not covered by the MIT licence.

## License

MIT
