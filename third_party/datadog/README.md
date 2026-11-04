# Datadog

Skills that teach agents to work with Datadog. They are copied from the vendor's repository, [datadog-labs/claude-code-plugin](https://github.com/datadog-labs/claude-code-plugin), at commit `195f570`.

Use Datadog directly in Claude Code through a preconfigured Datadog MCP server.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Datadog**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Datadog**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install datadog@boldcreate-plugins`.

## Skills

5 skills: `datadog-app`, `ddconfig`, `ddsetup`, `ddtoolsets`, `ddviz`.

## Setup

No install-time settings.

## Before you install

4 script files ship inside the skills. The agent can run them on your machine. Read them first.

Some skill files use `${CLAUDE_PLUGIN_ROOT}` or `${CLAUDE_SKILL_DIR}`. These are Claude Code variables, so other clients may not expand them. The skill files are unchanged.

## Docs

- Vendor repository: https://github.com/datadog-labs/claude-code-plugin

## Logo

Datadog mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #632CA6, on a padded white tile. The mark is a trademark of its owner.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`, and the vendor's attribution notice is in `NOTICE`. The skill files are unchanged from the vendor's.
