# ActiveCampaign

Skills and agents that teach agents to work with ActiveCampaign. They are copied from the vendor's repository, [ActiveCampaign/activecampaign-plugin](https://github.com/ActiveCampaign/activecampaign-plugin), at commit `0ff8587`.

Marketing automation, CRM and email marketing workflows for ActiveCampaign.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **ActiveCampaign**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **ActiveCampaign**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install activecampaign@boldcreate-plugins`.

## Skills

6 skills: `automation-builder`, `campaign-strategist`, `contact-operations`, `deals-crm`, `deliverability-advisor`, `reporting-analyst`.

## Setup

No install-time settings.

## Before you install

The plugin has two agents, `data-operations` and `marketing-planner`. It ships no scripts.

The skills use ActiveCampaign tools from the vendor's MCP server. The vendor's `.mcp.json` points at an address that depends on your account, so it is not included. Add the ActiveCampaign MCP server yourself before you use the skills.

## Docs

- Vendor repository: https://github.com/ActiveCampaign/activecampaign-plugin

## Logo

Neutral tile with the product's initials.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.
