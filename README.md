# Syncfusion BoldCreate Plugins

Syncfusion's BoldCreate plugins for BoldCreate Connect, Cursor and Claude Code. The repository holds three kinds of plugin, each in its own directory with its own manifests:

- **Syncfusion plugins** at the repository root, made of skills, agents and rules. `boldcreate-toolkit/` gives agents one software delivery lifecycle on any stack.
- **Syncfusion skill packs** under `syncfusion/`, one plugin per platform. Each is copied from Syncfusion's skill repository for that platform and teaches agents to build with Syncfusion components.
- **MCP plugins** under `third_party/`. Each connects agents to a vendor's remote [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.
- **Community skill plugins** under `third_party/`. Each is a vendor's skills, copied as published, with the source commit recorded in `boldcreate.json`.

## Install

- **BoldCreate Connect:** open **Marketplace**, find the plugin, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install the plugin.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install <name>@boldcreate-plugins`.

Secrets such as API keys are never stored in this repository. Each MCP plugin declares them as install-time variables, and you enter them when you install it. See each plugin's README for setup.

## Syncfusion plugins

| `name` | Plugin | Category | `description` (from marketplace) |
|:-------|:-------|:---------|:-------------------------------------|
| `boldcreate-toolkit` | [BoldCreate Toolkit](boldcreate-toolkit/) | Developer Tools | Skills, reviewer agents and rules that take any project from idea to release: specs, test-first builds, two-axis code review and pull requests. |

## Syncfusion skill packs

The platform and SDK skill packs listed on [ai.syncfusion.com](https://ai.syncfusion.com/): UI component packs in `syncfusion/component-skills/`, document SDK packs in `syncfusion/sdk-skills/`, and the Xamarin migration pack in `syncfusion/migration-skills/`. Each pack keeps its skills as published in its source repository, except that links pointing outside a skill's own folder are removed; the `upstream` entry in `boldcreate.json` records the commit.

| `name` | Plugin | Skills | Source |
|:-------|:-------|-------:|:-------|
| `syncfusion-angular` | [Syncfusion Angular UI Components](syncfusion/component-skills/angular/) | 65 | [syncfusion/angular-ui-components-skills](https://github.com/syncfusion/angular-ui-components-skills) |
| `syncfusion-aspnet-core` | [Syncfusion ASP.NET Core UI Controls](syncfusion/component-skills/aspnet-core/) | 66 | [syncfusion/aspnetcore-ui-components-skills](https://github.com/syncfusion/aspnetcore-ui-components-skills) |
| `syncfusion-aspnet-mvc` | [Syncfusion ASP.NET MVC UI Controls](syncfusion/component-skills/aspnet-mvc/) | 38 | [syncfusion/aspnetmvc-ui-components-skills](https://github.com/syncfusion/aspnetmvc-ui-components-skills) |
| `syncfusion-blazor` | [Syncfusion Blazor Components](syncfusion/component-skills/blazor/) | 69 | [syncfusion/blazor-ui-components-skills](https://github.com/syncfusion/blazor-ui-components-skills) |
| `syncfusion-flutter` | [Syncfusion Flutter Widgets](syncfusion/component-skills/flutter/) | 14 | [syncfusion/flutter-ui-components-skills](https://github.com/syncfusion/flutter-ui-components-skills) |
| `syncfusion-javascript` | [Syncfusion JavaScript UI Controls](syncfusion/component-skills/javascript/) | 67 | [syncfusion/javascript-ui-controls-skills](https://github.com/syncfusion/javascript-ui-controls-skills) |
| `syncfusion-maui` | [Syncfusion .NET MAUI Controls](syncfusion/component-skills/maui/) | 81 | [syncfusion/maui-ui-components-skills](https://github.com/syncfusion/maui-ui-components-skills) |
| `syncfusion-maui-toolkit` | [Syncfusion Toolkit for .NET MAUI](syncfusion/component-skills/maui-toolkit/) | 36 | [syncfusion/maui-toolkit-ui-components-skills](https://github.com/syncfusion/maui-toolkit-ui-components-skills) |
| `syncfusion-react` | [Syncfusion React UI Components](syncfusion/component-skills/react/) | 65 | [syncfusion/react-ui-components-skills](https://github.com/syncfusion/react-ui-components-skills) |
| `syncfusion-vue` | [Syncfusion Vue UI Components](syncfusion/component-skills/vue/) | 49 | [syncfusion/vue-ui-components-skills](https://github.com/syncfusion/vue-ui-components-skills) |
| `syncfusion-winforms` | [Syncfusion WinForms Controls](syncfusion/component-skills/winforms/) | 113 | [syncfusion/winforms-ui-components-skills](https://github.com/syncfusion/winforms-ui-components-skills) |
| `syncfusion-winui` | [Syncfusion WinUI Controls](syncfusion/component-skills/winui/) | 39 | [syncfusion/winui-ui-components-skills](https://github.com/syncfusion/winui-ui-components-skills) |
| `syncfusion-wpf` | [Syncfusion WPF Controls](syncfusion/component-skills/wpf/) | 96 | [syncfusion/wpf-ui-components-skills](https://github.com/syncfusion/wpf-ui-components-skills) |
| `syncfusion-document-sdk` | [Syncfusion Document SDK](syncfusion/sdk-skills/document-sdk/) | 16 | [syncfusion/document-sdk-skills](https://github.com/syncfusion/document-sdk-skills) |
| `syncfusion-docx-editor-sdk` | [Syncfusion DOCX Editor SDK](syncfusion/sdk-skills/docx-editor-sdk/) | 9 | [syncfusion/docx-editor-sdk-skills](https://github.com/syncfusion/docx-editor-sdk-skills) |
| `syncfusion-pdf-viewer-sdk` | [Syncfusion PDF Viewer SDK](syncfusion/sdk-skills/pdf-viewer-sdk/) | 13 | [syncfusion/pdf-viewer-sdk-skills](https://github.com/syncfusion/pdf-viewer-sdk-skills) |
| `syncfusion-spreadsheet-editor-sdk` | [Syncfusion Spreadsheet Editor SDK](syncfusion/sdk-skills/spreadsheet-editor-sdk/) | 10 | [syncfusion/spreadsheet-editor-sdk-skills](https://github.com/syncfusion/spreadsheet-editor-sdk-skills) |
| `syncfusion-xamarin-to-maui` | [Syncfusion Xamarin to .NET MAUI Migration](syncfusion/migration-skills/xamarin-to-maui/) | 4 | [syncfusion/xamarin-maui-migration-skills](https://github.com/syncfusion/xamarin-maui-migration-skills) |

## MCP plugins

| `name` | Plugin | Category | `description` (from marketplace) |
|:-------|:-------|:---------|:-------------------------------------|
| `amplitude` | [Amplitude](third_party/amplitude/) | Analytics | Query Amplitude product analytics, charts, and experiments. |
| `android-management` | [Android Management](third_party/android-management/) | Devices | Manage enterprise Android devices, policies, and apps with the Android Management API. |
| `apollo` | [Apollo](third_party/apollo/) | Productivity | Search and enrich contacts and accounts in Apollo.io. |
| `atlassian` | [Atlassian (Jira + Confluence)](third_party/atlassian/) | Project Management | Search and update Jira issues and Confluence pages. |
| `aws-knowledge` | [AWS Knowledge](third_party/aws-knowledge/) | Documentation | Search AWS documentation, API references, and regional availability. |
| `context7` | [Context7](third_party/context7/) | Documentation | Pull up-to-date, version-specific library docs and code examples into the prompt. |
| `deepwiki` | [DeepWiki](third_party/deepwiki/) | Documentation | Ask questions about any public GitHub repository and read its generated wiki. |
| `exa` | [Exa](third_party/exa/) | Search | Search the web and fetch page content with Exa. |
| `figma` | [Figma](third_party/figma/) | Design | Turn Figma frames into code and read design tokens, components, and variables. |
| `firecrawl` | [Firecrawl](third_party/firecrawl/) | Search | Search the web, read pages, and research documentation with Firecrawl. |
| `gitea` | [Gitea](third_party/gitea/) | Source Control | Work with Gitea repositories, issues, pull requests, and releases through your own gitea-mcp server. |
| `github` | [GitHub](third_party/github/) | Source Control | Manage repos, issues, pull requests, and Actions. |
| `gitlab` | [GitLab](third_party/gitlab/) | Source Control | Work with GitLab projects, issues, merge requests, pipelines, and code search. |
| `gmail` | [Gmail](third_party/gmail/) | Productivity | Search, read, and draft Gmail messages and threads. |
| `google-calendar` | [Google Calendar](third_party/google-calendar/) | Productivity | List calendars, read events, and check free/busy time. |
| `google-chat` | [Google Chat](third_party/google-chat/) | Productivity | Read Google Chat spaces and messages, and post messages. |
| `google-cloud-agent-platform` | [Gemini Enterprise Agent Platform (Vertex AI)](third_party/google-cloud-agent-platform/) | AI | Generate content, run predictions, and manage models, endpoints, tuning, and evaluation on Vertex AI. |
| `google-cloud-bigquery` | [Google Cloud BigQuery](third_party/google-cloud-bigquery/) | Database | Explore datasets and tables and run SQL queries. |
| `google-cloud-cli` | [Google Cloud CLI](third_party/google-cloud-cli/) | Cloud | Run gcloud commands through Google's hosted Cloud CLI server. |
| `google-cloud-firestore` | [Google Cloud Firestore](third_party/google-cloud-firestore/) | Database | Read and write Firestore documents and collections. |
| `google-cloud-iam` | [Google Cloud IAM](third_party/google-cloud-iam/) | Security | Review IAM roles, policies, and service accounts. |
| `google-cloud-resource-manager` | [Google Cloud Resource Manager](third_party/google-cloud-resource-manager/) | Cloud | Browse Google Cloud organizations, folders, and projects. |
| `google-cloud-run` | [Google Cloud Run](third_party/google-cloud-run/) | Hosting | Deploy and manage Cloud Run services and jobs. |
| `google-cloud-sql` | [Google Cloud SQL](third_party/google-cloud-sql/) | Database | Manage Cloud SQL for MySQL, PostgreSQL, and SQL Server instances and run queries. |
| `google-cloud-storage` | [Google Cloud Storage](third_party/google-cloud-storage/) | Storage | List, read, and manage Cloud Storage buckets and objects. |
| `google-compute-engine` | [Google Compute Engine](third_party/google-compute-engine/) | Hosting | Manage Compute Engine VMs, disks, and networks. |
| `google-contacts` | [Google Contacts](third_party/google-contacts/) | Productivity | Look up contacts and people in your Google Workspace directory. |
| `google-design` | [Google Design](third_party/google-design/) | Design | Get Google design guidance and assets, such as Material Design, while you build UI. |
| `google-developer-knowledge` | [Google Developer Knowledge](third_party/google-developer-knowledge/) | Documentation | Search official Google developer documentation for Android, Firebase, Google Cloud, and Maps. |
| `google-docs` | [Google Docs](third_party/google-docs/) | Productivity | Read, create, and edit Google Docs. |
| `google-drive` | [Google Drive](third_party/google-drive/) | Productivity | Search, read, and create files in Google Drive. |
| `google-gemini-cloud-assist` | [Gemini Cloud Assist](third_party/google-gemini-cloud-assist/) | AI | Ask Gemini Cloud Assist to design, troubleshoot, and optimize Google Cloud resources. |
| `google-kubernetes-engine` | [Google Kubernetes Engine](third_party/google-kubernetes-engine/) | Hosting | Inspect and manage GKE clusters and workloads. |
| `google-maps-code-assist` | [Google Maps Code Assist](third_party/google-maps-code-assist/) | Documentation | Get up-to-date Google Maps Platform docs and code samples while you write Maps code. |
| `google-maps-grounding-lite` | [Google Maps Grounding Lite](third_party/google-maps-grounding-lite/) | Data | Ground agents in Google Maps data: places, routes, and weather. |
| `google-sheets` | [Google Sheets](third_party/google-sheets/) | Productivity | Read, create, and update Google Sheets spreadsheets. |
| `google-slides` | [Google Slides](third_party/google-slides/) | Productivity | Read, create, and edit Google Slides presentations. |
| `google-stitch` | [Stitch](third_party/google-stitch/) | Design | Generate UI designs and front-end code with Google Stitch. |
| `google-workspace-search` | [Google Workspace Search](third_party/google-workspace-search/) | Productivity | Search across Gmail, Drive, Calendar, and other Google Workspace content in one place. |
| `govtribe` | [GovTribe](third_party/govtribe/) | Productivity | Search US government contract opportunities and awards in GovTribe. |
| `hunter` | [Hunter](third_party/hunter/) | Productivity | Find and verify professional email addresses with Hunter. |
| `incident-io` | [incident.io](third_party/incident-io/) | Observability | Look up and manage incidents in incident.io. |
| `intercom` | [Intercom](third_party/intercom/) | Productivity | Search Intercom conversations, contacts, and help center articles. |
| `leadfeeder` | [Leadfeeder](third_party/leadfeeder/) | Productivity | Look up companies that visit your website with Leadfeeder. |
| `linear` | [Linear](third_party/linear/) | Project Management | Find, create, and update Linear issues, projects, and cycles. |
| `microsoft-learn` | [Microsoft Learn](third_party/microsoft-learn/) | Documentation | Search official Microsoft docs and code samples for .NET, Azure, MAUI, and more. |
| `mintlify` | [Mintlify](third_party/mintlify/) | Documentation | Search Mintlify documentation and manage your docs site. |
| `monday` | [monday.com](third_party/monday/) | Project Management | Manage monday.com boards, items, and workspaces. |
| `neon` | [Neon](third_party/neon/) | Database | Manage Neon serverless Postgres projects, branches, queries, and migrations. |
| `notion` | [Notion](third_party/notion/) | Documentation | Search, read, and update Notion pages and databases. |
| `pagerduty` | [PagerDuty](third_party/pagerduty/) | Observability | Browse PagerDuty services, incidents, and change events. |
| `posthog` | [PostHog](third_party/posthog/) | Analytics | Query product analytics, manage feature flags, and investigate errors in PostHog. |
| `render` | [Render](third_party/render/) | Hosting | Inspect Render services, deploys, and logs. |
| `sentry` | [Sentry](third_party/sentry/) | Observability | Investigate Sentry errors, stack traces, and issues for a project. |
| `slack` | [Slack](third_party/slack/) | Productivity | Search Slack messages, read channels and threads, and find context from your workspace. |
| `stripe` | [Stripe](third_party/stripe/) | Payments | Work with Stripe customers, payments, subscriptions, and search Stripe docs. |
| `supabase` | [Supabase](third_party/supabase/) | Database | Query Postgres, manage tables, auth, storage, and edge functions in a Supabase project. |
| `tavily` | [Tavily](third_party/tavily/) | Search | Search the web and extract page content with Tavily. |
| `vanta` | [Vanta](third_party/vanta/) | Security | Review Vanta compliance tests, controls, vendors, and vulnerabilities. |
| `vercel` | [Vercel](third_party/vercel/) | Hosting | Inspect Vercel projects, deployments, and build logs, and search Vercel docs. |
| `zapier` | [Zapier](third_party/zapier/) | Productivity | Run Zapier actions across the apps connected to your Zapier account. |
| `zoominfo` | [ZoomInfo](third_party/zoominfo/) | Productivity | Search ZoomInfo companies and contacts. |

## Community skill plugins

Skills copied from a vendor's own repository at a pinned commit. The vendor's files are unchanged, and `boldcreate.json` records the repository, commit and licence. Each plugin keeps the vendor's own licence (MIT or Apache-2.0), shown in the table, and carries the vendor's `LICENSE` file and any `NOTICE` file. The manifest names the same licence.

| `name` | Plugin | Skills | Source | License |
|:-------|:-------|-------:|:-------|:--------|
| `activecampaign` | [ActiveCampaign](third_party/activecampaign/) | 6 | [ActiveCampaign/activecampaign-plugin](https://github.com/ActiveCampaign/activecampaign-plugin) | MIT |
| `adobe-for-creativity` | [Adobe for Creativity](third_party/adobe-for-creativity/) | 15 | [adobe/skills](https://github.com/adobe/skills) | Apache-2.0 |
| `ai-plugins` | [Endor Labs](third_party/ai-plugins/) | 1 | [endorlabs/ai-plugins](https://github.com/endorlabs/ai-plugins) | MIT |
| `airwallex-agentos` | [Airwallex AgentOS](third_party/airwallex-agentos/) | 5 | [airwallex/airwallex-marketplace](https://github.com/airwallex/airwallex-marketplace) | Apache-2.0 |
| `airwallex-dev` | [Airwallex Dev](third_party/airwallex-dev/) | 6 | [airwallex/airwallex-marketplace](https://github.com/airwallex/airwallex-marketplace) | Apache-2.0 |
| `alloydb-omni` | [AlloyDB Omni](third_party/alloydb-omni/) | 2 | [gemini-cli-extensions/alloydb-omni](https://github.com/gemini-cli-extensions/alloydb-omni) | Apache-2.0 |
| `amazon-location-service` | [Amazon Location Service](third_party/amazon-location-service/) | 1 | [awslabs/agent-plugins](https://github.com/awslabs/agent-plugins) | Apache-2.0 |
| `amd-skills` | [AMD Skills](third_party/amd-skills/) | 8 | [amd/skills](https://github.com/amd/skills) | MIT |
| `apollo-skills` | [Apollo GraphQL Skills](third_party/apollo-skills/) | 14 | [apollographql/skills](https://github.com/apollographql/skills) | MIT |
| `astronomer-data-agents` | [Astronomer Data Agents](third_party/astronomer-data-agents/) | 34 | [astronomer/agents](https://github.com/astronomer/agents) | Apache-2.0 |
| `atlassian-twg-cli` | [Atlassian Teamwork Graph CLI](third_party/atlassian-twg-cli/) | 1 | [atlassian-labs/twg-plugins](https://github.com/atlassian-labs/twg-plugins) | Apache-2.0 |
| `atomic-agents` | [Atomic Agents](third_party/atomic-agents/) | 7 | [BrainBlend-AI/atomic-agents](https://github.com/BrainBlend-AI/atomic-agents) | MIT |
| `auth0` | [Auth0](third_party/auth0/) | 1 | [auth0/agent-skills](https://github.com/auth0/agent-skills) | Apache-2.0 |
| `aws-agents` | [AWS Agents](third_party/aws-agents/) | 8 | [aws/agent-toolkit-for-aws](https://github.com/aws/agent-toolkit-for-aws) | Apache-2.0 |
| `aws-amplify` | [AWS Amplify](third_party/aws-amplify/) | 1 | [awslabs/agent-plugins](https://github.com/awslabs/agent-plugins) | Apache-2.0 |
| `aws-core` | [AWS Core](third_party/aws-core/) | 25 | [aws/agent-toolkit-for-aws](https://github.com/aws/agent-toolkit-for-aws) | Apache-2.0 |
| `aws-data-analytics` | [AWS Data Analytics](third_party/aws-data-analytics/) | 13 | [aws/agent-toolkit-for-aws](https://github.com/aws/agent-toolkit-for-aws) | Apache-2.0 |
| `aws-serverless` | [AWS Serverless](third_party/aws-serverless/) | 7 | [awslabs/agent-plugins](https://github.com/awslabs/agent-plugins) | Apache-2.0 |
| `aws-transform` | [AWS Transform](third_party/aws-transform/) | 1 | [awslabs/agent-plugins](https://github.com/awslabs/agent-plugins) | Apache-2.0 |
| `azure` | [Azure](third_party/azure/) | 28 | [microsoft/azure-skills](https://github.com/microsoft/azure-skills) | MIT |
| `azure-cosmos-db-assistant` | [Azure Cosmos DB Assistant](third_party/azure-cosmos-db-assistant/) | 1 | [AzureCosmosDB/cosmosdb-claude-code-plugin](https://github.com/AzureCosmosDB/cosmosdb-claude-code-plugin) | MIT |
| `azure-sql-developer` | [Azure SQL Developer](third_party/azure-sql-developer/) | 17 | [microsoft/azure-sql-database-container](https://github.com/microsoft/azure-sql-database-container) | MIT |
| `bigquery-data-analytics` | [BigQuery Data Analytics](third_party/bigquery-data-analytics/) | 1 | [gemini-cli-extensions/bigquery-data-analytics](https://github.com/gemini-cli-extensions/bigquery-data-analytics) | Apache-2.0 |
| `blackrock-advisor-center-plugin` | [BlackRock Advisor Center](third_party/blackrock-advisor-center-plugin/) | 6 | [blackrock/advisor-center-agent-skills](https://github.com/blackrock/advisor-center-agent-skills) | Apache-2.0 |
| `boltz` | [Boltz](third_party/boltz/) | 8 | [boltz-bio/boltz-api-skills](https://github.com/boltz-bio/boltz-api-skills) | MIT |
| `box` | [Box](third_party/box/) | 9 | [box/skills](https://github.com/box/skills) | MIT |
| `buildkite` | [Buildkite](third_party/buildkite/) | 7 | [buildkite/skills](https://github.com/buildkite/skills) | MIT |
| `carta-crm` | [Carta CRM](third_party/carta-crm/) | 26 | [carta/plugins](https://github.com/carta/plugins) | Apache-2.0 |
| `catalyst-by-zoho` | [Catalyst by Zoho](third_party/catalyst-by-zoho/) | 16 | [catalystbyzoho/claude-plugin](https://github.com/catalystbyzoho/claude-plugin) | Apache-2.0 |
| `chrome-devtools-mcp` | [Chrome DevTools](third_party/chrome-devtools-mcp/) | 7 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Apache-2.0 |
| `chronograph-gp` | [Chronograph GP](third_party/chronograph-gp/) | 5 | [chronograph-pe/chronograph-gp-claude-plugin](https://github.com/chronograph-pe/chronograph-gp-claude-plugin) | Apache-2.0 |
| `chronograph-lp` | [Chronograph LP](third_party/chronograph-lp/) | 4 | [chronograph-pe/chronograph-lp-claude-plugin](https://github.com/chronograph-pe/chronograph-lp-claude-plugin) | Apache-2.0 |
| `ckeditor` | [CKEditor](third_party/ckeditor/) | 1 | [ckeditor/skills](https://github.com/ckeditor/skills) | MIT |
| `cloudflare` | [Cloudflare](third_party/cloudflare/) | 14 | [cloudflare/skills](https://github.com/cloudflare/skills) | Apache-2.0 |
| `crowdsec` | [CrowdSec](third_party/crowdsec/) | 2 | [crowdsecurity/crowdsec-skill](https://github.com/crowdsecurity/crowdsec-skill) | MIT |
| `crowdstrike-falcon-foundry` | [CrowdStrike Falcon Foundry](third_party/crowdstrike-falcon-foundry/) | 12 | [CrowdStrike/foundry-skills](https://github.com/CrowdStrike/foundry-skills) | MIT |
| `databases-on-aws` | [Databases on AWS](third_party/databases-on-aws/) | 1 | [awslabs/agent-plugins](https://github.com/awslabs/agent-plugins) | Apache-2.0 |
| `datadog` | [Datadog](third_party/datadog/) | 5 | [datadog-labs/claude-code-plugin](https://github.com/datadog-labs/claude-code-plugin) | Apache-2.0 |
| `dataverse` | [Microsoft Dataverse](third_party/dataverse/) | 9 | [microsoft/Dataverse-skills](https://github.com/microsoft/Dataverse-skills) | MIT |
| `deepeval` | [DeepEval](third_party/deepeval/) | 3 | [confident-ai/deepeval](https://github.com/confident-ai/deepeval) | Apache-2.0 |
| `deploy-on-aws` | [Deploy on AWS](third_party/deploy-on-aws/) | 3 | [awslabs/agent-plugins](https://github.com/awslabs/agent-plugins) | Apache-2.0 |
| `desktop-commander` | [Desktop Commander](third_party/desktop-commander/) | 6 | [wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP) | MIT |
| `duckdb-skills` | [DuckDB Skills](third_party/duckdb-skills/) | 9 | [duckdb/duckdb-skills](https://github.com/duckdb/duckdb-skills) | MIT |
| `duende-skills` | [Duende Skills](third_party/duende-skills/) | 24 | [DuendeSoftware/duende-skills](https://github.com/DuendeSoftware/duende-skills) | MIT |
| `dynatrace` | [Dynatrace](third_party/dynatrace/) | 34 | [Dynatrace/dynatrace-for-ai](https://github.com/Dynatrace/dynatrace-for-ai) | Apache-2.0 |
| `expo` | [Expo](third_party/expo/) | 24 | [expo/skills](https://github.com/expo/skills) | MIT |
| `fastly-agent-toolkit` | [Fastly Agent Toolkit](third_party/fastly-agent-toolkit/) | 10 | [fastly/fastly-agent-toolkit](https://github.com/fastly/fastly-agent-toolkit) | MIT |
| `fiftyone` | [FiftyOne](third_party/fiftyone/) | 18 | [voxel51/fiftyone-skills](https://github.com/voxel51/fiftyone-skills) | Apache-2.0 |
| `gc-ai` | [GC AI](third_party/gc-ai/) | 3 | [GC-AI-Inc/gc-ai-claude-plugin](https://github.com/GC-AI-Inc/gc-ai-claude-plugin) | MIT |
| `grafana-assistant` | [Grafana Assistant](third_party/grafana-assistant/) | 1 | [grafana/ai-marketplace](https://github.com/grafana/ai-marketplace) | Apache-2.0 |
| `grafana-cloud-mcp` | [Grafana Cloud](third_party/grafana-cloud-mcp/) | 1 | [grafana/ai-marketplace](https://github.com/grafana/ai-marketplace) | Apache-2.0 |
| `grafana-mcp` | [Grafana](third_party/grafana-mcp/) | 1 | [grafana/ai-marketplace](https://github.com/grafana/ai-marketplace) | Apache-2.0 |
| `growthbook` | [GrowthBook](third_party/growthbook/) | 4 | [growthbook/skills](https://github.com/growthbook/skills) | MIT |
| `honeycomb` | [Honeycomb](third_party/honeycomb/) | 11 | [honeycombio/agent-skill](https://github.com/honeycombio/agent-skill) | MIT |
| `idmp-plugin` | [TDengine IDMP](third_party/idmp-plugin/) | 23 | [taosdata/agent-skills](https://github.com/taosdata/agent-skills) | MIT |
| `informatica-for-claude-platform` | [Informatica](third_party/informatica-for-claude-platform/) | 1 | [forcedotcom/informatica-claude-plugins](https://github.com/forcedotcom/informatica-claude-plugins) | Apache-2.0 |
| `langfuse` | [Langfuse](third_party/langfuse/) | 2 | [langfuse/skills](https://github.com/langfuse/skills) | MIT |
| `logfire` | [Pydantic Logfire](third_party/logfire/) | 6 | [pydantic/skills](https://github.com/pydantic/skills) | MIT |
| `lumen` | [Lumen](third_party/lumen/) | 2 | [ory/lumen](https://github.com/ory/lumen) | Apache-2.0 |
| `lusha` | [Lusha](third_party/lusha/) | 6 | [lusha-oss/lusha-mcp-plugin](https://github.com/lusha-oss/lusha-mcp-plugin) | MIT |
| `mapbox` | [Mapbox](third_party/mapbox/) | 20 | [mapbox/mapbox-agent-skills](https://github.com/mapbox/mapbox-agent-skills) | MIT |
| `mercadopago` | [Mercado Pago](third_party/mercadopago/) | 4 | [mercadopago/mercadopago-claude-marketplace](https://github.com/mercadopago/mercadopago-claude-marketplace) | Apache-2.0 |
| `mongodb` | [MongoDB](third_party/mongodb/) | 8 | [mongodb/agent-skills](https://github.com/mongodb/agent-skills) | Apache-2.0 |
| `netlify-skills` | [Netlify](third_party/netlify-skills/) | 15 | [netlify/context-and-tools](https://github.com/netlify/context-and-tools) | MIT |
| `noibu` | [Noibu](third_party/noibu/) | 8 | [Noibu/ai-plugin](https://github.com/Noibu/ai-plugin) | MIT |
| `outputai` | [Output.ai](third_party/outputai/) | 51 | [growthxai/output](https://github.com/growthxai/output) | Apache-2.0 |
| `pendo-analytics` | [Pendo Analytics](third_party/pendo-analytics/) | 6 | [pendo-io/claude-pendo-plugin](https://github.com/pendo-io/claude-pendo-plugin) | MIT |
| `pendo-guides` | [Pendo Guides](third_party/pendo-guides/) | 1 | [pendo-io/claude-pendo-plugin](https://github.com/pendo-io/claude-pendo-plugin) | MIT |
| `pendo-orchestrate` | [Pendo Orchestrate](third_party/pendo-orchestrate/) | 1 | [pendo-io/claude-pendo-plugin](https://github.com/pendo-io/claude-pendo-plugin) | MIT |
| `postman` | [Postman](third_party/postman/) | 17 | [postmanlabs/postman-plugin](https://github.com/postmanlabs/postman-plugin) | Apache-2.0 |
| `preset-cli-skills` | [Preset CLI](third_party/preset-cli-skills/) | 2 | [preset-io/agent-skills](https://github.com/preset-io/agent-skills) | Apache-2.0 |
| `pydantic-ai` | [Pydantic AI](third_party/pydantic-ai/) | 9 | [pydantic/skills](https://github.com/pydantic/skills) | MIT |
| `qodo` | [Qodo](third_party/qodo/) | 5 | [qodo-ai/qodo-skills](https://github.com/qodo-ai/qodo-skills) | MIT |
| `qodo-standards` | [Qodo Standards](third_party/qodo-standards/) | 2 | [qodo-ai/qodo-skills](https://github.com/qodo-ai/qodo-skills) | MIT |
| `redis-development` | [Redis Development](third_party/redis-development/) | 8 | [redis/agent-skills](https://github.com/redis/agent-skills) | MIT |
| `resend` | [Resend](third_party/resend/) | 5 | [resend/resend-skills](https://github.com/resend/resend-skills) | MIT |
| `revenuecat` | [RevenueCat](third_party/revenuecat/) | 24 | [RevenueCat/rc-claude-code-plugin](https://github.com/RevenueCat/rc-claude-code-plugin) | MIT |
| `runway-api` | [Runway API](third_party/runway-api/) | 7 | [runwayml/skills](https://github.com/runwayml/skills) | MIT |
| `sagemaker-ai` | [Amazon SageMaker AI](third_party/sagemaker-ai/) | 19 | [awslabs/agent-plugins](https://github.com/awslabs/agent-plugins) | Apache-2.0 |
| `sanity` | [Sanity](third_party/sanity/) | 8 | [sanity-io/agent-toolkit](https://github.com/sanity-io/agent-toolkit) | MIT |
| `save-to-spotify` | [Save to Spotify](third_party/save-to-spotify/) | 2 | [spotify/save-to-spotify](https://github.com/spotify/save-to-spotify) | Apache-2.0 |
| `setup-agent-analytics` | [Pendo Agent Analytics Setup](third_party/setup-agent-analytics/) | 1 | [pendo-io/claude-pendo-plugin](https://github.com/pendo-io/claude-pendo-plugin) | MIT |
| `setup-mcp-agent-analytics` | [Pendo MCP Agent Analytics Setup](third_party/setup-mcp-agent-analytics/) | 1 | [pendo-io/claude-pendo-plugin](https://github.com/pendo-io/claude-pendo-plugin) | MIT |
| `snowflake-cortex-code` | [Snowflake Cortex Code](third_party/snowflake-cortex-code/) | 3 | [Snowflake-Labs/snowflake-ai-kit](https://github.com/Snowflake-Labs/snowflake-ai-kit) | Apache-2.0 |
| `stackhawk-api` | [StackHawk API](third_party/stackhawk-api/) | 1 | [stackhawk/agent-skills](https://github.com/stackhawk/agent-skills) | MIT |
| `stackhawk-hawkscan` | [StackHawk HawkScan](third_party/stackhawk-hawkscan/) | 1 | [stackhawk/agent-skills](https://github.com/stackhawk/agent-skills) | MIT |
| `superdesign` | [Superdesign](third_party/superdesign/) | 1 | [superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill) | MIT |
| `superpowers` | [Superpowers](third_party/superpowers/) | 15 | [obra/superpowers](https://github.com/obra/superpowers) | MIT |
| `synthflow` | [Synthflow](third_party/synthflow/) | 2 | [SynthFlowAI/AnthropicPlugin](https://github.com/SynthFlowAI/AnthropicPlugin) | MIT |
| `teamcity-cli` | [TeamCity CLI](third_party/teamcity-cli/) | 2 | [JetBrains/teamcity-cli](https://github.com/JetBrains/teamcity-cli) | Apache-2.0 |
| `togetherai-skills` | [Together AI Skills](third_party/togetherai-skills/) | 14 | [togethercomputer/skills](https://github.com/togethercomputer/skills) | MIT |
| `ui-theme-designer` | [SAP UI Theme Designer](third_party/ui-theme-designer/) | 2 | [SAP/ui-theme-designer-plugins-for-coding-agents](https://github.com/SAP/ui-theme-designer-plugins-for-coding-agents) | Apache-2.0 |
| `ui5-modernization` | [UI5 Modernization](third_party/ui5-modernization/) | 19 | [UI5/plugins-coding-agents](https://github.com/UI5/plugins-coding-agents) | Apache-2.0 |
| `ui5-typescript-conversion` | [UI5 TypeScript Conversion](third_party/ui5-typescript-conversion/) | 1 | [UI5/plugins-coding-agents](https://github.com/UI5/plugins-coding-agents) | Apache-2.0 |
| `valtown` | [Val Town](third_party/valtown/) | 11 | [val-town/plugins](https://github.com/val-town/plugins) | MIT |
| `vibe-prospecting` | [Vibe Prospecting](third_party/vibe-prospecting/) | 1 | [explorium-ai/vibeprospecting-plugin](https://github.com/explorium-ai/vibeprospecting-plugin) | MIT |
| `wingspan` | [Wingspan](third_party/wingspan/) | 8 | [wingspanHQ/mcp-claude-plugin](https://github.com/wingspanHQ/mcp-claude-plugin) | MIT |
| `youdotcom-agent-skills` | [You.com Skills](third_party/youdotcom-agent-skills/) | 5 | [youdotcom-oss/agent-skills](https://github.com/youdotcom-oss/agent-skills) | MIT |

## Repository structure

This is a multi-plugin marketplace repository. The root marketplace files list every plugin, and each plugin has a manifest per client:

```
.boldcreate-plugin/marketplace.json   # BoldCreate Connect marketplace (generated)
.cursor-plugin/marketplace.json       # Cursor marketplace (generated)
.claude-plugin/marketplace.json       # Claude Code marketplace (generated)
boldcreate-toolkit/                   # Syncfusion plugin
├── .cursor-plugin/plugin.json        # Manifest
├── .claude-plugin/plugin.json        # Claude Code manifest (generated)
├── .boldcreate-plugin/plugin.json    # BoldCreate Connect manifest (generated)
├── boldcreate.json                   # BoldCreate Connect metadata
├── skills/<name>/                    # Skills: SKILL.md plus the templates and checklists it reads
├── agents/                           # Agents
├── rules/                            # Cursor rules
├── hooks/claude-hooks.json           # Claude Code hooks
├── tests/scenarios/<skill>.md        # One scenario per skill
├── assets/logo.svg
├── README.md
├── CHANGELOG.md
└── LICENSE
syncfusion/
└── <group>/<pack>/                   # component-skills, sdk-skills or migration-skills; named syncfusion-<pack>
    ├── .cursor-plugin/plugin.json
    ├── .claude-plugin/plugin.json      # (generated)
    ├── .boldcreate-plugin/plugin.json  # (generated)
    ├── boldcreate.json                 # upstream source repository and commit
    ├── skills/<name>/                  # SKILL.md plus references/
    ├── assets/logo.png
    ├── README.md
    ├── CHANGELOG.md
    └── LICENSE
