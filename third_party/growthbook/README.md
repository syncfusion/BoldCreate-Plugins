# GrowthBook

Skills that teach agents to work with GrowthBook. The skills are copied from the vendor's repository, [growthbook/skills](https://github.com/growthbook/skills), at commit `7a84f33`.

Manage GrowthBook feature flags, experiments, and product analytics.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **GrowthBook**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **GrowthBook**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install growthbook@boldcreate-plugins`.

## Skills

- `feature-flags`: create, search, toggle, target, schedule and archive feature flags.
- `experiments`: design, launch, analyze and stop A/B tests.
- `analytics`: run product analytics explorations, dashboards and metric queries.
- `gb-setup`: set up the API credentials the other skills use.

## Setup

No install-time settings.

## Before you install

Each skill calls `scripts/gb-call`, a small Node script (Node 18 or newer) that sends your GrowthBook API key to the GrowthBook REST API.

The `gb-setup` skill writes the key to `~/.config/growthbook/.env` (file mode 600) on the machine that runs the agent. This is a plain-text file. It does not use the sealed install-time secrets that BoldCreate MCP plugins use.

The skill names (`analytics`, `experiments`, `feature-flags`) are generic. If another plugin uses the same names, an agent may confuse them.

## Docs

- Vendor repository: https://github.com/growthbook/skills

## Logo

Neutral tile with the product's initials.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.
