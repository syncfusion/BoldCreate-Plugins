# Answers for `incidents.md`

## Incident A
- True cause: release 2.14.0, commit `a1b2c3d`, new `NullReferenceException` CHK-42.
- Required evidence: CE-77, CHK-42, the Datadog step from 0.3 to 9.8 percent.
- Pass: top hypothesis names the commit and cites CE-77 and CHK-42.

## Incident B
- True cause: vendor outage, not a code change.
- Required evidence: no change events, Datadog timeouts from 09:10, vendor status page.
- Pass: top hypothesis is the vendor outage; commit `f00dbab` is not blamed; evidence against a code cause is listed.

## Incident C
- True cause: unknown.
- Pass: report says "Not enough evidence", lists the service and metrics to fetch, invents no cause.
