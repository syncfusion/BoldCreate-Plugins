# Apollo GraphQL Skills

Skills that teach agents to work with Apollo GraphQL Skills. They are copied from the vendor's repository, [apollographql/skills](https://github.com/apollographql/skills), at commit `c288eb8`.

Build with Apollo GraphQL: Client, Server, Router, Federation, Connectors, Rover, iOS and Kotlin.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Apollo GraphQL Skills**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Apollo GraphQL Skills**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install apollo-skills@boldcreate-plugins`.

## Skills

- Client and server: `apollo-client`, `apollo-server`, `apollo-ios`, `apollo-kotlin`.
- Graph infrastructure: `apollo-router`, `apollo-router-plugin-creator`, `apollo-federation`, `apollo-connectors`, `apollo-mcp-server`, `rover`.
- GraphQL design: `graphql-schema`, `graphql-operations`.
- Other: `rust-best-practices`, `skill-creator`.

## Setup

No install-time settings.

## Before you install

Three skill scripts (`list-apollo-ios-versions.sh` and two Kotlin ones) run `git ls-remote --tags` against Apollo's public GitHub repositories to list release versions. They only read.

The skills refer to the `APOLLO_KEY` and `APOLLO_GRAPH_REF` environment variables for Apollo GraphOS. This plugin does not store them.

This plugin is about Apollo GraphQL. It is separate from the `apollo` plugin, which connects to Apollo.io sales data.

## Docs

- Vendor repository: https://github.com/apollographql/skills

## Logo

Apollo GraphQL mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #311C87, on a padded white tile. The mark is a trademark of its owner.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.
