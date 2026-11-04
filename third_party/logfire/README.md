# Pydantic Logfire

Skills that teach agents to work with Pydantic Logfire. They are copied from the vendor's repository, [pydantic/skills](https://github.com/pydantic/skills), at commit `238d971`.

Add Logfire observability to Python apps, query traces, and set up evals.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Pydantic Logfire**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Pydantic Logfire**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install logfire@boldcreate-plugins`.

## Skills

- `logfire-setup`, `logfire-instrumentation`: set up Logfire and instrument code.
- `logfire-query`, `logfire-evals`: query traces and run evals.
- Other: `logfire-gateway`, `logfire-infrastructure`, `logfire-frontend`, `logfire-ui`, `logfire-coding-agents`, `logfire-codex-connection`.

## Setup

No install-time settings.

## Before you install

The skills use the `LOGFIRE_TOKEN` and `LOGFIRE_READ_TOKEN` environment variables. These are secrets. Keep them out of source control. This plugin does not store them.

Instrumented code sends telemetry to Logfire.

## Docs

- Vendor repository: https://github.com/pydantic/skills

## Logo

Official Pydantic Logfire icon, copied from the vendor repository (`assets/logfire-icon.svg`). The mark is a trademark of its owner.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.
