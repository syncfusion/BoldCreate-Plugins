# Amplitude

BoldCreate plugin that connects agents to Amplitude through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Use Amplitude like an expert - instrument analytics, discover product opportunities, analyze charts, create dashboards, manage experiments, and understand users and accounts.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Amplitude**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Amplitude**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install amplitude@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "amplitude": {
      "type": "http",
      "url": "https://mcp.amplitude.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Amplitude in the browser (OAuth). Tool calls run with that member's permissions.

## Skills

The `skills/` folder holds 27 of the 36 agent skills published in [amplitude/mcp-marketplace](https://github.com/amplitude/mcp-marketplace/tree/658f88b994d80ac94cff8deaf2886b7f9eb927e9/plugins/amplitude/skills) at commit `658f88b994d80ac94cff8deaf2886b7f9eb927e9`, copied unchanged. The source is licensed under MIT, copyright Amplitude, Inc. The original licence text is in `skills/LICENSE`.

The skills are instructions for the agent. They do not change how you sign in, and they add no install settings. Some skills refer to the Amplitude tools, which need the OAuth sign-in above.

**Left out (9):** `analyze-chart`, `analyze-experiment`, `analyze-experiment-consolidated`, `build-charts-with-typed-params`, `create-chart`, `edit-guides-surveys`, `manage-amp-context`, `monitor-experiments`, `monitor-experiments-consolidated`. Amplitude marks these with feature flags (`x-amp-flags` or `x-amp-exclude-when-flags`) so that its own tools show only one of each pair, and this plugin cannot set those flags. One of them, `analyze-experiment`, also has a name in its file (`analyze-experiments`) that does not match its folder, which the repository checks reject.

| Skill | What its description says |
| --- | --- |
| `add-analytics-instrumentation` | End-to-end analytics instrumentation workflow for a PR, branch, file, |
| `analyze-account-health` | Summarizes B2B account health by analyzing usage patterns, engagement trends, risk signals, and expansion opportunities. Use for customer success... |
| `analyze-ai-topics` | Analyzes what users ask AI agents about and how well each topic is served. Only use when the user has Amplitude Agent Analytics instrumented in... |
| `analyze-dashboard` | Deeply analyze Amplitude dashboards by analyzing key charts, surfacing top areas for concern and takeaways, identify anomalies, then explain... |
| `analyze-feedback` | Synthesizes customer feedback into actionable themes including feature requests, bugs, pain points, and praise. Use when planning product roadmap,... |
| `chart-link-analysis` | Answers questions from an Amplitude chart or dashboard link — fetch the definition, pull the data, explain or adapt it. Use when the user pastes... |
| `compare-user-journeys` | Compares how two user groups behave differently by analyzing Amplitude Session Replays and metrics side by side. Produces a behavioral diff... |
| `create-dashboard` | Builds comprehensive Amplitude dashboards from requirements or goals, organizing charts into logical sections with appropriate layouts. Use when... |
| `daily-brief` | Delivers a daily briefing of the most important changes across your Amplitude instance. Use when the user asks for a "daily download", "morning... |
| `debug-replay` | Turns bug reports into reproducible steps by finding error sessions in Amplitude Session Replay, extracting interaction timelines, and identifying... |
| `diagnose-errors` | Investigates errors across network failures, JavaScript errors, and error clicks to identify what's broken, where, and why. Use when the user says... |
| `diff-intake` | Reads a PR or branch diff and produces a structured YAML change brief for |
| `discover-analytics-patterns` | Discovers how analytics tracking calls are actually written in this codebase — |
| `discover-event-surfaces` | Given a change_brief YAML (output from diff-intake), generates an exhaustive |
| `discover-opportunities` | Discovers product opportunities by analyzing Amplitude analytics, experiments, session replays, and customer feedback. Synthesizes evidence into... |
| `instrument-events` | Given event_candidates YAML (output from discover-event-surfaces), generates a |
| `investigate-ai-session` | Deep-dives into specific AI agent sessions or failure patterns to explain why something went wrong. Only use when the user has Amplitude Agent... |
| `live-data-forensics` | Investigates live product issues against Amplitude data — "is X firing today", "did the release break Y", "which users are affected by Z". Covers... |
| `monitor-ai-quality` | Monitors AI agent health across quality, cost, performance, and errors. Only use when the user has Amplitude Agent Analytics instrumented in their... |
| `monitor-reliability` | Delivers a reliability health check using auto-captured network request, JS error, and error click data. Use when the user asks for a "reliability... |
| `replay-ux-audit` | Finds and analyzes Amplitude Session Replays to surface UX friction patterns across multiple sessions. Produces a ranked friction map showing... |
| `review-agent-insights` | Retrieves, synthesizes, and prioritizes all recent AI agent results from Amplitude. Queries every agent type available in get_agent_results,... |
| `scheduled-report-refresh` | Refreshes recurring reports (daily briefings, WBRs, experiment briefs) from saved Amplitude content — fetch the dashboard, re-pull its charts,... |
| `taxonomy` | Source of truth for event taxonomy generation, data auditing, and governance best practices |
| `tracking-plan-audit` | Use when auditing Amplitude tracking plans for safe deletion candidates among stale, duplicate, orphaned, cross-app, retired, high-volume,... |
| `user-cohort-forensics` | Investigates individual users and user populations in Amplitude — resolve users by email/ID, read profiles, batch-analyze event timelines,... |
| `weekly-brief` | Delivers a weekly briefing summarizing the most important trends, wins, and risks across your Amplitude instance. Use when the user asks for a... |

## Docs

- Amplitude plugin (vendor repository): https://github.com/amplitude/mcp-marketplace

## Logo

Official Amplitude icon, downloaded from amplitude.com. The mark is a trademark of its owner.

## License

MIT
