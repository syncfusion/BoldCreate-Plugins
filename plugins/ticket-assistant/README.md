# Ticket Assistant

Checks whether one Jira or Linear ticket is ready to build. It marks outcome, acceptance criteria, scope, dependencies, size and open questions, then gives a verdict: Ready, Not ready (with exact questions) or Split (with proposed slices). For a ready ticket it writes a short implementation brief.

It reads first. A comment, label, status change or new ticket is written only after you confirm the exact text. It never reassigns, closes or reprioritises.

## What it contains

One skill, `ticket-assistant`. No MCP server, no rules and no agents; it uses the tracker plugin you have installed.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Ticket Assistant**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Ticket Assistant**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install ticket-assistant@boldcreate-plugins`.

## Required plugins

Install one tracker plugin from the same marketplace. Without one, the skill asks you to paste the ticket text and cannot update the tracker.

| Plugin | Tracker |
|:--|:--|
| `atlassian` | Jira |
| `linear` | Linear |

## Use

Give a ticket key or link, or paste the ticket, and ask whether it is ready. The skill starts by itself when you pick up a ticket. The reply has: Verdict, Readiness, Questions, Brief (when Ready) and Proposed tracker update.

## Limits

- It judges only what the ticket and its comments say. It does not know your codebase.
- It does not implement the ticket. Give the brief to your build workflow.
- Behaviour depends on the host and model; check the quotes it cites.

## Tests

`tests/scenarios/ticket-assistant.md` holds the scenarios and `tests/fixtures/` the sample tickets with their expected verdicts.
