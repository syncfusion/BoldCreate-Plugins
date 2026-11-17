# Incident Investigator

Gives an on-call engineer an evidence-based first read of an alert: impact, a timeline, up to three ranked causes with the evidence for and against each, and what to check next.

It is read-only. It does not fix, restart, roll back, acknowledge, resolve or post anything. Any write needs your yes, and a code fix is a separate task you start.

## What it contains

One skill, `incident-investigator`. No MCP server, no rules and no agents; it uses the integration plugins you have installed.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Incident Investigator**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Incident Investigator**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install incident-investigator@boldcreate-plugins`.

## Works with

Install any of these from the same marketplace so the skill can read the data itself. Without them, paste the alert, logs or event data; the skill labels it "pasted" and keeps its confidence at medium or lower.

| Plugin | Gives the skill |
|:--|:--|
| `pagerduty` | Incident, alerts, change events |
| `datadog` | Monitors, metrics, logs, traces |
| `sentry` | Issues, events, releases |

Optional: `slack` or `google-chat`, to read an incident thread you name.

## Use

Describe the alert or paste its link or ID, and ask for the cause. The skill starts by itself when you ask about an alert or incident. The reply has these sections: Impact, Timeline, Hypotheses, Next checks, Proposed fix (optional) and Not available.

When the evidence does not support a cause, the reply says "Not enough evidence" and lists what to fetch. Treat a ranked hypothesis as a lead to check, not a conclusion.

## Limits

- It reads only what the installed plugins can read. It does not watch alert channels or start by itself.
- Behaviour depends on the host and model. Check the evidence IDs it cites.

## Tests

`tests/scenarios/incident-investigator.md` holds the scenarios and `tests/fixtures/` the recorded incidents with their answers.
