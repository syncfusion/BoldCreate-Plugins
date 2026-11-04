# CrowdSec

Skills that teach agents to work with CrowdSec. The skills are copied from the vendor's repository, [crowdsecurity/crowdsec-skill](https://github.com/crowdsecurity/crowdsec-skill), at commit `9bca8a7`.

Install, configure, operate, and debug CrowdSec, and use the CrowdSec Console Service API.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **CrowdSec**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **CrowdSec**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install crowdsec@boldcreate-plugins`.

## Skills

- `crowdsec`: install, configure, operate and debug the CrowdSec engine, `cscli`, bouncers, WAF and bot detection on bare metal, Docker and Kubernetes.
- `crowdsec-service-api`: drive the CrowdSec Console Service API for blocklists, allowlists, firewall integrations, metrics and decisions.

## Setup

No install-time settings.

## Before you install

The `crowdsec` skill includes two scripts, `scripts/diagnose.sh` and `scripts/check-verification.py`. The agent can run them on your machine.

`diagnose.sh` runs `cscli support dump`, can use `sudo -n`, `docker exec` and `kubectl exec`, and writes a support archive under `/tmp`. Read it before you allow the agent to run it.

## Docs

- Vendor repository: https://github.com/crowdsecurity/crowdsec-skill

## Logo

Neutral tile with the product's initials.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.
