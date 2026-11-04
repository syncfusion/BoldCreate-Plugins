# Dynatrace

Skills that teach agents to work with Dynatrace. They are copied from the vendor's repository, [Dynatrace/dynatrace-for-ai](https://github.com/Dynatrace/dynatrace-for-ai), at commit `4f9aa71`.

Connect Claude Code to your Dynatrace environment and investigate production issues, review deployments, and check for vulnerabilities using real data pulled directly into your session: root cause

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Dynatrace**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Dynatrace**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install dynatrace@boldcreate-plugins`.

## Skills

34 skills: `dt-alerting`, `dt-app-dashboards`, `dt-app-notebooks`, `dt-dql-essentials`, `dt-js-runtime`, `dt-migration`, `dt-obs-analytics`, `dt-obs-aws`, `dt-obs-azure`, `dt-obs-compliance-assistant`, `dt-obs-ext-monitors`, `dt-obs-frontends`, `dt-obs-gcp`, `dt-obs-genai`, `dt-obs-hosts`, `dt-obs-kubernetes`, `dt-obs-log-semantic-mapping`, `dt-obs-logs`, `dt-obs-network-devices`, `dt-obs-network-flows`, `dt-obs-predictive-analytics`, `dt-obs-problems`, `dt-obs-services`, `dt-obs-tracing`, `dt-platform-costs`, `dt-sec-contextualization`, `dt-sec-insights`, `dt-sec-ioc-hunting`, `dt-sec-semantic-mapping`, `dt-setup-android`, `dt-setup-flutter`, `dt-setup-ios`, `dt-setup-oneagent`, `dt-setup-react-native`.

## Setup

No install-time settings.

## Before you install

4 script files ship inside the skills. The agent can run them on your machine. Read them first.

The skills mention these environment variables for credentials: `K8S_SECRET`, `EXPOSED_SECRET`. This plugin does not store them.

## Docs

- Vendor repository: https://github.com/Dynatrace/dynatrace-for-ai

## Logo

Dynatrace mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #1496FF, on a padded white tile. The mark is a trademark of its owner.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.
