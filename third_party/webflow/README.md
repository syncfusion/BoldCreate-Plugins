# Webflow

BoldCreate plugin that connects agents to Webflow through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

AI-powered design and management for Webflow sites.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Webflow**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Webflow**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install webflow@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "webflow": {
      "type": "http",
      "url": "https://mcp.webflow.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to their own Webflow account in the browser (OAuth) and authorizes the sites to use.

## Designer bridge app

Webflow's README says the remote server comes with a companion app that syncs the live Designer canvas with the agent. To use Designer tools, open the site in the Webflow Designer, open the Apps panel (press `E`), launch the "Webflow MCP Bridge App", and wait for it to connect. This plugin does not install that app. Without it, Webflow's README says Designer-based features are not available. Data tools such as sites, CMS and pages do not need it.

## Endpoint

Webflow's current README shows `https://mcp.webflow.com/sse` in its Cursor and Claude Desktop examples. Its `server.json` and its skills repository list `https://mcp.webflow.com/mcp`. Both paths answered HTTP 401 on 2026-11-13. This plugin uses `/mcp`, the streamable HTTP path.

## Authentication

A live check on 2026-11-13 found:

- An unauthenticated request to `/mcp` returned HTTP 401 with `WWW-Authenticate: Bearer` and a link to the protected-resource metadata.
- The metadata names `https://mcp.webflow.com` as the authorization server. It lists no scopes.
- The authorization server metadata lists a registration endpoint (dynamic client registration), PKCE with `plain` and `S256`, and the `authorization_code` and `refresh_token` grants.
- Token endpoint methods are `client_secret_basic`, `client_secret_post` and `none`.
- The metadata says client ID metadata documents are not supported.

So members connect without a client ID or client secret from your team. No registration request was sent to the server during the check.

Webflow's README also describes a local server that runs with `npx -y webflow-mcp-server@latest` and a `WEBFLOW_TOKEN` API token. This plugin does not use it.

**Not checked.** The tool list is behind sign-in, so `tools/list` was not called. Webflow's README says its tools are listed in the repository's `tools` folder, and says the server has no `prompts` or `resources`. I did not read that folder.

## Left out

This plugin has the hosted server only. Webflow publishes an agent skills repository, `webflow/webflow-skills` (MIT), that I checked at commit `fd07213dfaac2ff33465ff367685711783261287`. Its tree hashes matched GitHub's. It holds 33 skills and one agent, all Markdown files, and none are included:

- Every one of the 33 skills has a `name` such as `webflow-mcp:site-audit`, with a colon and a prefix. This repository's checks accept only lowercase letters, digits and single hyphens, and require the name to match the folder name, so all 33 fail. Skills are copied unchanged, so I did not rename them.
- The agent is shipped together with the skills, and it describes them.
- Several skills tell the agent to run `npm install -g @webflow/webflow-cli`, `npm i` and `npx webflow library share`. One lists `rm -rf node_modules && npm install`.
- One skill, `deploy-guide`, links to a file that is not in the skills folder (`../../references/CODE_COMPONENTS_REFERENCE.md`).

If Webflow changes the skill names, they could be added later.

## Docs

- Webflow MCP server: https://developers.webflow.com/mcp/reference/overview
- MCP server source: https://github.com/webflow/mcp-server
- Webflow skills: https://github.com/webflow/webflow-skills

## Logo

Webflow's mark from `webflow/webflow-skills` (a white mark on a blue plate), redrawn in Webflow's blue on a white tile. It is the owner's mark and a trademark of its owner. It is not covered by the MIT licence.

## License

MIT
