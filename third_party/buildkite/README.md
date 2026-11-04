# Buildkite

Skills that teach agents to work with Buildkite. They are copied from the vendor's repository, [buildkite/skills](https://github.com/buildkite/skills), at commit `d29b846`.

Work with Buildkite pipelines, builds, the CLI and the REST API, and migrate from other CI systems.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Buildkite**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Buildkite**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install buildkite@boldcreate-plugins`.

## Skills

- `buildkite-pipelines`, `buildkite-agent-runtime`, `buildkite-cache`: write and tune pipelines.
- `buildkite-cli`, `buildkite-api`: use the `bk` command-line tool and the REST API.
- `buildkite-migration`, `buildkite-preflight`: move from other CI systems and check pipelines before a run.

## Setup

No install-time settings.

## Before you install

The skills drive the `bk` command-line tool (`bk build`, `bk job`, `bk auth` and others). Install and sign in to it yourself. This plugin does not store a Buildkite token.

The plugin ships no scripts.

## Docs

- Vendor repository: https://github.com/buildkite/skills

## Logo

Buildkite mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #14CC80, on a padded white tile. The mark is a trademark of its owner.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.
