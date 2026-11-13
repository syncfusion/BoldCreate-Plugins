# Harness

BoldCreate plugin that connects agents to Harness through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Build, ship and secure your apps on the Harness platform, with Harness skills for pipelines, feature flags, cloud cost, chaos and security.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Harness**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Harness**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install harness@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "harness": {
      "type": "http",
      "url": "https://mcp.harness.io/mcp",
      "auth": {
        "CLIENT_ID": "${CLIENT_ID}"
      }
    }
  }
}
```

## Before you connect

Harness's hosted MCP page says:

- It is for Harness SaaS accounts only. Self-hosted and open-source servers use an API key instead.
- Hosted MCP needs OAuth to be enabled on the Harness account. A team admin must ask Harness Support to enable it. Without that, sign-in fails even when the Harness login is valid.
- If the account signs in through a SAML or OIDC identity provider, an admin must add an MCP-specific ACS URL or redirect URI to that provider first.
- A dedicated SaaS cluster or a non-default region may use a different MCP address. Confirm it with Harness Support.

## Setup

Set this when you install the plugin. It is not a secret.

| Setting | Required | Secret | What to enter |
| --- | --- | --- | --- |
| **Client ID** (`CLIENT_ID`) | No (default `mcp-client`) | No | The OAuth client ID that Harness's hosted MCP page tells clients to use. Replace it only if Harness gives your team a different one. |

The first time the agent calls a tool, each member signs in to Harness in the browser (OAuth through Harness ID). Tool calls run with that member's Harness identity, roles and permissions. Which tools appear depends on the account's Harness licences.

## Authentication

A live check on 2026-11-13 found:

- An unauthenticated request to `https://mcp.harness.io/mcp` returned HTTP 401 with no `WWW-Authenticate` header. Clients that find OAuth only from that header will not find it. The protected-resource metadata is served at `/.well-known/oauth-protected-resource/mcp` and at the host root.
- That metadata names `https://id.harness.io/idp/realms/HarnessIDP` as the authorization server.
- The authorization server metadata lists a registration endpoint (`/clients-registrations/openid-connect`), PKCE with `plain` and S256, and several token endpoint methods. It does not list client ID metadata documents.

So the server advertises dynamic client registration. No registration request was sent during the check. Two other sources suggest registration may not work for every client:

- Harness's own docs and its Cursor plugin use a fixed client ID, `mcp-client`, with no client secret. This plugin does the same.
- A third-party project's notes (Novu, a public repository) say its registration attempt was rejected for its own callback address, and that Harness accepts only the fixed client. I did not verify that.

I could not test sign-in through BoldCreate Connect, so it is not confirmed that Harness accepts Connect's redirect address with `mcp-client`. If sign-in fails, ask Harness Support whether Connect's callback can be allowed for your account.

**Not checked.** The tool list behind sign-in was not read. The tool names below come from Harness's rule file and docs.

## Tools

Harness's docs say the server has 11 tools that cover many resource types: `harness_list`, `harness_get`, `harness_create`, `harness_update`, `harness_delete`, `harness_execute`, `harness_search`, `harness_describe`, `harness_schema`, `harness_diagnose` and `harness_status`. They can create, change and delete Harness resources, and run, approve, reject or interrupt pipelines.

Harness says the server asks the user to approve each create, update, delete and execute call. A client or an environment setting can turn that off. Review what the agent plans before you approve, and give members only the Harness roles they need.

## Skills

The `skills/` folder holds the 73 agent skills from the `plugins/cursor/skills` folder of [harness/harness-ai](https://github.com/harness/harness-ai/tree/ca2ab816842172cab64fe0df5f76d9ff2d286d4f/plugins/cursor/skills), at commit `ca2ab816842172cab64fe0df5f76d9ff2d286d4f`, copied unchanged. They cover pipelines, connectors, environments, feature flags and experiments, cloud cost, chaos engineering, security scans, supply chain and more. Each skill name matches its folder.

The folder's tree hash and every skill's tree hash were compared with the ones GitHub returns for that commit, and they match. The Claude Code copy in the same repository is identical.

The source is licensed under Apache-2.0, copyright Harness Inc. The original licence text is in `skills/LICENSE`. This is the repository's root `LICENSE`, which is the same text as the one in the Cursor plugin folder apart from the copyright line.

**Things to know about the skills.**

- `chaos-code-risk-scan` includes 5 Python scripts. They read the repository, run `git` with fixed arguments, and write JSON files. They make no network calls. The skill tells the agent to run them with `python3`.
- `configure-agent-pr-attestation` tells the user to run `task compile-harness-scs && sudo mv harness-scs /usr/local/bin/` when a tool is missing. It is for the user to run.
- `create-pipeline` mentions `pip install -r requirements.txt` as an example of what a Python project uses.
- Five skills are larger than 24,000 bytes (`chaos-code-risk-scan`, `configure-dast-scan`, `create-sbom`, `dbops-changeset` and `exempt-vuln`). Harness's Antigravity notes say that client truncates files over that size. I did not check the other clients.
- Every skill says it needs the Harness MCP server, except one that only generates YAML files locally.

**Left out.** Harness's Cursor plugin also has these, and none is included:

- The two rules in `rules/`. `harness.mdc` is always on and describes the plugin's two hooks. I did not read `plugin-standards.mdc`.
- `hooks/hooks.json` and the four scripts it runs. They call the Harness API directly and need `HARNESS_API_KEY` and `HARNESS_ACCOUNT_ID` in the shell. This repository does not import hooks.
- `.mcp.local.json`, which runs the open-source server with `npx` and an API key.

## Docs

- Hosted MCP: https://developer.harness.io/harness-platform/use-harness-ai/connect-with-ai/index/hosted-mcp
- Harness MCP server: https://github.com/harness/mcp-server
- Harness AI plugins: https://github.com/harness/harness-ai

## Logo

The Harness mark from the logo in Harness's Cursor plugin, centred on a white tile. It is Harness's own mark and a trademark of its owner. It is not covered by the MIT licence.

## License

MIT for this plugin. The skills are Apache-2.0, as noted above.
