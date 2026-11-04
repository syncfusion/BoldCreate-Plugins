# Spotify Confidence

Skills that teach agents to work with Spotify Confidence. They are copied from the vendor's repository, [spotify/confidence-ai-plugins](https://github.com/spotify/confidence-ai-plugins), at commit `f416826`.

Access Confidence feature flags, experiments, and migration tools directly from Claude Code.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Spotify Confidence**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Spotify Confidence**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install confidence@boldcreate-plugins`.

## Skills

14 skills: `analyze-project`, `explore-metric`, `instrument-events`, `migrate-eppo`, `migrate-optimizely`, `migrate-posthog`, `migrate-statsig`, `onboard-confidence`, `onboard-confidence-dry-run`, `setup-warehouse`, `setup-warehouse-bigquery`, `setup-warehouse-databricks`, `setup-warehouse-redshift`, `setup-warehouse-snowflake`.

## Setup

No install-time settings.

## Before you install

16 script files ship inside the skills. The agent can run them on your machine. Read them first. 3 of them make network calls.

The skills mention these environment variables for credentials: `EPPO_API_KEY`, `CONFIDENCE_TOKEN`, `STATSIG_API_KEY`, `CLIENT_SECRET`, `DB_TOKEN`. This plugin does not store them.

`onboard-confidence/auth.py` signs you in to Confidence (`auth.confidence.dev`) and the migration skills include helper scripts for Statsig and Optimizely that call those vendors' APIs. The migration test fixtures contain sample data only.

Some migration skill files link to the vendor's `README.md` and `CHANGELOG.md`, which are not part of this plugin, so those links do not resolve. The skill files are unchanged.

## Docs

- Vendor repository: https://github.com/spotify/confidence-ai-plugins

## Logo

Logo copied from the vendor repository. The mark is a trademark of its owner.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.
