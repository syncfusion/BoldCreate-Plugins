# Endor Labs

Skills and agents that teach agents to work with Endor Labs. They are copied from the vendor's repository, [endorlabs/ai-plugins](https://github.com/endorlabs/ai-plugins), at commit `2de0088`.

Endor Labs agent setup and workflow agents for findings, remediation and dependency review.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Endor Labs**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Endor Labs**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install ai-plugins@boldcreate-plugins`.

## Skills

1 skills: `endor-agent-kit-setup`.

## Setup

No install-time settings.

## Before you install

The plugin has one skill, `endor-agent-kit-setup`, and eleven agents (for example `ai-sast-remediation`, `sca-remediation`, `dependency-reviewer`, `malware-responder`). It ships no scripts inside the skill.

The agents assume an Endor Labs account and its tools. This plugin includes no MCP configuration, so connect Endor Labs yourself before you use them.

The vendor also ships four hook scripts that check dependency installs and manifest edits. They are not included, because they use Claude Code's hook format and plugin-root paths.

## Docs

- Vendor repository: https://github.com/endorlabs/ai-plugins

## Logo

Logo copied from the vendor repository. The mark is a trademark of its owner.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.
