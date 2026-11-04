# Atlassian Forge Skills

Skills that teach agents to work with Atlassian Forge Skills. They are copied from the vendor's repository, [atlassian/forge-skills](https://github.com/atlassian/forge-skills), at commit `4f04ae0`.

Forge app builder skill bundle with Forge MCP configuration for Atlassian Forge workflows.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Atlassian Forge Skills**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Atlassian Forge Skills**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install forge-skills@boldcreate-plugins`.

## Skills

6 skills: `forge-app-builder`, `forge-app-review`, `forge-connector`, `forge-cost-optimizer`, `forge-debugger`, `forge-security-review`.

## Setup

No install-time settings.

## Before you install

19 script files ship inside the skills. The agent can run them on your machine. Read them first. 5 of them make network calls.

Some skill folders include test and evaluation files. Example strings in the security-review rules look like API keys on purpose, to show what the rules detect. They are not real credentials.

## Docs

- Vendor repository: https://github.com/atlassian/forge-skills

## Logo

Neutral tile with the product's initials.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.
