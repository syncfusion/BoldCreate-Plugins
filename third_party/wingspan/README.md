# Wingspan

Skills that teach agents to work with Wingspan. They are copied from the vendor's repository, [wingspanHQ/mcp-claude-plugin](https://github.com/wingspanHQ/mcp-claude-plugin), at commit `7f99cb3`.

Ask Claude about the contractors you pay through Wingspan, what you owe them, and what is holding up a payment — then onboard contractors and log payments as drafts, with a preview before anything is written.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Wingspan**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Wingspan**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install wingspan@boldcreate-plugins`.

## Skills

8 skills: `checking-payments`, `connect`, `creating-draft-payables`, `finding-contractors`, `onboarding-contractors`, `outstanding`, `troubleshooting-connection`, `using-wingspan-tools`.

## Setup

No install-time settings.

## Before you install

It ships no scripts. The skills are guidance for the agent.

Some skill files point to their references with `${CLAUDE_PLUGIN_ROOT}/skills/...`. The files exist in this plugin. The variable is a Claude Code feature, so other clients may not expand it. The skill files are unchanged.

## Docs

- Vendor repository: https://github.com/wingspanHQ/mcp-claude-plugin

## Logo

Neutral tile with the product's initials.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.
