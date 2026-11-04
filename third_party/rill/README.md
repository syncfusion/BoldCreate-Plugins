# Rill

Skills that teach agents to work with Rill. They are copied from the vendor's repository, [rilldata/agent-skills](https://github.com/rilldata/agent-skills), at commit `adfce57`.

Skills for developing and querying projects in the Rill business intelligence platform

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Rill**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Rill**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install rill@boldcreate-plugins`.

## Skills

10 skills: `rill-analysis`, `rill-canvas`, `rill-component`, `rill-connector`, `rill-development`, `rill-explore`, `rill-metrics-view`, `rill-model`, `rill-rillyaml`, `rill-theme`.

## Setup

No install-time settings.

## Before you install

It ships no scripts. The skills are guidance for the agent.

The skills mention these environment variables for credentials: `CLICKHOUSE_PASSWORD`, `DATABRICKS_TOKEN`, `DRUID_PASSWORD`, `HTTPS_TOKEN`, `MOTHERDUCK_TOKEN`, `OPENAI_API_KEY`, `PINOT_PASSWORD`, `STARROCKS_PASSWORD`. This plugin does not store them.

## Docs

- Vendor repository: https://github.com/rilldata/agent-skills

## Logo

Neutral tile with the product's initials.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.
