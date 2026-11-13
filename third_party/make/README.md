# Make

BoldCreate plugin that connects agents to Make through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Build, run and debug Make automation scenarios.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Make**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Make**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install make@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "make": {
      "type": "http",
      "url": "https://mcp.make.com/v2"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to their own Make account in the browser (OAuth) and chooses the access to grant. Make's documentation says the scopes you select decide which tools are available. Scenario run tools are available on all plans, and management tools on paid plans.

## Endpoint

Make's documentation lists `https://mcp.make.com/v2` for OAuth. It also documents an API-key connection at `https://<MAKE_ZONE>/mcp/u/<API_KEY>/v2`, where the key sits in the URL. This plugin does not use it.

Make's own plugins use other paths on the same host, such as `/cursor`, `/claude` and `/openai`. This plugin uses `/v2`, the path in Make's documentation and in its MCP Registry listing (`com.make/mcp-server`). The linked `integromat/make-mcp-server` repository is Make's older local server, which Make's README marks as legacy. It is not used here.

## Authentication

A live check on 2026-11-13 found:

- An unauthenticated request to `/v2` returned HTTP 401 with `WWW-Authenticate: Bearer` and a link to the protected-resource metadata.
- The metadata names `https://www.make.com/mcp-openai` as the authorization server. `/cursor` and `/claude` name the same one.
- The authorization server metadata lists a registration endpoint (dynamic client registration), PKCE with S256, and the `authorization_code` and `refresh_token` grants. The token endpoint method is `client_secret_post`. It lists no scopes and no client ID metadata document support.

So members connect without a client ID or client secret from your team. No registration request was sent to the server during the check.

**Not checked.** The tool list is behind sign-in, so `tools/list` was not called.

## Skills

The `skills/` folder holds the 7 agent skills published in [integromat/make-skills](https://github.com/integromat/make-skills/tree/9c4298027268148dc3e4525a09af90102a717107/skills) at commit `9c4298027268148dc3e4525a09af90102a717107`, copied unchanged: `make-scenario-reference`, `make-scenario-explore`, `make-scenario-building`, `make-scenario-operations`, `make-endpoints`, `make-functions-v2` and `make-credential-requests`. A copy of Make's MIT `LICENSE` is in `skills/LICENSE`.

**Access the skills need.** Make's README says installing a skill does not grant access.

- `make-endpoints` says Endpoints are in closed beta and need organization enablement. It uses `@makehq/endpoints-sdk` and its command-line tool, which this plugin does not install.
- `make-functions-v2` needs the Functions tools and team rollout access.
- `make-credential-requests` needs an authorized credential-request interface.

**Commands in the skills.** `make-endpoints` includes examples that run `npx make-endpoints-cli` and `npx --package=@makehq/endpoints-sdk`. They run only if the agent runs them. Review them before you approve them.

**Not imported.** Make's repository also holds per-client plugin folders, a `dist/` folder of zip files, scripts and CI files. Only the skills were copied. Make's Cursor plugin and the shared `skills/` folder are the same, and the folder hashes match.

## Docs

- Make MCP server: https://developers.make.com/mcp-server
- Make plugin and skills: https://skills.make.com/
- Make skills source: https://github.com/integromat/make-skills

## Logo

The 180 by 180 icon from `plugins/make-skills-cursor/assets/icon.png` in [integromat/make-skills](https://github.com/integromat/make-skills), centred on a white 192 by 192 tile with no scaling. It is Make's own icon and a trademark of its owner. It is not covered by the MIT licence.

## License

MIT
