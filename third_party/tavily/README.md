# Tavily

BoldCreate plugin that connects agents to Tavily through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Web search, content extraction, crawling, deep research, and URL discovery.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Tavily**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Tavily**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install tavily@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "tavily": {
      "type": "http",
      "url": "https://mcp.tavily.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to their own Tavily account in the browser (OAuth).

## Authentication

A live check on 2026-11-13 found:

- An unauthenticated `initialize` request returned HTTP 401 with `WWW-Authenticate: Bearer` and a link to the protected-resource metadata.
- The metadata names `https://mcp.tavily.com/` as the authorization server, with scopes `openid` and `offline_access`.
- The authorization server metadata lists a registration endpoint (dynamic client registration), client ID metadata documents, PKCE with S256, the `authorization_code` and `refresh_token` grants, and the token endpoint methods `none` and `private_key_jwt`.

So members connect without a client ID or client secret from your team. No registration request was sent to the server during the check.

Tavily's setup guide says other clients can pass an API key as `?tavilyApiKey=<key>` in the URL or as an `Authorization: Bearer <key>` header. This plugin does not use either.

**Not checked.** The tool list is behind sign-in, so `tools/list` was not called. The tool names in this README come from Tavily's skills, not from the server.

## Skills

The `skills/` folder holds 6 agent skills published in [tavily-ai/skills](https://github.com/tavily-ai/skills/tree/32889e61042e9b2dd90e44009dc4ed12825589c4/skills) at commit `32889e61042e9b2dd90e44009dc4ed12825589c4`, copied unchanged: `tavily-search`, `tavily-sdk`, `tavily-entity`, `tavily-list`, `tavily-monitor` and `tavily-research`. Tavily keeps them in three folders (`core`, `developers`, `tasks`); here each skill sits directly under `skills/`. The repository's MIT `LICENSE` (copyright 2026 Alpha AI Technologies Inc dba Tavily) is copied to `skills/LICENSE`.

The `rules/` folder holds `tavily-awareness.mdc`, an always-on rule from the same commit. It tells the agent to use `tavily_search` for recent information and documentation, and `tavily_extract` to read a page.

**Left out.**

- `tavily-search/references/setup.md`. It is Tavily's guide to installing the `tvly` command-line tool, and it includes a `curl -fsSL https://cli.tavily.com/install.sh | bash` line. `tavily-search/SKILL.md` still links to it ("follow [setup](references/setup.md)"), so that link points at a missing file.
- The `SessionStart` hook in Tavily's `.claude-plugin/plugin.json`. It prints the rules file at the start of a session. This plugin does not ship hooks.

**Commands in the skills.**

- `tavily-search`, `tavily-entity`, `tavily-list`, `tavily-monitor` and `tavily-research` allow Bash commands that start with `tvly` (`allowed-tools: Bash(tvly *)`). They use the MCP tools when the client has them and the `tvly` command otherwise.
- `tavily-search`, `tavily-list`, `tavily-monitor` and `tavily-research` tell the agent to run `npx skills add tavily-ai/skills --skill <name>` when a sibling skill is missing. All six skills ship here, so this should not be needed.
- `tavily-sdk` contains `pip install` lines for `tavily-python` and for LangChain, Pydantic AI, Agno, Anthropic, Google ADK and CrewAI integrations. They are documentation for code the user writes.

The skills run these commands only if the agent runs them. Review them before you approve them. Some skills save results to a `.tavily/` folder.

## Docs

- Tavily documentation: https://docs.tavily.com
- Tavily skills source: https://github.com/tavily-ai/skills

## Logo

Tavily's own logo from `assets/tavily-logo.svg` in [tavily-ai/skills](https://github.com/tavily-ai/skills/blob/32889e61042e9b2dd90e44009dc4ed12825589c4/assets/tavily-logo.svg), scaled and centred on a white tile. It is a trademark of its owner and is not covered by the MIT licence.

## License

MIT
