# Box

Skills and a rule that teach agents to work with Box. They are copied from the vendor's repository, [box/skills](https://github.com/box/skills), at commit `84320fd`.

Skills and guardrails for Box Platform integrations: content workflows, shared links, CLI, SDK and MCP.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Box**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Box**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install box@boldcreate-plugins`.

## Skills

- `box`, `box-cli`, `box-sdk-development`, `box-integration-best-practices`, `box-mcp`.
- Legal workflows: `box-legal-workflows`, `box-legal-workflows-intake`, `box-legal-workflows-contract`, `box-legal-workflows-ma`.

## Setup

No install-time settings.

## Before you install

The plugin includes one rule, `box.mdc`, with the setting `alwaysApply: true`. It adds Box MCP guardrails to every session, so it takes a little context all the time.

The skills assume the Box MCP server (`https://mcp.box.com`). This plugin does not include it. Add the server separately.

`box-cli` skills run the Box command-line tool on your machine.

## Docs

- Vendor repository: https://github.com/box/skills

## Logo

Box mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #0061D5, on a padded white tile. The mark is a trademark of its owner.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.
