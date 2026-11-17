# Recorded incidents for scenario runs

Times are UTC. Feed one incident at a time as the tool output the agent would read. Answers are in `incidents.answers.md`.

## Incident A: regression from a known release

- PagerDuty incident PD-1001, service `checkout-api`, triggered 14:02, alert "5xx rate above 5 percent".
- PagerDuty change event CE-77: release 2.14.0 deployed 14:00, commit `a1b2c3d` "Cache cart totals".
- Sentry issue CHK-42: `NullReferenceException in CartTotals.Apply`, first seen 14:01, release 2.14.0, 312 users.
- Datadog: 5xx rate 0.3 percent until 14:00, 9.8 percent at 14:05; latency unchanged.
- Git log since 12:00: `a1b2c3d` touches `CartTotals.cs`.

## Incident B: third-party outage

- PagerDuty incident PD-2001, service `payments-api`, triggered 09:12, alert "payment failures above 20 percent".
- No change events in the last 24 hours.
- Datadog: timeouts calling `payments.vendor.example` start 09:10; internal CPU, memory and database latency normal.
- Sentry: `TimeoutException` volume up, no new issue types.
- User pasted vendor status page: "Investigating elevated errors, started 09:08."
- Git log since yesterday: `f00dbab` "Update README".

## Incident C: thin alert

- PagerDuty incident PD-3001, triggered 03:30, summary "disk space low". No service, no links, no metrics attached.
