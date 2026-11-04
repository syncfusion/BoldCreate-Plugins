# Syncfusion BoldCreate Plugins

Syncfusion's BoldCreate plugins for BoldCreate Connect, Cursor and Claude Code. The repository holds three kinds of plugin, each in its own directory with its own manifests:

- **Syncfusion plugins** at the repository root, made of skills, agents and rules. `boldcreate-toolkit/` gives agents one software delivery lifecycle on any stack.
- **Syncfusion skill packs** under `syncfusion/`, one plugin per platform. Each is copied from Syncfusion's skill repository for that platform and teaches agents to build with Syncfusion components.
- **MCP plugins** under `third_party/`. Each connects agents to a vendor's remote [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

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
| `activecampaign` | [ActiveCampaign](third_party/activecampaign/) | Marketing | Marketing automation, CRM and email marketing workflows for ActiveCampaign. |
| `adisinsight` | [AdisInsight](third_party/adisinsight/) | Science | Pharmaceutical drug & clinical trial intelligence. |
| `adobe-cx-enterprise-coworker` | [Adobe CX Enterprise Coworker](third_party/adobe-cx-enterprise-coworker/) | Analytics | Drive CX Workflows. |
| `adobe-experience-manager` | [Adobe Experience Manager](third_party/adobe-experience-manager/) | Productivity | Manage your Adobe Experience Manager content. |
| `adobe-for-creativity` | [Adobe for Creativity](third_party/adobe-for-creativity/) | Design | Brings together Adobe Creative Cloud tools for images, vectors, design, and video. |
| `adobe-journey-optimizer` | [Adobe Journey Optimizer](third_party/adobe-journey-optimizer/) | Marketing | Understand and troubleshoot your Journeys and Campaigns. |
| `adobe-workfront` | [Adobe Workfront](third_party/adobe-workfront/) | Productivity | Manage planning, projects, tasks, and approvals. |
| `ahrefs` | [Ahrefs](third_party/ahrefs/) | Marketing | SEO & AI search analytics. |
| `ai-plugins` | [Endor Labs](third_party/ai-plugins/) | Security | Endor Labs agent setup and workflow agents for findings, remediation and dependency review. |
| `airtable` | [Airtable](third_party/airtable/) | Database | Bring your structured data to Claude. |
| `airwallex-agentos` | [Airwallex AgentOS](third_party/airwallex-agentos/) | Payments | Bring Airwallex's global financial infrastructure to Claude. |
| `airwallex-dev` | [Airwallex Dev](third_party/airwallex-dev/) | Payments | Airwallex integration skills for Claude. |
| `aiven` | [Aiven](third_party/aiven/) | Database | Easily deploy managed PostgreSQL (pg), Kafka, OpenSearch, Clickhouse and other databases, streaming and apps. |
| `alloydb-omni` | [AlloyDB Omni](third_party/alloydb-omni/) | Database | Create, connect, and interact with an AlloyDB Omni database and data. |
| `alpha-vantage` | [Alpha Vantage MCP Server](third_party/alpha-vantage/) | Finance | Stock market data: stocks, options, fundamentals, earnings, SEC filings, indices, news, exchange rates, commodities, and other trading signals to power your quantitative finance workflow. |
| `amazon-location-service` | [Amazon Location Service](third_party/amazon-location-service/) | Cloud | Guide developers through adding maps, places search, geocoding, routing, and other geospatial features with Amazon Location Service, including authentication setup, SDK integration, and best practices. |
| `amazon-selling-partner` | [Amazon Selling Partner](third_party/amazon-selling-partner/) | Finance | Amazon Selling Partner MCP. |
| `amd-skills` | [AMD Skills](third_party/amd-skills/) | AI | Serve and optimize large language models on AMD EPYC and Instinct hardware, and set up local AI with Lemonade. |
| `amplitude` | [Amplitude](third_party/amplitude/) | Analytics | Query Amplitude product analytics, charts, and experiments. |
| `android-management` | [Android Management](third_party/android-management/) | Devices | Manage enterprise Android devices, policies, and apps with the Android Management API. |
| `apollo` | [Apollo](third_party/apollo/) | Productivity | Search and enrich contacts and accounts in Apollo.io. |
| `apollo-skills` | [Apollo GraphQL Skills](third_party/apollo-skills/) | Developer Tools | Build with Apollo GraphQL: Client, Server, Router, Federation, Connectors, Rover, iOS and Kotlin. |
| `asana` | [Asana](third_party/asana/) | Project Management | Connect to Asana to coordinate tasks, projects, and goals. |
| `ashby` | [Ashby](third_party/ashby/) | Productivity | Search, analyze, and act on your recruiting data. |
| `astronomer-data-agents` | [Astronomer Data Agents](third_party/astronomer-data-agents/) | Data | Data engineering plugin - warehouse exploration, pipeline authoring, Airflow integration |
| `atlassian` | [Atlassian (Jira + Confluence)](third_party/atlassian/) | Project Management | Search and update Jira issues and Confluence pages. |
| `atlassian-twg-cli` | [Atlassian Teamwork Graph CLI](third_party/atlassian-twg-cli/) | Project Management | Teamwork Graph CLI is Atlassian's agent-first interface to your entire work context: Jira issues, Confluence pages, Bitbucket PRs, along with your connected third-party data sources. |
| `atomic-agents` | [Atomic Agents](third_party/atomic-agents/) | Developer Tools | Build, scaffold and debug applications with the Atomic Agents framework. |
| `attio` | [Attio](third_party/attio/) | Productivity | Search, manage, and update your Attio CRM from Claude. |
| `auth0` | [Auth0](third_party/auth0/) | Security | A single unified Auth0 skill that detects your framework, feature, and tooling, then loads the right reference guides for adding authentication — login, MFA, Organizations, ACUL, custom domains, |
| `aws-agents` | [AWS Agents](third_party/aws-agents/) | Cloud | Build, deploy, and operate AI agents on AWS. |
| `aws-amplify` | [AWS Amplify](third_party/aws-amplify/) | Cloud | Build full-stack apps with AWS Amplify Gen 2 using guided workflows for authentication, data models, storage, GraphQL APIs, and Lambda functions. |
| `aws-core` | [AWS Core](third_party/aws-core/) | Cloud | Build, deploy, and operate applications on AWS. |
| `aws-data-analytics` | [AWS Data Analytics](third_party/aws-data-analytics/) | Cloud | Data lake, analytics, search, ETL, and orchestration workflows with S3 Tables, AWS Glue, Athena, Amazon Redshift, Amazon OpenSearch Service, and Amazon MWAA. |
| `aws-knowledge` | [AWS Knowledge](third_party/aws-knowledge/) | Documentation | Search AWS documentation, API references, and regional availability. |
| `aws-mcp` | [AWS MCP](third_party/aws-mcp/) | Developer Tools | Give agents secure access to AWS via MCP. |
| `aws-serverless` | [AWS Serverless](third_party/aws-serverless/) | Cloud | Design, build, deploy, test, and debug serverless applications with AWS Serverless services. |
| `aws-transform` | [AWS Transform](third_party/aws-transform/) | Cloud | Migrate, modernize, and upgrade codebases to AWS. |
| `azure` | [Azure](third_party/azure/) | Cloud | Plan, deploy, diagnose and manage Azure resources with Azure skills. |
| `azure-cosmos-db-assistant` | [Azure Cosmos DB Assistant](third_party/azure-cosmos-db-assistant/) | Database | Best-practice rules and an expert agent for designing and tuning Azure Cosmos DB. |
| `azure-sql-developer` | [Azure SQL Developer](third_party/azure-sql-developer/) | Database | Agent skills for the Azure SQL Database container, the Azure SQL Database engine running locally. |
| `base44` | [Base44](third_party/base44/) | Developer Tools | Build and manage Base44 apps. |
| `bigdata-com` | [Bigdata.com](third_party/bigdata-com/) | Finance | Financial news, SEC filings, earnings call transcripts, fundamentals, sentiment, market data and stock research for AI, with every answer cited. The sources that move markets. |
| `bigquery-data-analytics` | [BigQuery Data Analytics](third_party/bigquery-data-analytics/) | Database | Connect, query, and generate data insights for BigQuery datasets and data. |
| `biorender` | [BioRender](third_party/biorender/) | Science | Search the BioRender library, find your files, and generate new scientific figures directly from Claude. |
| `blackrock-advisor-center-plugin` | [BlackRock Advisor Center](third_party/blackrock-advisor-center-plugin/) | Finance | BlackRock Advisor Center 360° skills for AC360 capability routing, guided benchmark selection, guided portfolio building, portfolio observations and opportunities, wealth projections, and portfolio |
| `blockscout` | [Blockscout](third_party/blockscout/) | Blockchain | Query Ethereum and EVM blockchains: blocks, transactions, addresses, tokens, and smart contracts. |
| `boltz` | [Boltz](third_party/boltz/) | Science | Predict structures, screen molecules and proteins, and design binders with Boltz. |
| `box` | [Box](third_party/box/) | Storage | Skills and guardrails for Box Platform integrations: content workflows, shared links, CLI, SDK and MCP. |
| `brevo` | [Brevo](third_party/brevo/) | Marketing | Analyze campaigns, know your audience and create drafts. |
| `buildkite` | [Buildkite](third_party/buildkite/) | CI/CD | Work with Buildkite pipelines, builds, the CLI and the REST API, and migrate from other CI systems. |
| `calendly` | [Calendly](third_party/calendly/) | Productivity | Manage scheduling and access meeting recaps. |
| `canva` | [Canva](third_party/canva/) | Design | Search, create, autofill, and export Canva designs. |
| `carta` | [Carta](third_party/carta/) | Finance | The connected ERP for private capital. |
| `carta-crm` | [Carta CRM](third_party/carta-crm/) | Finance | Manage the Carta CRM conversationally — search, add, update, and enrich investors, companies, contacts, deals, notes, and fundraisings via the Carta CRM MCP Server |
| `catalyst-by-zoho` | [Catalyst by Zoho](third_party/catalyst-by-zoho/) | Developer Tools | Official Claude Code plugin for Catalyst by Zoho — full-stack serverless cloud platform. |
| `chrome-devtools-mcp` | [Chrome DevTools](third_party/chrome-devtools-mcp/) | Developer Tools | Reliable automation, in-depth debugging, and performance analysis in Chrome using Chrome DevTools and Puppeteer |
| `chronograph-gp` | [Chronograph GP](third_party/chronograph-gp/) | Finance | Portfolio monitoring, valuations, and analytics for private capital GP teams. |
| `chronograph-lp` | [Chronograph LP](third_party/chronograph-lp/) | Finance | Portfolio monitoring and analytics for private capital LP teams. |
| `ckeditor` | [CKEditor](third_party/ckeditor/) | Developer Tools | Install, configure, and integrate CKEditor 5 in JavaScript projects. |
| `clay` | [Clay](third_party/clay/) | Analytics | Find prospects. Research accounts. Personalize outreach. |
| `clickup` | [ClickUp](third_party/clickup/) | Project Management | Project management & collaboration for teams & agents. |
| `cloudflare` | [Cloudflare](third_party/cloudflare/) | Hosting | Build, test, and deploy applications on Cloudflare with platform guidance Skills and the Cloudflare MCP server. |
| `cloudflare-docs` | [Cloudflare Docs](third_party/cloudflare-docs/) | Documentation | Search Cloudflare's developer documentation for Workers, Pages, R2, D1, and more. |
| `cocounsel-legal` | [CoCounsel Legal](third_party/cocounsel-legal/) | Legal | Thomson Reuters CoCounsel Legal, in Claude. |
| `cohere` | [Cohere Docs](third_party/cohere/) | Documentation | Search Cohere's official documentation for the Command and Embed models and the Cohere API. |
| `coingecko` | [CoinGecko](third_party/coingecko/) | Finance | Track cryptocurrency prices, markets, exchanges, and trending coins. |
| `confidence` | [Spotify Confidence](third_party/confidence/) | Analytics | Access Confidence feature flags, experiments, and migration tools directly from Claude Code. |
| `consensus` | [Consensus](third_party/consensus/) | Science | Explore scientific research. |
| `context7` | [Context7](third_party/context7/) | Documentation | Pull up-to-date, version-specific library docs and code examples into the prompt. |
| `cortellis` | [Cortellis Regulatory Intelligence](third_party/cortellis/) | Science | Trusted Regulatory Answers, by Clarivate Cortellis. |
| `coursera` | [Coursera](third_party/coursera/) | Productivity | Transform your prompts into active skill-building. |
| `courtlistener` | [CourtListener](third_party/courtlistener/) | Legal | Legal research across millions of court records. |
| `crowdsec` | [CrowdSec](third_party/crowdsec/) | Security | Install, configure, operate, and debug CrowdSec, and use the CrowdSec Console Service API. |
| `crowdstrike-falcon-foundry` | [CrowdStrike Falcon Foundry](third_party/crowdstrike-falcon-foundry/) | Security | Build CrowdStrike Falcon Foundry applications: functions, workflows, UI extensions and collections. |
| `daloopa` | [Daloopa](third_party/daloopa/) | Finance | Financial fundamental data and KPIs with hyperlinks. |
| `databases-on-aws` | [Databases on AWS](third_party/databases-on-aws/) | Database | Expert database guidance for the AWS database portfolio. |
| `datadog` | [Datadog](third_party/datadog/) | Observability | Use Datadog directly in Claude Code through a preconfigured Datadog MCP server. |
| `dataverse` | [Microsoft Dataverse](third_party/dataverse/) | Database | Microsoft Dataverse plugin for coding agents, covering record CRUD, bulk data operations, advanced queries, schema and metadata, administration, security, environment management, and solution |
| `deepeval` | [DeepEval](third_party/deepeval/) | AI | Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports, and iterative improvement loops to AI applications. |
| `deepwiki` | [DeepWiki](third_party/deepwiki/) | Documentation | Ask questions about any public GitHub repository and read its generated wiki. |
| `deploy-on-aws` | [Deploy on AWS](third_party/deploy-on-aws/) | Cloud | Deploy applications to AWS with architecture recommendations, cost estimates, and IaC deployment. |
| `descript` | [Descript](third_party/descript/) | Design | Import, edit, or create video with prompts. |
| `desktop-commander` | [Desktop Commander](third_party/desktop-commander/) | Developer Tools | MCP server for terminal commands, process management, and file operations across text files, code, PDF, DOCX, Excel, images, and structured data |
| `dice` | [Dice](third_party/dice/) | Productivity | Find active tech jobs on Dice. |
| `docusign` | [Docusign](third_party/docusign/) | Legal | Intelligent, secure contract management by Docusign. |
| `dropbox` | [Dropbox](third_party/dropbox/) | Legal | Search, organize, and take action on your Dropbox content. |
| `duckdb-skills` | [DuckDB Skills](third_party/duckdb-skills/) | Data | Read data files, query DuckDB databases, and search DuckDB documentation. |
| `duende-skills` | [Duende Skills](third_party/duende-skills/) | Security | Build secure identity solutions with Duende IdentityServer, BFF, OAuth 2.0 and OpenID Connect on ASP.NET Core. |
| `dynatrace` | [Dynatrace](third_party/dynatrace/) | Observability | Connect Claude Code to your Dynatrace environment and investigate production issues, review deployments, and check for vulnerabilities using real data pulled directly into your session: root cause |
| `elevenlabs` | [ElevenLabs](third_party/elevenlabs/) | Developer Tools | Manage your ElevenAgents voice agents in your chat. |
| `elicit` | [Elicit](third_party/elicit/) | Science | Search and analyze scientific papers. |
| `exa` | [Exa](third_party/exa/) | Search | Search the web and fetch page content with Exa. |
| `excalidraw` | [Excalidraw](third_party/excalidraw/) | Design | Create and edit hand-drawn style diagrams, wireframes, and sketches from text prompts. |
| `expo` | [Expo](third_party/expo/) | Mobile | Build, deploy, upgrade and debug Expo and React Native apps, including EAS. |
| `factset` | [FactSet AI-Ready Data](third_party/factset/) | Finance | Access institutional-quality financial data and analytics. |
| `fastly-agent-toolkit` | [Fastly Agent Toolkit](third_party/fastly-agent-toolkit/) | Cloud | Work with the Fastly CLI, Compute, Fiddle, NGWAF, VCL tooling and reference architectures. |
| `fathom` | [Fathom – Your Meeting Intelligence Layer](third_party/fathom/) | Productivity | Your meeting notes, transcripts, and context – now part of every Claude conversation. |
| `fiftyone` | [FiftyOne](third_party/fiftyone/) | AI | Build high-quality datasets and computer vision models. |
| `figma` | [Figma](third_party/figma/) | Design | Turn Figma frames into code and read design tokens, components, and variables. |
| `firecrawl` | [Firecrawl](third_party/firecrawl/) | Search | Search the web, read pages, and research documentation with Firecrawl. |
| `fireflies` | [Fireflies](third_party/fireflies/) | Productivity | Analyze and generate insights from meeting transcripts. |
| `fireworks-ai` | [Fireworks AI Docs](third_party/fireworks-ai/) | Documentation | Search Fireworks AI's official documentation for inference, fine-tuning, and deployed models. |
| `fmp` | [FMP](third_party/fmp/) | Finance | Comprehensive financial market data. |
| `forge-skills` | [Atlassian Forge Skills](third_party/forge-skills/) | Developer Tools | Forge app builder skill bundle with Forge MCP configuration for Atlassian Forge workflows. |
| `gamma` | [Gamma](third_party/gamma/) | Productivity | Create presentations, docs, socials, and sites with AI. |
| `gc-ai` | [GC AI](third_party/gc-ai/) | Legal | Use a GC AI legal knowledge base: upload documents, run review playbooks and ask grounded questions. |
| `gitea` | [Gitea](third_party/gitea/) | Source Control | Work with Gitea repositories, issues, pull requests, and releases through your own gitea-mcp server. |
| `github` | [GitHub](third_party/github/) | Source Control | Manage repos, issues, pull requests, and Actions. |
| `gitlab` | [GitLab](third_party/gitlab/) | Source Control | Work with GitLab projects, issues, merge requests, pipelines, and code search. |
| `gmail` | [Gmail](third_party/gmail/) | Productivity | Search, read, and draft Gmail messages and threads. |
| `godaddy` | [GoDaddy](third_party/godaddy/) | Productivity | Search domains and check availability. |
| `goodnotes` | [Goodnotes](third_party/goodnotes/) | Productivity | Turn AI insights into documents. |
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
| `grafana-assistant` | [Grafana Assistant](third_party/grafana-assistant/) | Observability | Skills and rules for developing and using the Grafana Assistant app and CLI. |
| `grafana-cloud-mcp` | [Grafana Cloud](third_party/grafana-cloud-mcp/) | Observability | Hosted MCP server for AI-assisted Grafana Cloud observability — no local installation required. |
| `grafana-mcp` | [Grafana](third_party/grafana-mcp/) | Observability | MCP server for AI-assisted Grafana dashboard, datasource, alerting, and incident management. |
| `granola` | [Granola](third_party/granola/) | Productivity | The AI notepad for meetings, now in Claude. Ask about your notes, transcripts and meeting context. |
| `greptile` | [Greptile](third_party/greptile/) | Developer Tools | Read and resolve Greptile pull request reviews and search your organization's coding patterns. |
| `growthbook` | [GrowthBook](third_party/growthbook/) | Analytics | Manage GrowthBook feature flags, experiments, and product analytics. |
| `harvey` | [Harvey](third_party/harvey/) | Legal | Answer legal queries, search vaults, and research. |
| `heygen-hyperframes` | [HyperFrames by HeyGen](third_party/heygen-hyperframes/) | Design | Build animated slides and motion graphics with HTML. |
| `honeycomb` | [Honeycomb](third_party/honeycomb/) | Observability | Skills, agents, and workflows for Honeycomb observability — query patterns, production investigations, SLOs, OpenTelemetry instrumentation, and Beeline migration. |
| `hubspot-crm` | [HubSpot](third_party/hubspot-crm/) | Marketing | CRM context for every answer, insight, and action. |
| `huggingface` | [Hugging Face](third_party/huggingface/) | AI | Search Hugging Face for models, datasets, and spaces. |
| `hunter` | [Hunter](third_party/hunter/) | Productivity | Find and verify professional email addresses with Hunter. |
| `ibkr` | [Interactive Brokers (IBKR)](third_party/ibkr/) | Finance | Trade, invest, analyze, and manage global markets. |
| `idmp-plugin` | [TDengine IDMP](third_party/idmp-plugin/) | Database | TDengine IDMP plugin with packaged skills for discovery, schema inspection, and safe operational workflows. |
| `incident-io` | [incident.io](third_party/incident-io/) | Observability | Look up and manage incidents in incident.io. |
| `indeed` | [Indeed](third_party/indeed/) | Productivity | Search for jobs on Indeed. |
| `informatica-for-claude-platform` | [Informatica](third_party/informatica-for-claude-platform/) | Data | Informatica plugin for Claude Platform (Claude Code & Claude CoWork) — governed catalog discovery, data Q&A, powered by Informatica's Data catalog and Governance to understand and evaluate enterprise |
| `intercom` | [Intercom](third_party/intercom/) | Productivity | Search Intercom conversations, contacts, and help center articles. |
| `ironclad-contracts` | [Ironclad Contracts](third_party/ironclad-contracts/) | Legal | Plain language search for faster contract answers and manage your contractual obligations. |
| `jotform` | [Jotform](third_party/jotform/) | Education | Create forms, surveys, quizzes & analyze submissions. |
| `kiwi-com` | [Kiwi.com](third_party/kiwi-com/) | Productivity | Search flights in Claude. |
| `klaviyo` | [Klaviyo](third_party/klaviyo/) | Analytics | Report, strategize & create with real-time Klaviyo data. |
| `langfuse` | [Langfuse](third_party/langfuse/) | Observability | Work with Langfuse tracing, prompts and evaluation, and migrate prompts to Langfuse. |
| `lattice` | [Lattice](third_party/lattice/) | Productivity | Lattice, wherever you work. |
| `leadfeeder` | [Leadfeeder](third_party/leadfeeder/) | Productivity | Look up companies that visit your website with Leadfeeder. |
| `linear` | [Linear](third_party/linear/) | Project Management | Find, create, and update Linear issues, projects, and cycles. |
| `logfire` | [Pydantic Logfire](third_party/logfire/) | Observability | Add Logfire observability to Python apps, query traces, and set up evals. |
| `lovable` | [Lovable](third_party/lovable/) | Developer Tools | Build, iterate, inspect, and deploy Lovable apps. |
| `lseg` | [LSEG](third_party/lseg/) | Finance | Access best in class data & analytics across a broad spectrum of asset classes. |
| `lucid` | [Lucid](third_party/lucid/) | Design | Ideate, diagram, and align teams. |
| `lumen` | [Lumen](third_party/lumen/) | Developer Tools | Precise local semantic code search via MCP. |
| `lusha` | [Lusha](third_party/lusha/) | Sales | Connect Lusha to Claude to pull verified B2B data, contact data, and company data — including verified emails, direct dials, mobile numbers, and real-time buying signals — straight into your conversation. |
| `make` | [Make](third_party/make/) | Automation | Run Make scenarios and manage your Make account. |
| `mapbox` | [Mapbox](third_party/mapbox/) | Maps | Build location-aware apps with Mapbox: maps, search, navigation, styles and geospatial tools. |
| `mercadopago` | [Mercado Pago](third_party/mercadopago/) | Payments | Mercado Pago integration toolkit for Claude Code. |
| `mermaid-chart` | [Mermaid Chart](third_party/mermaid-chart/) | Design | Validates Mermaid syntax, renders diagrams as high-quality SVG, and displays them instantly in an interactive UI where users can preview, zoom, and iterate in real time. |
| `metricool` | [Metricool Social Media Management](third_party/metricool/) | Marketing | Schedule posts, analyze, and manage social media with AI. |
| `microsoft-learn` | [Microsoft Learn](third_party/microsoft-learn/) | Documentation | Search official Microsoft docs and code samples for .NET, Azure, MAUI, and more. |
| `mintlify` | [Mintlify](third_party/mintlify/) | Documentation | Search Mintlify documentation and manage your docs site. |
| `miro` | [Miro](third_party/miro/) | Design | Access and create new content on Miro boards. |
| `mixpanel` | [Mixpanel](third_party/mixpanel/) | Analytics | Analyze, query, and manage your Mixpanel data. |
| `mobbin` | [Mobbin](third_party/mobbin/) | Developer Tools | Find UI & UX design references. |
| `modern-web-guidance` | [Modern Web Guidance](third_party/modern-web-guidance/) | Developer Tools | Keep your coding agent up to date with the latest web best practices |
| `monday` | [monday.com](third_party/monday/) | Project Management | Manage monday.com boards, items, and workspaces. |
| `mongodb` | [MongoDB](third_party/mongodb/) | Database | Connect to any MongoDB deployment (Community, Enterprise Advanced, local dev container via Atlas CLI or Atlas clusters) through a self-managed MongoDB MCP Server using your connection string. |
| `morningstar` | [Morningstar](third_party/morningstar/) | Finance | Up-to-date investment and market insights. |
| `motion` | [Motion Creative Analytics](third_party/motion/) | Analytics | Analyze your Meta ad creative & competitor ad libraries. |
| `neon` | [Neon](third_party/neon/) | Database | Manage Neon serverless Postgres projects, branches, queries, and migrations. |
| `netlify` | [Netlify](third_party/netlify/) | Hosting | Create, deploy, manage, and secure websites on Netlify. |
| `netlify-skills` | [Netlify](third_party/netlify-skills/) | Hosting | Netlify platform skills for Claude Code |
| `noibu` | [Noibu](third_party/noibu/) | Observability | Work with Noibu error and performance data for e-commerce sites. |
| `notion` | [Notion](third_party/notion/) | Documentation | Search, read, and update Notion pages and databases. |
| `ollama` | [Ollama Docs](third_party/ollama/) | Documentation | Search Ollama's official documentation for running and serving local large language models. |
| `open-targets` | [Open Targets](third_party/open-targets/) | Science | Drug target discovery and prioritisation platform. |
| `opusclip` | [OpusClip](third_party/opusclip/) | Marketing | Turn long videos into viral short clips. |
| `otter-ai` | [Otter.ai](third_party/otter-ai/) | Productivity | Unlock your meeting intelligence. |
| `outputai` | [Output.ai](third_party/outputai/) | Developer Tools | Workflow development tools |
| `outreach` | [Outreach](third_party/outreach/) | Marketing | Unleash your team's best performance with Outreach AI. |
| `pagerduty` | [PagerDuty](third_party/pagerduty/) | Observability | Browse PagerDuty services, incidents, and change events. |
| `paypal` | [PayPal](third_party/paypal/) | Payments | PayPal development plugin for Claude — integrate payments, subscriptions, invoices, disputes, and more using PayPal's APIs and MCP server |
| `pendo-analytics` | [Pendo Analytics](third_party/pendo-analytics/) | Analytics | Bring Pendo analytics into Claude Code with skills for app health, account health, feature adoption, session replays, feedback analysis, and data-informed planning |
| `pendo-guides` | [Pendo Guides](third_party/pendo-guides/) | Analytics | Create production-ready Pendo in-app guides (walkthroughs, announcements, alerts, polls, promotions) as HTML/CSS/JS from a short intake conversation |
| `pendo-orchestrate` | [Pendo Orchestrate](third_party/pendo-orchestrate/) | Analytics | Create, configure, and edit draft Orchestrate email journeys via Pendo MCP — multi-email journeys and conditional split flows. |
| `perplexity` | [Perplexity Docs](third_party/perplexity/) | Documentation | Search Perplexity's official Sonar and API documentation. |
| `pipedrive` | [Pipedrive](third_party/pipedrive/) | Analytics | Find deals, update records, manage activities and work with your live CRM data using natural language. |
| `pitchbook-premium` | [PitchBook Premium](third_party/pitchbook-premium/) | Finance | PitchBook data, embedded in the way you work. |
| `planetscale` | [PlanetScale](third_party/planetscale/) | Database | Inspect PlanetScale organizations, databases, branches, schema and Insights data. |
| `plaud` | [Plaud](third_party/plaud/) | Productivity | Search and extract insights from your Plaud recordings. |
| `playmcp` | [PlayMCP](third_party/playmcp/) | Productivity | Connect and use PlayMCP servers in your toolbox. |
| `posthog` | [PostHog](third_party/posthog/) | Analytics | Query product analytics, manage feature flags, and investigate errors in PostHog. |
| `postman` | [Postman](third_party/postman/) | Developer Tools | Work with Postman from your agent: bootstrap a repo's Postman setup, mock an API before it's implemented, run collection and governance checks in CI, monitor a live endpoint, deploy and debug Postman |
| `preset-cli-skills` | [Preset CLI](third_party/preset-cli-skills/) | Analytics | Preset CLI skills for explicit shell, scripting, and CI/CD workflows driven by the `sup` CLI (PyPI package `superset-sup`). |
| `pydantic-ai` | [Pydantic AI](third_party/pydantic-ai/) | AI | Build production-grade AI agents with Pydantic AI — tools, capabilities, structured output, streaming, and testing patterns — and port existing agents over from LangChain, the OpenAI Agents SDK, |
| `qdrant-skills` | [Qdrant Skills](third_party/qdrant-skills/) | Database | Agent skills for Qdrant vector search: scaling, performance optimization, search quality, monitoring, deployment, edge, model migration, multitenancy, version upgrades, and SDK usage |
| `qodo` | [Qodo](third_party/qodo/) | Developer Tools | Qodo setup, code intelligence, and review workflows. |
| `qodo-standards` | [Qodo Standards](third_party/qodo-standards/) | Developer Tools | Optional Qodo standards discovery and review rules/skills administration workflows. |
| `railway` | [Railway](third_party/railway/) | Developer Tools | Deploy, manage, and debug your apps and infrastructure on Railway. |
| `ramp` | [Ramp](third_party/ramp/) | Finance | Search, access, and analyze your Ramp financial data. |
| `read-ai` | [Read AI](third_party/read-ai/) | Communication | Bring your meetings into Claude. |
| `redis-development` | [Redis Development](third_party/redis-development/) | Database | Redis development best practices — data structures, query engine, vector search, caching, and performance optimization |
| `render` | [Render](third_party/render/) | Hosting | Inspect Render services, deploys, and logs. |
| `replit` | [Replit](third_party/replit/) | Developer Tools | Turn ideas into apps and websites instantly. |
| `resend` | [Resend](third_party/resend/) | Email | Send and receive email with Resend, build emails with React Email, and follow deliverability practices. |
| `resy` | [Resy](third_party/resy/) | Productivity | Find and book restaurants instantly. |
| `revenuecat` | [RevenueCat](third_party/revenuecat/) | Payments | Set up RevenueCat, integrate it, and access data. |
| `rill` | [Rill](third_party/rill/) | Analytics | Skills for developing and querying projects in the Rill business intelligence platform |
| `runway-api` | [Runway API](third_party/runway-api/) | Media | Get guidance for integrating video, image and audio generation with the Runway API and official SDKs. |
| `sagemaker-ai` | [Amazon SageMaker AI](third_party/sagemaker-ai/) | AI | Build, train, and deploy AI models with deep AWS AI/ML expertise brought directly into your coding assistants, covering the surface area of Amazon SageMaker AI. |
| `sanity` | [Sanity](third_party/sanity/) | CMS | Model content, write GROQ and Portable Text, and upgrade Sanity Studio. |
| `save-to-spotify` | [Save to Spotify](third_party/save-to-spotify/) | Media | Create polished audio episodes with TTS narration, rich timelines, cover images, and save them to Spotify via the save-to-spotify CLI. |
| `scite` | [Scite](third_party/scite/) | Science | Evidence-based answers grounded in research. |
| `semrush` | [Semrush](third_party/semrush/) | Analytics | SEO, keyword research, competitor analysis, traffic and market analytics, backlink analysis, domain analysis, and PPC. |
| `sentry` | [Sentry](third_party/sentry/) | Observability | Investigate Sentry errors, stack traces, and issues for a project. |
| `setup-agent-analytics` | [Pendo Agent Analytics Setup](third_party/setup-agent-analytics/) | Analytics | Detect AI agents in your codebase and instrument them with Pendo agent analytics via the best-fit path: Python SDK, TypeScript SDK, client-side trackAgent(), or the Conversations API |
| `setup-mcp-agent-analytics` | [Pendo MCP Agent Analytics Setup](third_party/setup-mcp-agent-analytics/) | Analytics | Detect an MCP server's language (Python, TypeScript, Go, or Java) and instrument it with the matching Pendo SDK so MCP tool calls flow into Pendo Agent Analytics |
| `shopify` | [Shopify](third_party/shopify/) | Commerce | Build, manage, and analyze your Shopify store. |
| `similarweb` | [Similarweb](third_party/similarweb/) | Productivity | Real time web, mobile app, and market data. |
| `slack` | [Slack](third_party/slack/) | Productivity | Search Slack messages, read channels and threads, and find context from your workspace. |
| `slidesgpt` | [SlidesGPT](third_party/slidesgpt/) | Productivity | Make presentations and slides, export to PowerPoint. |
| `snowflake-cortex-code` | [Snowflake Cortex Code](third_party/snowflake-cortex-code/) | Database | Automatically route Snowflake prompts from Claude Code to Cortex Code for execution. |
| `sp-kfinance` | [S&P - Deterministic Retrieval](third_party/sp-kfinance/) | Finance | Deterministic access to S&P Global data. |
| `stackhawk-api` | [StackHawk API](third_party/stackhawk-api/) | Security | Query the StackHawk platform API for security posture reporting, findings analysis, and app management. |
| `stackhawk-hawkscan` | [StackHawk HawkScan](third_party/stackhawk-hawkscan/) | Security | Configure, run, and interpret HawkScan DAST results inside Claude Code. |
| `strava` | [Strava](third_party/strava/) | Fitness | Analyze, summarize, and explore your Strava data. |
| `streaming-skills-plugin` | [Confluent Streaming Skills](third_party/streaming-skills-plugin/) | Data | Skills for streaming application developers, covering Kafka and Flink client libraries and Schema Registry |
| `stripe` | [Stripe](third_party/stripe/) | Payments | Work with Stripe customers, payments, subscriptions, and search Stripe docs. |
| `sumup` | [SumUp](third_party/sumup/) | Payments | Skills for SumUp payment integrations across terminal and online checkout flows |
| `supabase` | [Supabase](third_party/supabase/) | Database | Query Postgres, manage tables, auth, storage, and edge functions in a Supabase project. |
| `superdesign` | [Superdesign](third_party/superdesign/) | Design | Design or redesign frontend UI, presentations and marketing graphics with Superdesign. |
| `superhuman-docs` | [Superhuman Docs](third_party/superhuman-docs/) | Productivity | Create, search, update docs and tables. |
| `superhuman-mail` | [Superhuman Mail](third_party/superhuman-mail/) | Communication | The most productive email app ever, for Gmail & Outlook. |
| `supermetrics` | [Supermetrics Marketing Analytics](third_party/supermetrics/) | Analytics | Google Ads, Facebook Ads, Google Analytics, TikTok, LinkedIn, Instagram, YouTube & 200+ sources. |
| `superpowers` | [Superpowers](third_party/superpowers/) | Developer Tools | Core engineering skills: brainstorming, planning, test-driven development, debugging and code review. |
| `surveymonkey` | [SurveyMonkey](third_party/surveymonkey/) | Productivity | Design surveys, collect responses, and analyze results. |
| `synthflow` | [Synthflow](third_party/synthflow/) | AI | Connects Claude Code to the Synthflow AI voice-agent platform through its hosted MCP server, with skills for reviewing calls and auditing agent prompts, plus a docs-search connector. |
| `tally` | [Tally](third_party/tally/) | Analytics | Create beautiful forms. |
| `tavily` | [Tavily](third_party/tavily/) | Search | Search the web and extract page content with Tavily. |
| `teamcity-cli` | [TeamCity CLI](third_party/teamcity-cli/) | CI/CD | Agent skill for interacting with TeamCity CI/CD using the teamcity CLI. |
| `ticktick` | [TickTick](third_party/ticktick/) | Productivity | Search, create and manage your tasks/habit it TickTick. |
| `tiktok-for-business` | [TikTok for Business](third_party/tiktok-for-business/) | Productivity | Create, manage, and analyze advertising campaigns on TikTok. |
| `todoist` | [Todoist](third_party/todoist/) | Productivity | Search, complete, and manage your tasks in Todoist. |
| `together-ai` | [Together AI Docs](third_party/together-ai/) | Documentation | Search Together AI's official documentation for models, inference, and fine-tuning. |
| `togetherai-skills` | [Together AI Skills](third_party/togetherai-skills/) | AI | Use the Together AI platform: chat, embeddings, images, audio, video, batch inference, fine-tuning and GPU clusters. |
| `trello` | [Trello](third_party/trello/) | Project Management | Get things done in Trello. |
| `trimble-sketchup` | [Trimble SketchUp](third_party/trimble-sketchup/) | Design | Create and iterate 3D models for use in SketchUp. |
| `trivago` | [Trivago](third_party/trivago/) | Travel | Use trivago's powerful metasearch to find your ideal hotel and compare prices from multiple providers. |
| `ui-theme-designer` | [SAP UI Theme Designer](third_party/ui-theme-designer/) | Design | Plugin for coding agents working with UI theme designer. |
| `ui5-modernization` | [UI5 Modernization](third_party/ui5-modernization/) | Developer Tools | Complete UI5 modernization toolkit with workflow and specialized fix patterns for modernizing SAPUI5/OpenUI5 applications |
| `ui5-typescript-conversion` | [UI5 TypeScript Conversion](third_party/ui5-typescript-conversion/) | Developer Tools | SAPUI5 / OpenUI5 plugin for coding agents. |
| `unsplash` | [Unsplash](third_party/unsplash/) | Developer Tools | Find and use free HD images. |
| `valtown` | [Val Town](third_party/valtown/) | Hosting | Build and deploy on Val Town. Bundles the Val Town MCP server and platform skills (HTTP vals, cron/intervals, SQLite, email, OAuth, React UI, third-party integrations). |
| `vanta` | [Vanta](third_party/vanta/) | Security | Review Vanta compliance tests, controls, vendors, and vulnerabilities. |
| `vercel` | [Vercel](third_party/vercel/) | Hosting | Inspect Vercel projects, deployments, and build logs, and search Vercel docs. |
| `vibe-prospecting` | [Vibe Prospecting](third_party/vibe-prospecting/) | Sales | B2B data for lead lists, company research and outreach with Vibe Prospecting. |
| `vidiq` | [vidIQ](third_party/vidiq/) | Media | Research and create for YouTube, Instagram & TikTok. |
| `vsql-extension-builder` | [VillageSQL Extension Builder](third_party/vsql-extension-builder/) | Database | Skills for VillageSQL (MySQL with extensions): build extensions end-to-end (including porting PostgreSQL extensions to MySQL) and install VillageSQL Server. |
| `webflow` | [Webflow](third_party/webflow/) | CMS | Design pages, manage CMS content, add motion, analyze traffic, and launch the whole site, all from a prompt and all inside the permissions your workspace already has. |
| `whimsical` | [Whimsical](third_party/whimsical/) | Design | Create flowcharts, mindmaps, wireframes and diagrams. |
| `wiley-scholar-gateway` | [Wiley Scholar Gateway](third_party/wiley-scholar-gateway/) | Science | Enhance responses with scholarly research and citations. |
| `windsor-ai` | [Windsor.ai](third_party/windsor-ai/) | Analytics | Connect Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads + 320 more. |
| `wingspan` | [Wingspan](third_party/wingspan/) | Payments | Ask Claude about the contractors you pay through Wingspan, what you owe them, and what is holding up a payment — then onboard contractors and log payments as drafts, with a preview before anything is written. |
| `wispr-flow` | [Wispr Flow](third_party/wispr-flow/) | Communication | Your meetings, notes, and tasks from Wispr Flow — now native context for Claude. |
| `wix` | [Wix](third_party/wix/) | CMS | Manage and build sites and apps on Wix. |
| `wordpress-com` | [WordPress.com](third_party/wordpress-com/) | Productivity | Secure AI access to manage your WordPress.com sites. |
| `wrike` | [Wrike](third_party/wrike/) | Productivity | Manage, update and move work forward from Claude. |
| `xero` | [Xero](third_party/xero/) | Finance | Access your Xero financials from any conversation. |
| `youdotcom-agent-skills` | [You.com Skills](third_party/youdotcom-agent-skills/) | Search | Search the web, read pages, research and look up finance data with You.com. |
| `zapier` | [Zapier](third_party/zapier/) | Productivity | Run Zapier actions across the apps connected to your Zapier account. |
| `zoho-crm` | [Zoho CRM](third_party/zoho-crm/) | Productivity | MCP Server for Zoho CRM Workflows. |
| `zoom` | [Zoom](third_party/zoom/) | Productivity | Search, recap, and act on your Zoom meetings. |
| `zoominfo` | [ZoomInfo](third_party/zoominfo/) | Productivity | Search ZoomInfo companies and contacts. |

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
