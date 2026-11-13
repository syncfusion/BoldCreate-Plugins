# Mixpanel

BoldCreate plugin that connects agents to Mixpanel through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Analyze, query, and manage your Mixpanel data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Mixpanel**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Mixpanel**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install mixpanel@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "mixpanel": {
      "type": "http",
      "url": "https://mcp.mixpanel.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Mixpanel in the browser (OAuth). Tool calls run with that member's permissions.

This plugin targets the US endpoint (`https://mcp.mixpanel.com/mcp`). Mixpanel also runs EU (`mcp-eu.mixpanel.com`) and IN (`mcp-in.mixpanel.com`) endpoints; on another region, contact us for a site-specific build.

## Skills

The `skills/` folder holds the 12 agent skills published in [mixpanel/ai-plugins](https://github.com/mixpanel/ai-plugins/tree/dad3c11dbd2b4e2cc2c521efd6e81ae7c2f1bd57/plugins/mixpanel/skills) at commit `dad3c11dbd2b4e2cc2c521efd6e81ae7c2f1bd57`, copied unchanged. The source is licensed under Apache-2.0, copyright Mixpanel. The original licence text is in `skills/LICENSE`.

The skills are instructions for the agent. They do not change how you sign in, and they add no install settings. Some skills refer to the Mixpanel tools, which need the OAuth sign-in above.

| Skill | What its description says |
| --- | --- |
| `analyze-report` | Read and explain a Mixpanel report or chart — what it shows, what's |
| `create-dashboard` | Creates a well-designed Mixpanel dashboard. Use when the user asks you to build, create, or design a dashboard, or when you need to present... |
| `deep-research` | Conducts a structured metric investigation in Mixpanel. Use when the user asks why a metric changed, what's driving a trend, requests a "deep... |
| `install` | Set up Mixpanel for this project — set up an engine for the |
| `learn-mcp` | Onboard users to the Mixpanel MCP server through guided, interactive modules. |
| `manage-boards` | Full lifecycle dashboard management for Mixpanel — create, template, clone, clean up, |
| `manage-experiment` | Coach the user through any phase of a Mixpanel experiment — design (hypothesis |
| `manage-feature-flags` | Coach the user through Mixpanel feature-flag work — picking the right flag-shaped product (Feature Gate vs Dynamic Config vs Experiment), naming... |
| `manage-lexicon` | Audit, score, enrich, or clean up the Lexicon (events and properties metadata) |
| `monitor-metrics` | Monitor and diagnose a Mixpanel metric for anomalies, drift, and root |
| `prepare-ai-readiness` | Gets a Mixpanel org or project ready for its AI assistants — business context |
| `tracking-implementation` | Guides a coding agent through helping a Mixpanel customer implement analytics correctly. Covers Quick Start (first events in one session), Full... |

## Docs

- Mixpanel MCP server: https://docs.mixpanel.com/docs/mcp

## Logo

Mixpanel mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #7856FF, on a padded white tile. The mark is a trademark of its owner.

## License

MIT
