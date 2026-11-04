# Auth0

Skills that teach agents to work with Auth0. They are copied from the vendor's repository, [auth0/agent-skills](https://github.com/auth0/agent-skills), at commit `7b3821d`.

A single unified Auth0 skill that detects your framework, feature, and tooling, then loads the right reference guides for adding authentication — login, MFA, Organizations, ACUL, custom domains,

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Auth0**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Auth0**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install auth0@boldcreate-plugins`.

## Skills

1 skill: `auth0`.

## Setup

No install-time settings.

## Before you install

6 script files ship inside the skills. The agent can run them on your machine. Read them first.

8 documents show install commands that pipe a download into a shell (`curl ... | sh`). The agent may suggest them. Read the script before you run it.

The skills mention these environment variables for credentials: `AUTH0_TOKEN`, `AUTH0_SECRET`, `JWT_SECRET`, `CLIENT_SECRET`, `ACCESS_TOKEN`, `TEST_TOKEN`, `SESSION_SECRET`, `REDIS_PASSWORD`. This plugin does not store them.

Some skill files use `${CLAUDE_PLUGIN_ROOT}` or `${CLAUDE_SKILL_DIR}`. These are Claude Code variables, so other clients may not expand them. The skill files are unchanged.

## Docs

- Vendor repository: https://github.com/auth0/agent-skills

## Logo

Auth0 mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #EB5424, on a padded white tile. The mark is a trademark of its owner.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.
