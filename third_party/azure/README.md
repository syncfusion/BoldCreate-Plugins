# Azure

Skills that teach agents to work with Azure. They are copied from the vendor's repository, [microsoft/azure-skills](https://github.com/microsoft/azure-skills), at commit `5b4f0c0`.

Plan, deploy, diagnose and manage Azure resources with Azure skills.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Azure**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Azure**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install azure@boldcreate-plugins`.

## Skills

28 skills: `airunway-aks-setup`, `appinsights-instrumentation`, `azure-ai`, `azure-aigateway`, `azure-app-onboard`, `azure-app-onboard-prereq`, `azure-cloud-migrate`, `azure-compliance`, `azure-compute`, `azure-cost`, `azure-deploy`, `azure-diagnostics`, `azure-enterprise-infra-planner`, `azure-kubernetes`, `azure-kusto`, `azure-messaging`, `azure-prepare`, `azure-quotas`, `azure-reliability`, `azure-resource-lookup`, `azure-resource-visualizer`, `azure-storage`, `azure-upgrade`, `azure-validate`, `entra-agent-id`, `entra-app-registration`, `microsoft-foundry`, `python-appservice-deploy`.

## Setup

No install-time settings.

## Before you install

About 70 scripts ship inside the skills (27 PowerShell, 17 Python, 26 shell). They support deployment, diagnostics and scaffolding, and an agent can run them on your machine with your Azure credentials. Read them before you allow the agent to run any.

Two reference documents show `curl -fsSL https://aka.ms/install-azd.sh | bash` to install the Azure Developer CLI. That is text for the agent to read, but an agent could run it.

The skills assume the Azure CLI, `azd` and the vendor's Azure MCP server. The MCP server is not part of this plugin.

The plugin is large: 28 skills and about 920 files.

## Docs

- Vendor repository: https://github.com/microsoft/azure-skills

## Logo

Neutral tile with the product's initials.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.
