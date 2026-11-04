# Snowflake Cortex Code

Skills that teach agents to work with Snowflake Cortex Code. They are copied from the vendor's repository, [Snowflake-Labs/snowflake-ai-kit](https://github.com/Snowflake-Labs/snowflake-ai-kit), at commit `e2a3cbb`.

Automatically route Snowflake prompts from Claude Code to Cortex Code for execution.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Snowflake Cortex Code**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Snowflake Cortex Code**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install snowflake-cortex-code@boldcreate-plugins`.

## Skills

3 skills: `cortex-router`, `cortex-run`, `cortex-setup`.

## Setup

No install-time settings.

## Before you install

It ships no scripts. The skills are guidance for the agent.

1 document show install commands that pipe a download into a shell (`curl ... | sh`). The agent may suggest them. Read the script before you run it.

Some skill files use `${CLAUDE_PLUGIN_ROOT}` or `${CLAUDE_SKILL_DIR}`. These are Claude Code variables, so other clients may not expand them. The skill files are unchanged.

## Docs

- Vendor repository: https://github.com/Snowflake-Labs/snowflake-ai-kit

## Logo

Snowflake mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #29B5E8, on a padded white tile. The mark is a trademark of its owner.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.
