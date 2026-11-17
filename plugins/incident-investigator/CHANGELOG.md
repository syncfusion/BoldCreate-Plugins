# Changelog

All notable changes to this plugin will be documented here.

## 0.1.0 - 2026-11-17

- First version, in preview: the `incident-investigator` skill gives a read-only first read of an alert: impact, a timeline, and up to three ranked causes with the evidence for and against each. It says "Not enough evidence" when nothing supports a cause.
- It matches the tools it sees by purpose, so it works with `pagerduty`, `datadog`, `sentry` or other vendors, and with pasted data, which it labels and treats as medium confidence at most.
- It never fixes, restarts, acknowledges, resolves or posts without your yes.
