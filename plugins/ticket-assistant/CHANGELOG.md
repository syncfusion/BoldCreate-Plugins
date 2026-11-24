# Changelog

All notable changes to this plugin will be documented here.

## 0.1.0 - 2026-11-17

- First version, in preview: the `ticket-assistant` skill checks whether a ticket is ready to build. It picks the type (feature, bug, spike or chore), marks each readiness row Met, Unclear or Missing with a quote from the ticket, and gives a verdict of Ready, Not ready (with exact questions) or Split (with proposed slices). It writes a short brief for a ready ticket.
- It changes the tracker only after you confirm the exact text. It works with the `atlassian` and `linear` plugins, or with pasted ticket text.
- It cites its sources and says "unknown" instead of guessing.