third_party/
└── plugin-name/
    ├── .cursor-plugin/plugin.json      # Per-plugin manifest and install-time variables
    ├── .claude-plugin/plugin.json      # Claude Code manifest (generated)
    ├── .boldcreate-plugin/plugin.json  # BoldCreate Connect manifest (generated)
    ├── boldcreate.json                 # Transport, auth and docs metadata
    ├── mcp.json                        # MCP server definitions
    ├── assets/logo.svg                 # Logo
    ├── README.md
    ├── CHANGELOG.md
    └── LICENSE
schemas/                              # JSON schemas for the manifests
scripts/                              # build.mjs, validate.mjs and check-kit.mjs
```

## Contributing

1. Edit the source files: `.cursor-plugin/plugin.json`, `boldcreate.json`, `README.md` and `CHANGELOG.md`, plus `mcp.json` for an MCP plugin or the skills, agents, rules and hooks for a Syncfusion plugin. Don't edit generated files by hand.
2. Run `npm ci`, then `npm run build` and `npm run validate`. Community plugins and Syncfusion skill packs are checked only for loadable components and an `upstream` entry in `boldcreate.json`. Validation also checks Syncfusion plugins against their context budgets: auto-skill descriptions, agent descriptions and always-on rules under 600 tokens, each `SKILL.md` at most 150 lines, each agent file at most 80 lines, and a scenario file for every skill.
3. Open a pull request. CI runs the same checks and the Claude Code plugin validator.

## License

MIT. Logos are trademarks of their owners.
