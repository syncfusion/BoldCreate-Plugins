# Honeycomb

Skills and agents that teach agents to work with Honeycomb. They are copied from the vendor's repository, [honeycombio/agent-skill](https://github.com/honeycombio/agent-skill), at commit `6bb0927`.

Skills, agents, and workflows for Honeycomb observability — query patterns, production investigations, SLOs, OpenTelemetry instrumentation, and Beeline migration.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Honeycomb**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Honeycomb**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install honeycomb@boldcreate-plugins`.

## Skills

11 skills: `beeline-migration`, `create-honeycomb-board`, `metrics-queries`, `observability-fundamentals`, `otel-genai-instrumentation`, `otel-instrumentation`, `otel-migration`, `production-investigation`, `query-patterns`, `slos-and-triggers`, `verify-recent-trace`.

## Setup

No install-time settings.

## Before you install

It ships no scripts. The skills are guidance for the agent.

The vendor's logo is not square, so it may look stretched next to the other plugins.

The skills mention these environment variables for credentials: `HONEYCOMB_API_KEY`. This plugin does not store them.

Some skill files point to their references with `${CLAUDE_PLUGIN_ROOT}/skills/...`. The files exist in this plugin. The variable is a Claude Code feature, so other clients may not expand it. The skill files are unchanged.

## Docs

- Vendor repository: https://github.com/honeycombio/agent-skill

## Logo

Logo copied from the vendor repository. The mark is a trademark of its owner.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.
