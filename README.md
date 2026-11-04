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
| `adobe-customer-journey-analytics` | [Adobe Customer Journey Analytics](third_party/adobe-customer-journey-analytics/) | Analytics | Run reports using your metrics, dimensions, and segments. |
| `adobe-cx-enterprise-coworker` | [Adobe CX Enterprise Coworker](third_party/adobe-cx-enterprise-coworker/) | Analytics | Drive CX Workflows. |
| `adobe-experience-manager` | [Adobe Experience Manager](third_party/adobe-experience-manager/) | Productivity | Manage your Adobe Experience Manager content. |
| `adobe-for-creativity` | [Adobe for Creativity](third_party/adobe-for-creativity/) | Design | Brings together Adobe Creative Cloud tools for images, vectors, design, and video. |
| `adobe-journey-optimizer` | [Adobe Journey Optimizer](third_party/adobe-journey-optimizer/) | Marketing | Understand and troubleshoot your Journeys and Campaigns. |
| `adobe-workfront` | [Adobe Workfront](third_party/adobe-workfront/) | Productivity | Manage planning, projects, tasks, and approvals. |
| `adspirer` | [Adspirer Ads & Performance Marketing Agent](third_party/adspirer/) | Marketing | Your performance marketing and paid media agent — an Agent that plans, launches, and autonomously runs your ad campaigns across Google, Meta, LinkedIn, TikTok, and more. |
| `adspirer-search-ads` | [Adspirer Search Ads](third_party/adspirer-search-ads/) | Commerce | PPC and paid search agent for Google Ads and Microsoft Advertising (Bing Ads) — does competitor ads research, plans, launches, and autonomously runs your search advertising campaigns. |
| `adspirer-social-ads` | [Adspirer Social Ads](third_party/adspirer-social-ads/) | Analytics | Paid social agent for Meta Ads (Facebook & Instagram) and TikTok Ads — researches competitor ads, plans, launches (paused) and autonomously runs your social advertising campaigns. |
| `adwhispr-ads` | [AdWhispr Ads](third_party/adwhispr-ads/) | Analytics | Research any brand's live Facebook and TikTok ads, find your real competitors, and launch campaigns on Google, TikTok, and Meta from chat. |
| `affinity` | [Affinity](third_party/affinity/) | Finance | Search, update, and prep deals without switching tabs. |
| `aftership-tiktok-shop` | [AfterShip Channels for TikTok Shop](third_party/aftership-tiktok-shop/) | Commerce | List, sync & grow your TikTok Shop business. |
| `agentmail` | [AgentMail](third_party/agentmail/) | Developer Tools | Email inboxes for AI agents. |
| `ahrefs` | [Ahrefs](third_party/ahrefs/) | Marketing | SEO & AI search analytics. |
| `ai-plugins` | [Endor Labs](third_party/ai-plugins/) | Security | Endor Labs agent setup and workflow agents for findings, remediation and dependency review. |
| `aiera` | [Aiera](third_party/aiera/) | Finance | Live events, filings, company publications, and more. |
| `airops` | [AirOps](third_party/airops/) | Analytics | Craft content that wins AI search. |
| `airtable` | [Airtable](third_party/airtable/) | Database | Bring your structured data to Claude. |
| `airwallex` | [Airwallex Developer](third_party/airwallex/) | Finance | Integrate with the Airwallex Platform using Claude. |
| `airwallex-agentos` | [Airwallex AgentOS](third_party/airwallex-agentos/) | Payments | Bring Airwallex's global financial infrastructure to Claude. |
| `airwallex-dev` | [Airwallex Dev](third_party/airwallex-dev/) | Payments | Airwallex integration skills for Claude. |
| `aiven` | [Aiven](third_party/aiven/) | Database | Easily deploy managed PostgreSQL (pg), Kafka, OpenSearch, Clickhouse and other databases, streaming and apps. |
| `aleph` | [Aleph](third_party/aleph/) | Analytics | Ask, analyze, act on FP&A data. |
| `alloydb-omni` | [AlloyDB Omni](third_party/alloydb-omni/) | Database | Create, connect, and interact with an AlloyDB Omni database and data. |
| `alltrails` | [AllTrails](third_party/alltrails/) | Travel | Find your next hike. |
| `alma` | [Alma](third_party/alma/) | Science | Your nutrition data, inside every Claude conversation. |
| `alpha-vantage` | [Alpha Vantage MCP Server](third_party/alpha-vantage/) | Finance | Stock market data: stocks, options, fundamentals, earnings, SEC filings, indices, news, exchange rates, commodities, and other trading signals to power your quantitative finance workflow. |
| `alphaxiv` | [alphaXiv](third_party/alphaxiv/) | Analytics | Fast search and full-text access over arXiv pre-prints. |
| `amass-connector` | [Amass Connector](third_party/amass-connector/) | Science | Life sciences intelligence, unified — publications, trials, drugs, genes, regulatory approvals, and patents in one cross-linked connector. |
| `amazon-location-service` | [Amazon Location Service](third_party/amazon-location-service/) | Cloud | Guide developers through adding maps, places search, geocoding, routing, and other geospatial features with Amazon Location Service, including authentication setup, SDK integration, and best practices. |
| `amazon-selling-partner` | [Amazon Selling Partner](third_party/amazon-selling-partner/) | Finance | Amazon Selling Partner MCP. |
| `amd-skills` | [AMD Skills](third_party/amd-skills/) | AI | Serve and optimize large language models on AMD EPYC and Instinct hardware, and set up local AI with Lemonade. |
| `amplitude` | [Amplitude](third_party/amplitude/) | Analytics | Query Amplitude product analytics, charts, and experiments. |
| `android-management` | [Android Management](third_party/android-management/) | Devices | Manage enterprise Android devices, policies, and apps with the Android Management API. |
| `anythingmcp` | [AnythingMCP](third_party/anythingmcp/) | Developer Tools | Connect Claude to SAP, weclapp, DATEV, Odoo, Etsy, Shopware, Billbee, Sendcloud, Deutsche Bahn, Telegram, Bundesbank & 180+ business APIs — or turn any REST, SOAP, GraphQL or SQL API into MCP tools. |
| `apollo` | [Apollo](third_party/apollo/) | Productivity | Search and enrich contacts and accounts in Apollo.io. |
| `apollo-skills` | [Apollo GraphQL Skills](third_party/apollo-skills/) | Developer Tools | Build with Apollo GraphQL: Client, Server, Router, Federation, Connectors, Rover, iOS and Kotlin. |
| `articulate` | [Articulate](third_party/articulate/) | Education | Build interactive training right from Claude. |
| `asana` | [Asana](third_party/asana/) | Project Management | Connect to Asana to coordinate tasks, projects, and goals. |
| `ashby` | [Ashby](third_party/ashby/) | Productivity | Search, analyze, and act on your recruiting data. |
| `astronomer-data-agents` | [Astronomer Data Agents](third_party/astronomer-data-agents/) | Data | Data engineering plugin - warehouse exploration, pipeline authoring, Airflow integration |
| `atlassian` | [Atlassian (Jira + Confluence)](third_party/atlassian/) | Project Management | Search and update Jira issues and Confluence pages. |
| `atlassian-twg-cli` | [Atlassian Teamwork Graph CLI](third_party/atlassian-twg-cli/) | Project Management | Teamwork Graph CLI is Atlassian's agent-first interface to your entire work context: Jira issues, Confluence pages, Bitbucket PRs, along with your connected third-party data sources. |
| `atomic-agents` | [Atomic Agents](third_party/atomic-agents/) | Developer Tools | Build, scaffold and debug applications with the Atomic Agents framework. |
| `attention` | [Attention](third_party/attention/) | Marketing | Search, analyze, and act on client conversations. |
| `attio` | [Attio](third_party/attio/) | Productivity | Search, manage, and update your Attio CRM from Claude. |
| `auth0` | [Auth0](third_party/auth0/) | Security | A single unified Auth0 skill that detects your framework, feature, and tooling, then loads the right reference guides for adding authentication — login, MFA, Organizations, ACUL, custom domains, |
| `autodesk-help` | [Autodesk Product Help](third_party/autodesk-help/) | Design | Securely access Autodesk's help documentation. |
| `aws-agents` | [AWS Agents](third_party/aws-agents/) | Cloud | Build, deploy, and operate AI agents on AWS. |
| `aws-amplify` | [AWS Amplify](third_party/aws-amplify/) | Cloud | Build full-stack apps with AWS Amplify Gen 2 using guided workflows for authentication, data models, storage, GraphQL APIs, and Lambda functions. |
| `aws-core` | [AWS Core](third_party/aws-core/) | Cloud | Build, deploy, and operate applications on AWS. |
| `aws-data-analytics` | [AWS Data Analytics](third_party/aws-data-analytics/) | Cloud | Data lake, analytics, search, ETL, and orchestration workflows with S3 Tables, AWS Glue, Athena, Amazon Redshift, Amazon OpenSearch Service, and Amazon MWAA. |
| `aws-knowledge` | [AWS Knowledge](third_party/aws-knowledge/) | Documentation | Search AWS documentation, API references, and regional availability. |
| `aws-marketplace` | [AWS Marketplace](third_party/aws-marketplace/) | Productivity | Discover, evaluate, and buy solutions for the cloud. |
| `aws-mcp` | [AWS MCP](third_party/aws-mcp/) | Developer Tools | Give agents secure access to AWS via MCP. |
| `aws-serverless` | [AWS Serverless](third_party/aws-serverless/) | Cloud | Design, build, deploy, test, and debug serverless applications with AWS Serverless services. |
| `aws-transform` | [AWS Transform](third_party/aws-transform/) | Cloud | Migrate, modernize, and upgrade codebases to AWS. |
| `azure` | [Azure](third_party/azure/) | Cloud | Plan, deploy, diagnose and manage Azure resources with Azure skills. |
| `azure-cosmos-db-assistant` | [Azure Cosmos DB Assistant](third_party/azure-cosmos-db-assistant/) | Database | Best-practice rules and an expert agent for designing and tuning Azure Cosmos DB. |
| `azure-sql-developer` | [Azure SQL Developer](third_party/azure-sql-developer/) | Database | Agent skills for the Azure SQL Database container, the Azure SQL Database engine running locally. |
| `b12-website-generator` | [Website Generator by B12](third_party/b12-website-generator/) | Developer Tools | Build a website or web app in minutes! Generate, design, write code, and create copy for your website. Powered by B12. Contact: hello@b12.io. |
| `base44` | [Base44](third_party/base44/) | Developer Tools | Build and manage Base44 apps. |
| `beehiiv` | [beehiiv](third_party/beehiiv/) | Design | Connect your beehiiv workspace to draft, design, analyze, and more. |
| `bigdata-com` | [Bigdata.com](third_party/bigdata-com/) | Finance | Financial news, SEC filings, earnings call transcripts, fundamentals, sentiment, market data and stock research for AI, with every answer cited. The sources that move markets. |
| `bigquery-data-analytics` | [BigQuery Data Analytics](third_party/bigquery-data-analytics/) | Database | Connect, query, and generate data insights for BigQuery datasets and data. |
| `biorender` | [BioRender](third_party/biorender/) | Science | Search the BioRender library, find your files, and generate new scientific figures directly from Claude. |
| `bird` | [Bird](third_party/bird/) | Developer Tools | Send email, SMS, and WhatsApp, place calls, verify users, and run your agent's inbox. |
| `bitly` | [Bitly](third_party/bitly/) | Analytics | Shorten links, generate QR Codes, and track performance. |
| `blackrock-advisor-center-plugin` | [BlackRock Advisor Center](third_party/blackrock-advisor-center-plugin/) | Finance | BlackRock Advisor Center 360° skills for AC360 capability routing, guided benchmark selection, guided portfolio building, portfolio observations and opportunities, wealth projections, and portfolio |
| `blockscout` | [Blockscout](third_party/blockscout/) | Blockchain | Query Ethereum and EVM blockchains: blocks, transactions, addresses, tokens, and smart contracts. |
| `bloomberg-law` | [Bloomberg Law](third_party/bloomberg-law/) | Legal | Legal intelligence powered by Bloomberg AI. |
| `boltz` | [Boltz](third_party/boltz/) | Science | Predict structures, screen molecules and proteins, and design binders with Boltz. |
| `box` | [Box](third_party/box/) | Storage | Skills and guardrails for Box Platform integrations: content workflows, shared links, CLI, SDK and MCP. |
| `brandfetch` | [Brandfetch](third_party/brandfetch/) | Design | Make everything Claude creates on-brand. |
| `braze` | [Braze](third_party/braze/) | Marketing | Braze Marketers can use this connector to answer questions, analyze trends, and provide insights. |
| `brevo` | [Brevo](third_party/brevo/) | Marketing | Analyze campaigns, know your audience and create drafts. |
| `brex` | [Brex](third_party/brex/) | Finance | Intelligent finance automation. |
| `brightdeck` | [Brightdeck](third_party/brightdeck/) | Design | Create presentations and slides, compatible with PowerPoint. |
| `brightflag` | [Brightflag](third_party/brightflag/) | Legal | Connect to Brightflag to interact with matter, vendor and spend data within Claude. |
| `brighthire` | [BrightHire](third_party/brighthire/) | Productivity | Search, summarize and analyze hiring data. |
| `brisk-teaching` | [Brisk Teaching](third_party/brisk-teaching/) | Education | Turn your ideas into interactive student activities, standards-aligned materials, and teaching resources. |
| `buildkite` | [Buildkite](third_party/buildkite/) | CI/CD | Work with Buildkite pipelines, builds, the CLI and the REST API, and migrate from other CI systems. |
| `calendly` | [Calendly](third_party/calendly/) | Productivity | Manage scheduling and access meeting recaps. |
| `canary-data` | [Canary Data](third_party/canary-data/) | Finance | Perform world-class investment analysis. |
| `candid` | [Candid](third_party/candid/) | Data | Research nonprofits and funders using Candid's data. |
| `canva` | [Canva](third_party/canva/) | Design | Search, create, autofill, and export Canva designs. |
| `carta` | [Carta](third_party/carta/) | Finance | The connected ERP for private capital. |
| `carta-crm` | [Carta CRM](third_party/carta-crm/) | Finance | Manage the Carta CRM conversationally — search, add, update, and enrich investors, companies, contacts, deals, notes, and fundraisings via the Carta CRM MCP Server |
| `catalyst-by-zoho` | [Catalyst by Zoho](third_party/catalyst-by-zoho/) | Developer Tools | Official Claude Code plugin for Catalyst by Zoho — full-stack serverless cloud platform. |
| `cb-insights` | [CB Insights](third_party/cb-insights/) | Finance | Predictive intelligence on private companies. |
| `cdata-connect-ai` | [CData Connect AI](third_party/cdata-connect-ai/) | Analytics | Managed MCP platform for 350 sources. |
| `chargebee` | [Chargebee](third_party/chargebee/) | Finance | Live billing intelligence for your revenue team. |
| `chrome-devtools-mcp` | [Chrome DevTools](third_party/chrome-devtools-mcp/) | Developer Tools | Reliable automation, in-depth debugging, and performance analysis in Chrome using Chrome DevTools and Puppeteer |
| `chronograph` | [Chronograph](third_party/chronograph/) | Finance | Interact with your Chronograph data directly in Claude. |
| `chronograph-gp` | [Chronograph GP](third_party/chronograph-gp/) | Finance | Portfolio monitoring, valuations, and analytics for private capital GP teams. |
| `chronograph-lp` | [Chronograph LP](third_party/chronograph-lp/) | Finance | Portfolio monitoring and analytics for private capital LP teams. |
| `circleback` | [Circleback](third_party/circleback/) | Communication | Search and access context from meetings. |
| `circleci` | [CircleCI](third_party/circleci/) | Developer Tools | Manage CI/CD pipelines, debug failed builds, and optimize test suites directly from Claude - no terminal required. |
| `ckeditor` | [CKEditor](third_party/ckeditor/) | Developer Tools | Install, configure, and integrate CKEditor 5 in JavaScript projects. |
| `clay` | [Clay](third_party/clay/) | Analytics | Find prospects. Research accounts. Personalize outreach. |
| `clerk` | [Clerk](third_party/clerk/) | Developer Tools | Add authentication, organizations, and billing. |
| `clickhouse` | [ClickHouse](third_party/clickhouse/) | Analytics | Query and explore your ClickHouse Cloud data. |
| `clickup` | [ClickUp](third_party/clickup/) | Project Management | Project management & collaboration for teams & agents. |
| `close` | [Close](third_party/close/) | Marketing | Connect Claude to Close CRM to securely access and act on your sales data. |
| `cloudflare` | [Cloudflare](third_party/cloudflare/) | Hosting | Build, test, and deploy applications on Cloudflare with platform guidance Skills and the Cloudflare MCP server. |
| `cloudflare-docs` | [Cloudflare Docs](third_party/cloudflare-docs/) | Documentation | Search Cloudflare's developer documentation for Workers, Pages, R2, D1, and more. |
| `cloudinary` | [Cloudinary](third_party/cloudinary/) | Developer Tools | Manage, transform and deliver your images & videos. |
| `cocounsel-legal` | [CoCounsel Legal](third_party/cocounsel-legal/) | Legal | Thomson Reuters CoCounsel Legal, in Claude. |
| `codewords` | [CodeWords](third_party/codewords/) | Productivity | Build AI agents and automations by chatting. |
| `cognito-forms` | [Cognito Forms](third_party/cognito-forms/) | Productivity | Create forms, analyze submissions, and download files. |
| `cohere` | [Cohere Docs](third_party/cohere/) | Documentation | Search Cohere's official documentation for the Command and Embed models and the Cohere API. |
| `coindesk` | [CoinDesk](third_party/coindesk/) | Finance | Access Live & Historical Crypto Data, Indices. |
| `coingecko` | [CoinGecko](third_party/coingecko/) | Finance | Track cryptocurrency prices, markets, exchanges, and trending coins. |
| `coinmarketcap` | [CoinMarketCap](third_party/coinmarketcap/) | Finance | Real-time crypto market and on-chain data analysis. |
| `coinversa-pulse` | [Coinversa Pulse](third_party/coinversa-pulse/) | Developer Tools | Live crypto, stock, gold & oil trading data from Hyperliquid: see what the best traders and whales are doing on Bitcoin, ETH, the S&P 500 and more. |
| `common-room` | [Common Room](third_party/common-room/) | Marketing | Your GTM Copilot. |
| `conductor` | [Conductor](third_party/conductor/) | Analytics | Analyze your brand presence and sentiment in AI. |
| `confidence` | [Spotify Confidence](third_party/confidence/) | Analytics | Access Confidence feature flags, experiments, and migration tools directly from Claude Code. |
| `consensus` | [Consensus](third_party/consensus/) | Science | Explore scientific research. |
| `contentful-mcp` | [Contentful MCP](third_party/contentful-mcp/) | Developer Tools | Manage your content from Claude. |
| `contentsquare` | [Contentsquare](third_party/contentsquare/) | Analytics | Experience analytics platform for digital businesses. |
| `context7` | [Context7](third_party/context7/) | Documentation | Pull up-to-date, version-specific library docs and code examples into the prompt. |
| `coralogix` | [Coralogix](third_party/coralogix/) | Analytics | Explore and debug your Coralogix observability data. |
| `cortellis` | [Cortellis Regulatory Intelligence](third_party/cortellis/) | Science | Trusted Regulatory Answers, by Clarivate Cortellis. |
| `cortellis-cmc` | [Cortellis CMC Intelligence](third_party/cortellis-cmc/) | Science | Trusted regulatory CMC insights, powered by Clarivate’s Cortellis CMC Intelligence. |
| `coupler-io` | [Coupler.io](third_party/coupler-io/) | Marketing | Access business data from hundreds of sources. |
| `coursera` | [Coursera](third_party/coursera/) | Productivity | Transform your prompts into active skill-building. |
| `courtlistener` | [CourtListener](third_party/courtlistener/) | Legal | Legal research across millions of court records. |
| `courtroom5` | [Courtroom5](third_party/courtroom5/) | Legal | Civil legal guidance for self-represented litigants. |
| `craft` | [Craft](third_party/craft/) | Productivity | Notes & second brain. |
| `crossbeam` | [Crossbeam](third_party/crossbeam/) | Communication | Explore partner data and ecosystem insights in Claude. |
| `crowdsec` | [CrowdSec](third_party/crowdsec/) | Security | Install, configure, operate, and debug CrowdSec, and use the CrowdSec Console Service API. |
| `crowdstrike-falcon-foundry` | [CrowdStrike Falcon Foundry](third_party/crowdstrike-falcon-foundry/) | Security | Build CrowdStrike Falcon Foundry applications: functions, workflows, UI extensions and collections. |
| `crunchbase` | [Crunchbase](third_party/crunchbase/) | Finance | Access reliable company data, market signals, and forward-looking predictions to research organizations, compare performance, uncover emerging trends, and make faster, more informed business decisions. |
| `crustdata` | [Crustdata](third_party/crustdata/) | Developer Tools | Search and enrich B2B company and people data. |
| `crypto-com` | [Crypto.com](third_party/crypto-com/) | Finance | Real time prices, orders, charts, and more for crypto. |
| `daloopa` | [Daloopa](third_party/daloopa/) | Finance | Financial fundamental data and KPIs with hyperlinks. |
| `databases-on-aws` | [Databases on AWS](third_party/databases-on-aws/) | Database | Expert database guidance for the AWS database portfolio. |
| `datadog` | [Datadog](third_party/datadog/) | Observability | Use Datadog directly in Claude Code through a preconfigured Datadog MCP server. |
| `datahub` | [DataHub](third_party/datahub/) | Analytics | Connect AI agents to enterprise data & context. |
| `datarails` | [Datarails FinanceOS](third_party/datarails/) | Finance | Query and analyze your company's consolidated financial data from Datarails FinanceOS. |
| `dataverse` | [Microsoft Dataverse](third_party/dataverse/) | Database | Microsoft Dataverse plugin for coding agents, covering record CRUD, bulk data operations, advanced queries, schema and metadata, administration, security, environment management, and solution |
| `deepeval` | [DeepEval](third_party/deepeval/) | AI | Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports, and iterative improvement loops to AI applications. |
| `deepl` | [DeepL](third_party/deepl/) | Communication | Translate text and documents across 100+ languages, with your preferred styles applied. |
| `deepwiki` | [DeepWiki](third_party/deepwiki/) | Documentation | Ask questions about any public GitHub repository and read its generated wiki. |
| `deploy-on-aws` | [Deploy on AWS](third_party/deploy-on-aws/) | Cloud | Deploy applications to AWS with architecture recommendations, cost estimates, and IaC deployment. |
| `descript` | [Descript](third_party/descript/) | Design | Import, edit, or create video with prompts. |
| `descrybe-legal-engine` | [Descrybe Legal Engine](third_party/descrybe-legal-engine/) | Legal | Ground your work in clean, structured U.S. primary law. |
| `desktop-commander` | [Desktop Commander](third_party/desktop-commander/) | Developer Tools | MCP server for terminal commands, process management, and file operations across text files, code, PDF, DOCX, Excel, images, and structured data |
| `devrev` | [DevRev](third_party/devrev/) | Analytics | Search and update your company's knowledge graph. |
| `dhs-surveys` | [Demographic and Health Surveys](third_party/dhs-surveys/) | Science | Data from The Demographic and Health Surveys Program. |
| `dice` | [Dice](third_party/dice/) | Productivity | Find active tech jobs on Dice. |
| `docusign` | [Docusign](third_party/docusign/) | Legal | Intelligent, secure contract management by Docusign. |
| `dovetail` | [Dovetail](third_party/dovetail/) | Productivity | Turn scattered feedback into decisions grounded in customer evidence. |
| `drata` | [Drata](third_party/drata/) | Productivity | Agentic Trust Management on demand. |
| `dropbox` | [Dropbox](third_party/dropbox/) | Legal | Search, organize, and take action on your Dropbox content. |
| `duckdb-skills` | [DuckDB Skills](third_party/duckdb-skills/) | Data | Read data files, query DuckDB databases, and search DuckDB documentation. |
| `duende-skills` | [Duende Skills](third_party/duende-skills/) | Security | Build secure identity solutions with Duende IdentityServer, BFF, OAuth 2.0 and OpenID Connect on ASP.NET Core. |
| `dynatrace` | [Dynatrace](third_party/dynatrace/) | Observability | Connect Claude Code to your Dynatrace environment and investigate production issues, review deployments, and check for vulnerabilities using real data pulled directly into your session: root cause |
| `eden-by-basecamp-research` | [EDEN by Basecamp Research](third_party/eden-by-basecamp-research/) | Science | Design antibiotics and prioritise vaccine targets against drug-resistant pathogens using EDEN, Basecamp Research's biological foundation model. |
| `egnyte` | [Egnyte](third_party/egnyte/) | Finance | Securely search and analyze your Egnyte content. |
| `elevenlabs` | [ElevenLabs](third_party/elevenlabs/) | Developer Tools | Manage your ElevenAgents voice agents in your chat. |
| `elicit` | [Elicit](third_party/elicit/) | Science | Search and analyze scientific papers. |
| `enterpret` | [Enterpret](third_party/enterpret/) | Analytics | Get answers from unified feedback of your customers. |
| `era-context` | [Era Context](third_party/era-context/) | Finance | Manage your personal finances using Claude. |
| `eraser` | [Eraser](third_party/eraser/) | Developer Tools | Generate, manage, and update Eraser diagrams and files. |
| `etherscan` | [Etherscan](third_party/etherscan/) | Developer Tools | Explore wallets, tokens, transactions, contracts, logs, blocks, and gas across 60+ EVM chains with Etherscan. |
| `euler` | [EULER](third_party/euler/) | Marketing | Manage your partner program and access your Partner Data Lake with Claude. |
| `everlaw` | [Everlaw](third_party/everlaw/) | Legal | Search and explore your Everlaw database in Claude. |
| `evernote` | [Evernote](third_party/evernote/) | Education | Connect Evernote to search, edit, and organize your notes, create new ones, and bring your knowledge into every conversation. |
| `exa` | [Exa](third_party/exa/) | Search | Search the web and fetch page content with Exa. |
| `excalidraw` | [Excalidraw](third_party/excalidraw/) | Design | Create and edit hand-drawn style diagrams, wireframes, and sketches from text prompts. |
| `expensify` | [Expensify](third_party/expensify/) | Finance | Search and analyze your Expensify data. |
| `expo` | [Expo](third_party/expo/) | Mobile | Build, deploy, upgrade and debug Expo and React Native apps, including EAS. |
| `factset` | [FactSet AI-Ready Data](third_party/factset/) | Finance | Access institutional-quality financial data and analytics. |
| `fastly-agent-toolkit` | [Fastly Agent Toolkit](third_party/fastly-agent-toolkit/) | Cloud | Work with the Fastly CLI, Compute, Fiddle, NGWAF, VCL tooling and reference architectures. |
| `fastmail` | [Fastmail](third_party/fastmail/) | Communication | An MCP server for Fastmail customers and accounts. |
| `fathom` | [Fathom – Your Meeting Intelligence Layer](third_party/fathom/) | Productivity | Your meeting notes, transcripts, and context – now part of every Claude conversation. |
| `fellow-ai` | [Fellow.ai](third_party/fellow-ai/) | Communication | Chat with your meetings to uncover actionable insights. |
| `felt-maps` | [Felt Maps](third_party/felt-maps/) | Analytics | Map and analyze your geospatial data. |
| `fibery` | [Fibery](third_party/fibery/) | Analytics | Build your modular workspace with Claude: describe any process, from roadmaps and CRM to hiring and OKRs, and get it set up in Fibery, a work platform for orgs run by nerds. |
| `fiftyone` | [FiftyOne](third_party/fiftyone/) | AI | Build high-quality datasets and computer vision models. |
| `figma` | [Figma](third_party/figma/) | Design | Turn Figma frames into code and read design tokens, components, and variables. |
| `files-com` | [Files.com](third_party/files-com/) | Analytics | The Secure File Orchestration Platform. |
| `financial-datasets` | [Financial Datasets](third_party/financial-datasets/) | Finance | Access stock market data. |
| `firecrawl` | [Firecrawl](third_party/firecrawl/) | Search | Search the web, read pages, and research documentation with Firecrawl. |
| `fireflies` | [Fireflies](third_party/fireflies/) | Productivity | Analyze and generate insights from meeting transcripts. |
| `fireworks-ai` | [Fireworks AI Docs](third_party/fireworks-ai/) | Documentation | Search Fireworks AI's official documentation for inference, fine-tuning, and deployed models. |
| `fiscal-ai` | [Fiscal.ai](third_party/fiscal-ai/) | Finance | Clean Public Equity Fundamental Data. |
| `floot` | [Floot](third_party/floot/) | Developer Tools | Build and host websites and mobile apps using your own Claude subscription. |
| `flourish` | [Flourish](third_party/flourish/) | Productivity | Turn data into interactive charts you can edit. |
| `fmp` | [FMP](third_party/fmp/) | Finance | Comprehensive financial market data. |
| `forge-skills` | [Atlassian Forge Skills](third_party/forge-skills/) | Developer Tools | Forge app builder skill bundle with Forge MCP configuration for Atlassian Forge workflows. |
| `framer` | [Framer](third_party/framer/) | Developer Tools | Design, update, and publish websites with Framer. |
| `freee` | [freee](third_party/freee/) | Productivity | freeeの各種プロダクトへのデータ下書作成、自動登録、登録済みデータの分析 / Draft, register, and analyze data across freee products. |
| `frontify` | [Frontify](third_party/frontify/) | Design | Access your brand guidelines, assets and creative templates. |
| `fullstory` | [Fullstory](third_party/fullstory/) | Developer Tools | Product analytics with receipts. Build segments, compute metrics, and analyze conversions from your Fullstory behavioral data. Then pull the real sessions to back it up. |
| `funnel` | [Funnel](third_party/funnel/) | Analytics | Cross-channel marketing analytics across 600+ connectors. |
| `fyxer` | [Fyxer](third_party/fyxer/) | Productivity | Search your inbox, and draft replies in your voice. |
| `g2` | [G2](third_party/g2/) | Marketing | Bring real buyer signals into AI workflows. |
| `gainsight` | [Gainsight (Staircase AI)](third_party/gainsight/) | Productivity | Power AI Workflows with Customer Context. |
| `gamma` | [Gamma](third_party/gamma/) | Productivity | Create presentations, docs, socials, and sites with AI. |
| `gc-ai` | [GC AI](third_party/gc-ai/) | Legal | Use a GC AI legal knowledge base: upload documents, run review playbooks and ask grounded questions. |
| `gem` | [Gem](third_party/gem/) | Analytics | Access, analyze, and manage your Gem data in Claude. |
| `general-legal` | [General Legal](third_party/general-legal/) | Legal | Submit contracts for attorney review, answer their questions, and get redlined documents back — without leaving Claude. |
| `gitea` | [Gitea](third_party/gitea/) | Source Control | Work with Gitea repositories, issues, pull requests, and releases through your own gitea-mcp server. |
| `github` | [GitHub](third_party/github/) | Source Control | Manage repos, issues, pull requests, and Actions. |
| `gitlab` | [GitLab](third_party/gitlab/) | Source Control | Work with GitLab projects, issues, merge requests, pipelines, and code search. |
| `glg` | [GLG](third_party/glg/) | Finance | Expert intelligence, instantly in your workflow. |
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
| `grain` | [Grain](third_party/grain/) | Productivity | Put your meetings to work. |
| `granola` | [Granola](third_party/granola/) | Productivity | The AI notepad for meetings, now in Claude. Ask about your notes, transcripts and meeting context. |
| `granted` | [Granted](third_party/granted/) | Data | Discover every grant opportunity in existence. |
| `greenhouse` | [Greenhouse](third_party/greenhouse/) | Developer Tools | Connect Claude to Greenhouse. Search, analyze and update candidates, applications, jobs, interviews, scorecards, offers and more in plain language. |
| `greptile` | [Greptile](third_party/greptile/) | Developer Tools | Read and resolve Greptile pull request reviews and search your organization's coding patterns. |
| `growthbook` | [GrowthBook](third_party/growthbook/) | Analytics | Manage GrowthBook feature flags, experiments, and product analytics. |
| `guidepoint` | [Guidepoint](third_party/guidepoint/) | Finance | Real-time access to trusted expert knowledge. |
| `guru` | [Guru](third_party/guru/) | Productivity | Search and interact with your company knowledge. |
| `gusto` | [Gusto](third_party/gusto/) | Finance | Query and analyze your Gusto data. |
| `harmonic` | [Harmonic](third_party/harmonic/) | Productivity | Discover, research, and enrich companies and people. |
| `harvey` | [Harvey](third_party/harvey/) | Legal | Answer legal queries, search vaults, and research. |
| `health-data-avatar` | [Health Data Avatar (HDA)](third_party/health-data-avatar/) | Science | Your complete health history structured for Claude. |
| `helena-by-enrich-labs` | [Helena by Enrich Labs](third_party/helena-by-enrich-labs/) | Commerce | Your AI marketer for paid ads, SEO, email, social, and analytics. |
| `helium-10` | [Helium 10](third_party/helium-10/) | Commerce | Access your Helium 10 data directly in Claude. |
| `heygen-hyperframes` | [HyperFrames by HeyGen](third_party/heygen-hyperframes/) | Design | Build animated slides and motion graphics with HTML. |
| `highspot` | [Highspot](third_party/highspot/) | Marketing | Search, share content, and take action to win deals. |
| `hive` | [Hive](third_party/hive/) | Analytics | Manage projects, tasks, approvals, resources, and customer work in Hive. |
| `honeycomb` | [Honeycomb](third_party/honeycomb/) | Observability | Skills, agents, and workflows for Honeycomb observability — query patterns, production investigations, SLOs, OpenTelemetry instrumentation, and Beeline migration. |
| `hubspot-crm` | [HubSpot](third_party/hubspot-crm/) | Marketing | CRM context for every answer, insight, and action. |
| `huggingface` | [Hugging Face](third_party/huggingface/) | AI | Search Hugging Face for models, datasets, and spaces. |
| `hunter` | [Hunter](third_party/hunter/) | Productivity | Find and verify professional email addresses with Hunter. |
| `ibisworld` | [IBISWorld](third_party/ibisworld/) | Finance | Financials, risk data and analysis on 50,000 industries. |
| `ibkr` | [Interactive Brokers (IBKR)](third_party/ibkr/) | Finance | Trade, invest, analyze, and manage global markets. |
| `idiolect` | [Idiolect](third_party/idiolect/) | Productivity | Make Claude write in your real writing voice. |
| `idmp-plugin` | [TDengine IDMP](third_party/idmp-plugin/) | Database | TDengine IDMP plugin with packaged skills for discovery, schema inspection, and safe operational workflows. |
| `ifttt` | [IFTTT](third_party/ifttt/) | Productivity | Connect, control, and automate 1,000+ apps with IFTTT. |
| `imanage-work` | [iManage Work](third_party/imanage-work/) | Legal | Governed knowledge. AI ready. |
| `incident-io` | [incident.io](third_party/incident-io/) | Observability | Look up and manage incidents in incident.io. |
| `indeed` | [Indeed](third_party/indeed/) | Productivity | Search for jobs on Indeed. |
| `inductive-bio` | [Inductive Bio](third_party/inductive-bio/) | Science | State-of-the-art ADMET prediction models for drug discovery. |
| `informatica-for-claude-platform` | [Informatica](third_party/informatica-for-claude-platform/) | Data | Informatica plugin for Claude Platform (Claude Code & Claude CoWork) — governed catalog discovery, data Q&A, powered by Informatica's Data catalog and Governance to understand and evaluate enterprise |
| `inkbox` | [Inkbox](third_party/inkbox/) | Developer Tools | Email, SMS, and iMessage for AI agents. |
| `instacart` | [Instacart](third_party/instacart/) | Productivity | Groceries and more delivered as fast as 30 minutes. |
| `intercom` | [Intercom](third_party/intercom/) | Productivity | Search Intercom conversations, contacts, and help center articles. |
| `intuit-developer` | [Intuit Developer](third_party/intuit-developer/) | Developer Tools | Build and test integrations with Intuit APIs. |
| `ironclad-contracts` | [Ironclad Contracts](third_party/ironclad-contracts/) | Legal | Plain language search for faster contract answers and manage your contractual obligations. |
| `jam` | [Jam](third_party/jam/) | Developer Tools | Record screen and collect automatic context for issues. |
| `jasper` | [Jasper](third_party/jasper/) | Marketing | Keep every Claude session on-brand. |
| `jotform` | [Jotform](third_party/jotform/) | Education | Create forms, surveys, quizzes & analyze submissions. |
| `jotform-app-builder` | [Jotform App Builder](third_party/jotform-app-builder/) | Developer Tools | Build and manage no-code apps with AI. Create CRM apps, event apps, school apps, and internal tools. Customize layouts, automate workflows, and publish and share apps. |
| `jotform-sign` | [Jotform Sign](third_party/jotform-sign/) | Education | Create, share, and edit e-signature documents right inside Claude. |
| `juro-contracts` | [Juro contracts](third_party/juro-contracts/) | Legal | Query & work with contracts effortlessly throughout the lifecycle to agree contracts faster. |
| `kahoot` | [Kahoot!](third_party/kahoot/) | Education | Create kahoots instantly. |
| `kit` | [Kit](third_party/kit/) | Analytics | Search, analyze, draft, and manage your email marketing. |
| `kiwi-com` | [Kiwi.com](third_party/kiwi-com/) | Productivity | Search flights in Claude. |
| `klaviyo` | [Klaviyo](third_party/klaviyo/) | Analytics | Report, strategize & create with real-time Klaviyo data. |
| `klue` | [Klue](third_party/klue/) | Marketing | Access competitive intelligence, win-loss, & deal support. |
| `krisp` | [Krisp](third_party/krisp/) | Productivity | Add your meetings context via transcripts and notes. |
| `langfuse` | [Langfuse](third_party/langfuse/) | Observability | Work with Langfuse tracing, prompts and evaluation, and migrate prompts to Langfuse. |
| `latchbio` | [LatchBio](third_party/latchbio/) | Science | Analyze data and launch bioinformatics workflows. |
| `lattice` | [Lattice](third_party/lattice/) | Productivity | Lattice, wherever you work. |
| `leadfeeder` | [Leadfeeder](third_party/leadfeeder/) | Productivity | Look up companies that visit your website with Leadfeeder. |
| `legal-data-hunter` | [Legal Data Hunter](third_party/legal-data-hunter/) | Legal | Search 23M+ legal docs in 160+ jurisdictions. |
| `legalzoom` | [LegalZoom](third_party/legalzoom/) | Legal | Attorney guidance & tools for business & personal needs. |
| `linear` | [Linear](third_party/linear/) | Project Management | Find, create, and update Linear issues, projects, and cycles. |
| `linkedin-hiring-pro` | [LinkedIn Hiring Pro](third_party/linkedin-hiring-pro/) | Productivity | Draft, review, and post one free LinkedIn job from Claude. |
| `listen-labs` | [Listen Labs](third_party/listen-labs/) | Productivity | Analyze user insights from Listen Labs. |
| `local-falcon` | [Local Falcon](third_party/local-falcon/) | Marketing | AI visibility and local search intelligence platform. |
| `logfire` | [Pydantic Logfire](third_party/logfire/) | Observability | Add Logfire observability to Python apps, query traces, and set up evals. |
| `lovable` | [Lovable](third_party/lovable/) | Developer Tools | Build, iterate, inspect, and deploy Lovable apps. |
| `lseg` | [LSEG](third_party/lseg/) | Finance | Access best in class data & analytics across a broad spectrum of asset classes. |
| `lucid` | [Lucid](third_party/lucid/) | Design | Ideate, diagram, and align teams. |
| `lumen` | [Lumen](third_party/lumen/) | Developer Tools | Precise local semantic code search via MCP. |
| `lunarcrush` | [LunarCrush](third_party/lunarcrush/) | Finance | Add real-time social media data to your searches. |
| `lusha` | [Lusha](third_party/lusha/) | Sales | Connect Lusha to Claude to pull verified B2B data, contact data, and company data — including verified emails, direct dials, mobile numbers, and real-time buying signals — straight into your conversation. |
| `macaly-cloud` | [Macaly Cloud](third_party/macaly-cloud/) | Developer Tools | Claude writes the code, Macaly runs it - a git repo, cloud sandbox, database, live preview and production hosting for the apps you build in chat. |
| `magic-patterns` | [Magic Patterns](third_party/magic-patterns/) | Productivity | Discuss and iterate on Magic Patterns designs. |
| `mailerlite` | [MailerLite](third_party/mailerlite/) | Communication | Turn Claude into your email marketing assistant. |
| `make` | [Make](third_party/make/) | Automation | Run Make scenarios and manage your Make account. |
| `malwarebytes` | [Malwarebytes](third_party/malwarebytes/) | Productivity | Check links, phones, and emails for scams. |
| `mapbox` | [Mapbox](third_party/mapbox/) | Maps | Build location-aware apps with Mapbox: maps, search, navigation, styles and geospatial tools. |
| `maven-bio` | [Maven Bio](third_party/maven-bio/) | Science | Biopharma catalysts, pipelines, trials, deals, and the citable primary sources behind them. |
| `mcp-betterstack-com` | [mcp.betterstack.com](third_party/mcp-betterstack-com/) | Developer Tools | Better Stack plugin for Claude: observability for AI agents (logs, metrics, dashboards, uptime, incidents). |
| `medidata` | [Medidata](third_party/medidata/) | Science | Clinical trial software and site ranking tools. |
| `meltwater` | [Meltwater](third_party/meltwater/) | Analytics | Search and analyze billions of news articles and social posts. |
| `mem` | [Mem](third_party/mem/) | Productivity | The AI notebook for everything on your mind. |
| `mem0` | [Mem0](third_party/mem0/) | Developer Tools | Persistent memory for AI agents & assistants. |
| `menti` | [Menti](third_party/menti/) | Education | Make Mentimeter presentations. |
| `mercadopago` | [Mercado Pago](third_party/mercadopago/) | Payments | Mercado Pago integration toolkit for Claude Code. |
| `mercury` | [Mercury](third_party/mercury/) | Finance | Understand your finances, organize/categorize transactions, and set up payments and transfers for approval in Mercury. |
| `meridian-quickbooks` | [Meridian Connector for QuickBooks](third_party/meridian-quickbooks/) | Finance | Make changes to QuickBooks Online from within Claude. |
| `mermaid-chart` | [Mermaid Chart](third_party/mermaid-chart/) | Design | Validates Mermaid syntax, renders diagrams as high-quality SVG, and displays them instantly in an interactive UI where users can preview, zoom, and iterate in real time. |
| `metaview` | [Metaview](third_party/metaview/) | Productivity | The AI platform for recruiting. |
| `metricool` | [Metricool Social Media Management](third_party/metricool/) | Marketing | Schedule posts, analyze, and manage social media with AI. |
| `microsoft-learn` | [Microsoft Learn](third_party/microsoft-learn/) | Documentation | Search official Microsoft docs and code samples for .NET, Azure, MAUI, and more. |
| `midpage` | [Midpage Legal Research](third_party/midpage/) | Legal | Conduct legal research and create work product. |
| `mintlify` | [Mintlify](third_party/mintlify/) | Documentation | Search Mintlify documentation and manage your docs site. |
| `miro` | [Miro](third_party/miro/) | Design | Access and create new content on Miro boards. |
| `mixpanel` | [Mixpanel](third_party/mixpanel/) | Analytics | Analyze, query, and manage your Mixpanel data. |
| `mobbin` | [Mobbin](third_party/mobbin/) | Developer Tools | Find UI & UX design references. |
| `moda-slides-and-designs` | [Moda - Slides and Designs](third_party/moda-slides-and-designs/) | Design | Fully editable PowerPoints, Meta ads, motion graphics & social. |
| `modern-web-guidance` | [Modern Web Guidance](third_party/modern-web-guidance/) | Developer Tools | Keep your coding agent up to date with the latest web best practices |
| `monday` | [monday.com](third_party/monday/) | Project Management | Manage monday.com boards, items, and workspaces. |
| `mongodb` | [MongoDB](third_party/mongodb/) | Database | Connect to any MongoDB deployment (Community, Enterprise Advanced, local dev container via Atlas CLI or Atlas clusters) through a self-managed MongoDB MCP Server using your connection string. |
| `monte-carlo` | [Monte Carlo](third_party/monte-carlo/) | Analytics | Data & AI observability. |
| `moodys-credit` | [Moody's Credit MCP](third_party/moodys-credit/) | Finance | Risk insights, analytics, and decision intelligence. |
| `morning-consult` | [Morning Consult](third_party/morning-consult/) | Analytics | Global market intelligence: brands, economy & politics. |
| `morningstar` | [Morningstar](third_party/morningstar/) | Finance | Up-to-date investment and market insights. |
| `morningstar-credit` | [Morningstar Credit Analytics](third_party/morningstar-credit/) | Finance | Structured credit insights and analytics. |
| `motherduck` | [MotherDuck](third_party/motherduck/) | Analytics | Get answers from your data. |
| `motion` | [Motion Creative Analytics](third_party/motion/) | Analytics | Analyze your Meta ad creative & competitor ad libraries. |
| `msci-connector` | [MSCI Connector](third_party/msci-connector/) | Finance | Data you can build on. |
| `mt-newswires` | [MT Newswires](third_party/mt-newswires/) | Finance | Trusted real-time global financial news provider. |
| `mychatbot` | [MyChatBot](third_party/mychatbot/) | Commerce | Build and run an AI sales agent for your business. |
| `navan` | [Navan](third_party/navan/) | Finance | Access and analyze your Navan financial and travel data. |
| `neon` | [Neon](third_party/neon/) | Database | Manage Neon serverless Postgres projects, branches, queries, and migrations. |
| `netdocuments` | [NetDocuments](third_party/netdocuments/) | Legal | Securely access your documents in NetDocuments. |
| `netlify` | [Netlify](third_party/netlify/) | Hosting | Create, deploy, manage, and secure websites on Netlify. |
| `netlify-skills` | [Netlify](third_party/netlify-skills/) | Hosting | Netlify platform skills for Claude Code |
| `nimble` | [Nimble](third_party/nimble/) | Analytics | Real-time web search & extraction for AI agents. |
| `noibu` | [Noibu](third_party/noibu/) | Observability | Work with Noibu error and performance data for e-commerce sites. |
| `nooks` | [Nooks](third_party/nooks/) | Productivity | Search, access, and get insights on your Nooks data. |
| `notion` | [Notion](third_party/notion/) | Documentation | Search, read, and update Notion pages and databases. |
| `o-reilly` | [O’Reilly](third_party/o-reilly/) | Productivity | Discover O'Reilly's expert learning content. |
| `ollama` | [Ollama Docs](third_party/ollama/) | Documentation | Search Ollama's official documentation for running and serving local large language models. |
| `omni-analytics` | [Omni Analytics](third_party/omni-analytics/) | Analytics | Query your data using natural language through Omni's semantic model. |
| `omnisend` | [Omnisend MCP](third_party/omnisend/) | Marketing | Analyze your Omnisend marketing performance. |
| `ontra` | [Ontra](third_party/ontra/) | Finance | Query your Ontra data directly from any AI tool. |
| `open-targets` | [Open Targets](third_party/open-targets/) | Science | Drug target discovery and prioritisation platform. |
| `openrush` | [OpenRush](third_party/openrush/) | Commerce | SEO and competitor analysis with live search data: keyword research, rank tracking, gap analysis, and site audits. |
| `openseo` | [OpenSEO](third_party/openseo/) | Developer Tools | SEO made simple. |
| `opusclip` | [OpusClip](third_party/opusclip/) | Marketing | Turn long videos into viral short clips. |
| `opusclip-ai-producer` | [AI Producer by OpusClip](third_party/opusclip-ai-producer/) | Marketing | Edit videos with AI. |
| `orshot` | [Orshot](third_party/orshot/) | Design | Automate Videos, PDFs and Images from templates for marketing, post to social platforms, and track and grow engagement. |
| `otter-ai` | [Otter.ai](third_party/otter-ai/) | Productivity | Unlock your meeting intelligence. |
| `otto-travel` | [Otto Travel](third_party/otto-travel/) | Productivity | Plan, book, and manage business travel. |
| `outputai` | [Output.ai](third_party/outputai/) | Developer Tools | Workflow development tools |
| `outreach` | [Outreach](third_party/outreach/) | Marketing | Unleash your team's best performance with Outreach AI. |
| `owkin` | [Owkin](third_party/owkin/) | Science | Interact with AI agents built for biology. |
| `oxford-economics` | [Oxford Economics](third_party/oxford-economics/) | Finance | Access Oxford Economics’ trusted economic analysis and data directly in Claude. |
| `padlet` | [Padlet](third_party/padlet/) | Education | Create and manage padlets. |
| `pagerduty` | [PagerDuty](third_party/pagerduty/) | Observability | Browse PagerDuty services, incidents, and change events. |
| `pandadoc` | [PandaDoc](third_party/pandadoc/) | Productivity | Create, send, sign and track documents. |
| `parallel-search` | [Parallel Search](third_party/parallel-search/) | Developer Tools | Free token-efficient search using Parallel. |
| `paxton-legal-research` | [Paxton Legal Research](third_party/paxton-legal-research/) | Legal | Research U.S. law in Claude—with citations you can open and verify. |
| `payhawk` | [Payhawk](third_party/payhawk/) | Finance | Ask and act on company spend: cards, invoices, travel. |
| `paypal` | [PayPal](third_party/paypal/) | Payments | PayPal development plugin for Claude — integrate payments, subscriptions, invoices, disputes, and more using PayPal's APIs and MCP server |
| `pdf-net` | [PDF.net](third_party/pdf-net/) | Productivity | Generate and edit pdfs. |
| `peec-ai` | [Peec AI](third_party/peec-ai/) | Analytics | Analyze your brand's visibility across LLMs. |
| `pendo-analytics` | [Pendo Analytics](third_party/pendo-analytics/) | Analytics | Bring Pendo analytics into Claude Code with skills for app health, account health, feature adoption, session replays, feedback analysis, and data-informed planning |
| `pendo-guides` | [Pendo Guides](third_party/pendo-guides/) | Analytics | Create production-ready Pendo in-app guides (walkthroughs, announcements, alerts, polls, promotions) as HTML/CSS/JS from a short intake conversation |
| `pendo-orchestrate` | [Pendo Orchestrate](third_party/pendo-orchestrate/) | Analytics | Create, configure, and edit draft Orchestrate email journeys via Pendo MCP — multi-email journeys and conditional split flows. |
| `perplexity` | [Perplexity Docs](third_party/perplexity/) | Documentation | Search Perplexity's official Sonar and API documentation. |
| `phoenix-by-hg-insights` | [Phoenix by HG Insights](third_party/phoenix-by-hg-insights/) | Analytics | AI-powered B2B data intelligence & analytics. |
| `pinegap` | [Pinegap](third_party/pinegap/) | Finance | AI-powered Equity Research Platform. |
| `pipedrive` | [Pipedrive](third_party/pipedrive/) | Analytics | Find deals, update records, manage activities and work with your live CRM data using natural language. |
| `pitch` | [Pitch](third_party/pitch/) | Design | Create, edit, and share presentations, then see who engaged with them. |
| `pitchbook-premium` | [PitchBook Premium](third_party/pitchbook-premium/) | Finance | PitchBook data, embedded in the way you work. |
| `plaid-developer-tools` | [Plaid Developer Tools](third_party/plaid-developer-tools/) | Finance | Monitor, debug, and optimize your Plaid integration. |
| `planetscale` | [PlanetScale](third_party/planetscale/) | Database | Inspect PlanetScale organizations, databases, branches, schema and Insights data. |
| `plaud` | [Plaud](third_party/plaud/) | Productivity | Search and extract insights from your Plaud recordings. |
| `play-sheet-music` | [Play Sheet Music](third_party/play-sheet-music/) | Productivity | Ask Claude to generate and play some sheet music for you with a visual component. |
| `playmcp` | [PlayMCP](third_party/playmcp/) | Productivity | Connect and use PlayMCP servers in your toolbox. |
| `pocketsmith-complete-access` | [PocketSmith Complete Access](third_party/pocketsmith-complete-access/) | Finance | Search and categorise transactions, track your budgets and analyse spending trends, forecast your net worth and monitor your cashflow! Work with your live PocketSmith data in plain language. |
| `polar-analytics` | [Polar Analytics](third_party/polar-analytics/) | Analytics | Bring all your data in one place & connect it to Claude. |
| `posthog` | [PostHog](third_party/posthog/) | Analytics | Query product analytics, manage feature flags, and investigate errors in PostHog. |
| `postman` | [Postman](third_party/postman/) | Developer Tools | Work with Postman from your agent: bootstrap a repo's Postman setup, mock an API before it's implemented, run collection and governance checks in CI, monitor a live endpoint, deploy and debug Postman |
| `preset-cli-skills` | [Preset CLI](third_party/preset-cli-skills/) | Analytics | Preset CLI skills for explicit shell, scripting, and CI/CD workflows driven by the `sup` CLI (PyPI package `superset-sup`). |
| `productive` | [Productive](third_party/productive/) | Analytics | Run projects, tasks, time tracking, budgets, and invoicing in your Productive workspace, straight from chat. |
| `profound` | [Profound](third_party/profound/) | Marketing | Pull Profound Visibility, Citation, & AI Bot Visit Data. |
| `pydantic-ai` | [Pydantic AI](third_party/pydantic-ai/) | AI | Build production-grade AI agents with Pydantic AI — tools, capabilities, structured output, streaming, and testing patterns — and port existing agents over from LangChain, the OpenAI Agents SDK, |
| `pylon` | [Pylon](third_party/pylon/) | Communication | Search and manage Pylon support issues. |
| `qdrant-skills` | [Qdrant Skills](third_party/qdrant-skills/) | Database | Agent skills for Qdrant vector search: scaling, performance optimization, search quality, monitoring, deployment, edge, model migration, multitenancy, version upgrades, and SDK usage |
| `qodo` | [Qodo](third_party/qodo/) | Developer Tools | Qodo setup, code intelligence, and review workflows. |
| `qodo-standards` | [Qodo Standards](third_party/qodo-standards/) | Developer Tools | Optional Qodo standards discovery and review rules/skills administration workflows. |
| `qonto` | [Qonto](third_party/qonto/) | Finance | Manage your Qonto business finances from Claude. |
| `quartr` | [Quartr](third_party/quartr/) | Finance | Financial data and AI infrastructure for company research. |
| `quo` | [Quo](third_party/quo/) | Communication | Surface call insights and missed opportunities. |
| `railway` | [Railway](third_party/railway/) | Developer Tools | Deploy, manage, and debug your apps and infrastructure on Railway. |
| `ramp` | [Ramp](third_party/ramp/) | Finance | Search, access, and analyze your Ramp financial data. |
| `ramp-data` | [Ramp Data](third_party/ramp-data/) | Finance | Search and analyze Ramp spend across 50,000+ businesses. |
| `razorpay` | [Razorpay](third_party/razorpay/) | Productivity | Turn Claude into your Razorpay Dashboard Assistant. |
| `read-ai` | [Read AI](third_party/read-ai/) | Communication | Bring your meetings into Claude. |
| `readwise` | [Readwise](third_party/readwise/) | Productivity | Save, read, search, and learn. |
| `reclaim-ai` | [Reclaim.ai](third_party/reclaim-ai/) | Productivity | Advanced scheduling for personal and work calendars. |
| `redis-development` | [Redis Development](third_party/redis-development/) | Database | Redis development best practices — data structures, query engine, vector search, caching, and performance optimization |
| `remote` | [Remote](third_party/remote/) | Productivity | Connect any AI to your Remote employment infrastructure. |
| `render` | [Render](third_party/render/) | Hosting | Inspect Render services, deploys, and logs. |
| `replit` | [Replit](third_party/replit/) | Developer Tools | Turn ideas into apps and websites instantly. |
| `resend` | [Resend](third_party/resend/) | Email | Send and receive email with Resend, build emails with React Email, and follow deliverability practices. |
| `resy` | [Resy](third_party/resy/) | Productivity | Find and book restaurants instantly. |
| `revenuecat` | [RevenueCat](third_party/revenuecat/) | Payments | Set up RevenueCat, integrate it, and access data. |
| `rill` | [Rill](third_party/rill/) | Analytics | Skills for developing and querying projects in the Rill business intelligence platform |
| `rillet` | [Rillet](third_party/rillet/) | Finance | Query your live GL and financials in plain English. |
| `ringcentral-chat` | [RingCentral Chat](third_party/ringcentral-chat/) | Communication | Stay on top of team communications and collaborate in RingCentral Team Chat directly within Claude. |
| `rippit` | [Rippit](third_party/rippit/) | Analytics | Run dynamic AI analysis on 100% of conversations. |
| `riverside` | [Riverside](third_party/riverside/) | Media | Prep, edit, clip, and publish your videos and podcasts. |
| `rocketreach` | [RocketReach](third_party/rocketreach/) | Marketing | Verified work emails and phones from 700M+ contacts. |
| `rootly` | [Rootly](third_party/rootly/) | Developer Tools | Connect AI agents to Rootly for incident management, on-call, and reliability data. |
| `runway` | [Runway (runway.team)](third_party/runway/) | Developer Tools | Automate, coordinate, and monitor your team's mobile app releases. |
| `runway-api` | [Runway API](third_party/runway-api/) | Media | Get guidance for integrating video, image and audio generation with the Runway API and official SDKs. |
| `sagemaker-ai` | [Amazon SageMaker AI](third_party/sagemaker-ai/) | AI | Build, train, and deploy AI models with deep AWS AI/ML expertise brought directly into your coding assistants, covering the surface area of Amazon SageMaker AI. |
| `salesloft` | [Salesloft](third_party/salesloft/) | Marketing | Query live data about deals, engagement, and pipeline. |
| `sanity` | [Sanity](third_party/sanity/) | CMS | Model content, write GROQ and Portable Text, and upgrade Sanity Studio. |
| `save-to-spotify` | [Save to Spotify](third_party/save-to-spotify/) | Media | Create polished audio episodes with TTS narration, rich timelines, cover images, and save them to Spotify via the save-to-spotify CLI. |
| `scite` | [Scite](third_party/scite/) | Science | Evidence-based answers grounded in research. |
| `seamless` | [Seamless](third_party/seamless/) | Developer Tools | Find leads and automate outreach. |
| `seismic` | [Seismic](third_party/seismic/) | Productivity | Connect Claude to Seismic MCP for generative search. |
| `semrush` | [Semrush](third_party/semrush/) | Analytics | SEO, keyword research, competitor analysis, traffic and market analytics, backlink analysis, domain analysis, and PPC. |
| `send` | [Send](third_party/send/) | Design | Create HTML in Claude. Share it with Send. |
| `sentry` | [Sentry](third_party/sentry/) | Observability | Investigate Sentry errors, stack traces, and issues for a project. |
| `setup-agent-analytics` | [Pendo Agent Analytics Setup](third_party/setup-agent-analytics/) | Analytics | Detect AI agents in your codebase and instrument them with Pendo agent analytics via the best-fit path: Python SDK, TypeScript SDK, client-side trackAgent(), or the Conversations API |
| `setup-mcp-agent-analytics` | [Pendo MCP Agent Analytics Setup](third_party/setup-mcp-agent-analytics/) | Analytics | Detect an MCP server's language (Python, TypeScript, Go, or Java) and instrument it with the matching Pendo SDK so MCP tool calls flow into Pendo Agent Analytics |
| `shopify` | [Shopify](third_party/shopify/) | Commerce | Build, manage, and analyze your Shopify store. |
| `shutterstock` | [Shutterstock](third_party/shutterstock/) | Design | Spark ideas with Shutterstock. |
| `signnow` | [SignNow](third_party/signnow/) | Legal | Automate eSignature workflows directly from Claude. |
| `similarweb` | [Similarweb](third_party/similarweb/) | Productivity | Real time web, mobile app, and market data. |
| `slack` | [Slack](third_party/slack/) | Productivity | Search Slack messages, read channels and threads, and find context from your workspace. |
| `slicktrip` | [SlickTrip](third_party/slicktrip/) | Commerce | Search flights, hotels and seats, then get alerted the moment a price drops. |
| `slidesgpt` | [SlidesGPT](third_party/slidesgpt/) | Productivity | Make presentations and slides, export to PowerPoint. |
| `snagajob` | [Snagajob](third_party/snagajob/) | Productivity | Find your next job. |
| `snomed-ct` | [SNOMED CT Terminology](third_party/snomed-ct/) | Science | Search, validate, and expand SNOMED CT concepts, directly from SNOMED International. |
| `snowflake-cortex-code` | [Snowflake Cortex Code](third_party/snowflake-cortex-code/) | Database | Automatically route Snowflake prompts from Claude Code to Cortex Code for execution. |
| `solve-intelligence` | [Solve Intelligence](third_party/solve-intelligence/) | Legal | Search, draft, and chart patents. |
| `sonos` | [Sonos](third_party/sonos/) | Media | Control your Sonos system. |
| `sp-kfinance` | [S&P - Deterministic Retrieval](third_party/sp-kfinance/) | Finance | Deterministic access to S&P Global data. |
| `speko` | [Speko](third_party/speko/) | Developer Tools | Make phone calls, transcribe audio, and narrate text. |
| `spiegel-nsdap-archive` | [NSDAP Archiv - DER SPIEGEL](third_party/spiegel-nsdap-archive/) | Education | Search for NSDAP party members. |
| `splice` | [Splice](third_party/splice/) | Design | Search Splice's sounds catalog, build stacks & more! |
| `sprinto` | [Sprinto MCP](third_party/sprinto/) | Security | Manage trust workflows. |
| `square` | [Square](third_party/square/) | Finance | Search and manage transaction, merchant, and payment data. |
| `stack-overflow` | [Stack Overflow](third_party/stack-overflow/) | Developer Tools | Access Stack Overflow's trusted content. |
| `stackhawk-api` | [StackHawk API](third_party/stackhawk-api/) | Security | Query the StackHawk platform API for security posture reporting, findings analysis, and app management. |
| `stackhawk-hawkscan` | [StackHawk HawkScan](third_party/stackhawk-hawkscan/) | Security | Configure, run, and interpret HawkScan DAST results inside Claude Code. |
| `strava` | [Strava](third_party/strava/) | Fitness | Analyze, summarize, and explore your Strava data. |
| `streaming-skills-plugin` | [Confluent Streaming Skills](third_party/streaming-skills-plugin/) | Data | Skills for streaming application developers, covering Kafka and Flink client libraries and Schema Registry |
| `stripe` | [Stripe](third_party/stripe/) | Payments | Work with Stripe customers, payments, subscriptions, and search Stripe docs. |
| `sumble` | [Sumble](third_party/sumble/) | Marketing | Deep research any account's teams, tech, and people. |
| `sumup` | [SumUp](third_party/sumup/) | Payments | Skills for SumUp payment integrations across terminal and online checkout flows |
| `supabase` | [Supabase](third_party/supabase/) | Database | Query Postgres, manage tables, auth, storage, and edge functions in a Supabase project. |
| `super-com` | [Super.com](third_party/super-com/) | Travel | Compare hotels and find the lowest rate. |
| `superdesign` | [Superdesign](third_party/superdesign/) | Design | Design or redesign frontend UI, presentations and marketing graphics with Superdesign. |
| `superhuman-docs` | [Superhuman Docs](third_party/superhuman-docs/) | Productivity | Create, search, update docs and tables. |
| `superhuman-mail` | [Superhuman Mail](third_party/superhuman-mail/) | Communication | The most productive email app ever, for Gmail & Outlook. |
| `supermetrics` | [Supermetrics Marketing Analytics](third_party/supermetrics/) | Analytics | Google Ads, Facebook Ads, Google Analytics, TikTok, LinkedIn, Instagram, YouTube & 200+ sources. |
| `superpowers` | [Superpowers](third_party/superpowers/) | Developer Tools | Core engineering skills: brainstorming, planning, test-driven development, debugging and code review. |
| `surveymonkey` | [SurveyMonkey](third_party/surveymonkey/) | Productivity | Design surveys, collect responses, and analyze results. |
| `swagger` | [Swagger](third_party/swagger/) | Developer Tools | Build, govern, and document APIs. |
| `sybill` | [Sybill](third_party/sybill/) | Productivity | Ask AI about your sales calls, deals & pipeline. |
| `synapse-org` | [Synapse.org](third_party/synapse-org/) | Science | Search and metadata tools for Synapse scientific data. |
| `synthesize-bio` | [Synthesize Bio](third_party/synthesize-bio/) | Science | Generate gene expression from a virtual human. |
| `synthflow` | [Synthflow](third_party/synthflow/) | AI | Connects Claude Code to the Synthflow AI voice-agent platform through its hosted MCP server, with skills for reviewing calls and auditing agent prompts, plus a docs-search connector. |
| `tactiq` | [Tactiq](third_party/tactiq/) | Productivity | Search, summarise & find answers in meetings. |
| `tally` | [Tally](third_party/tally/) | Analytics | Create beautiful forms. |
| `taplio` | [Taplio](third_party/taplio/) | Media | Run your LinkedIn by talking to Claude. Schedule content, pull inspiration from 5M+ viral posts, and get your analytics as plain answers. |
| `tavily` | [Tavily](third_party/tavily/) | Search | Search the web and extract page content with Tavily. |
| `teamcity-cli` | [TeamCity CLI](third_party/teamcity-cli/) | CI/CD | Agent skill for interacting with TeamCity CI/CD using the teamcity CLI. |
| `teamtailor` | [Teamtailor](third_party/teamtailor/) | Productivity | Chat with your recruitment data: jobs, candidates, pipelines, and todos from Teamtailor. |
| `tella` | [Tella](third_party/tella/) | Media | Edit, polish, and publish your Tella videos by chatting with Claude. |
| `text-to-quant` | [TEXT TO QUANT](third_party/text-to-quant/) | Developer Tools | Backtest trading strategies written in plain English on real market data, with graded, honesty flagged reports. |
| `third-bridge` | [Third Bridge](third_party/third-bridge/) | Finance | Expert-led enhanced insights. |
| `thoughtspot-spotter` | [ThoughtSpot Spotter](third_party/thoughtspot-spotter/) | Analytics | Your AI data analyst, from question to trusted insights. |
| `ticket-tailor` | [Ticket Tailor](third_party/ticket-tailor/) | Finance | Event platform for managing tickets, orders & more. |
| `ticktick` | [TickTick](third_party/ticktick/) | Productivity | Search, create and manage your tasks/habit it TickTick. |
| `tiktok-for-business` | [TikTok for Business](third_party/tiktok-for-business/) | Productivity | Create, manage, and analyze advertising campaigns on TikTok. |
| `tinyfish` | [TinyFish](third_party/tinyfish/) | Developer Tools | Browser automation, web scraping, web search and fetch via a cloud browser agent: automate websites, log in to portals, submit forms, scrape social media, listings, prices, reviews, monitor changes. |
| `tldraw` | [tldraw](third_party/tldraw/) | Design | Let Claude sketch, draw, and diagram with you. |
| `tldv` | [tl;dv - AI Note Taker & Meeting Recorder: Transcripts, Summaries & Meeting Minutes](third_party/tldv/) | Analytics | Meeting transcripts, notes & action items in Claude. |
| `todoist` | [Todoist](third_party/todoist/) | Productivity | Search, complete, and manage your tasks in Todoist. |
| `together-ai` | [Together AI Docs](third_party/together-ai/) | Documentation | Search Together AI's official documentation for models, inference, and fine-tuning. |
| `togetherai-skills` | [Together AI Skills](third_party/togetherai-skills/) | AI | Use the Together AI platform: chat, embeddings, images, audio, video, batch inference, fine-tuning and GPU clusters. |
| `tomorrow-io-weather` | [Tomorrow.io Weather MCP App](third_party/tomorrow-io-weather/) | Science | Interactive weather, air quality, pollen, and wildfire-risk widgets powered by Tomorrow.io — live forecasts and conditions for any location, right inside Claude. |
| `tomtom-maps` | [TomTom Maps](third_party/tomtom-maps/) | Analytics | TomTom maps, routing, geocoding & traffic data. |
| `trello` | [Trello](third_party/trello/) | Project Management | Get things done in Trello. |
| `trimble-sketchup` | [Trimble SketchUp](third_party/trimble-sketchup/) | Design | Create and iterate 3D models for use in SketchUp. |
| `trivago` | [Trivago](third_party/trivago/) | Travel | Use trivago's powerful metasearch to find your ideal hotel and compare prices from multiple providers. |
| `tropic` | [Tropic](third_party/tropic/) | Productivity | Save money on Software + AI contracts. |
| `turkish-airlines` | [Turkish Airlines](third_party/turkish-airlines/) | Productivity | Search flights, plan trips, and manage bookings. |
| `twelve-data` | [Twelve Data](third_party/twelve-data/) | Finance | Real-time prices, 100+ technical indicators, and fundamentals for stocks, forex, crypto, and ETFs — ask in plain English, no API knowledge needed. |
| `twilio` | [Twilio](third_party/twilio/) | Communication | Build powerful communications and customer engagement. |
| `typefully` | [Typefully - Social Media Scheduler](third_party/typefully/) | Analytics | Social media scheduler for great writing on X (Twitter), LinkedIn, Substack, Threads, Bluesky, and Mastodon. |
| `ubersuggest` | [Ubersuggest](third_party/ubersuggest/) | Analytics | Keyword research, competitor analysis, backlinks, site audits and AI search visibility — powered by Ubersuggest. |
| `udemy-business` | [Udemy Business](third_party/udemy-business/) | Productivity | Search and explore skill-building resources. |
| `ui-theme-designer` | [SAP UI Theme Designer](third_party/ui-theme-designer/) | Design | Plugin for coding agents working with UI theme designer. |
| `ui5-modernization` | [UI5 Modernization](third_party/ui5-modernization/) | Developer Tools | Complete UI5 modernization toolkit with workflow and specialized fix patterns for modernizing SAPUI5/OpenUI5 applications |
| `ui5-typescript-conversion` | [UI5 TypeScript Conversion](third_party/ui5-typescript-conversion/) | Developer Tools | SAPUI5 / OpenUI5 plugin for coding agents. |
| `unblocked` | [Unblocked](third_party/unblocked/) | Developer Tools | Bring full context to every agent and AI tools. |
| `unsplash` | [Unsplash](third_party/unsplash/) | Developer Tools | Find and use free HD images. |
| `unstructured` | [Unstructured Transform](third_party/unstructured/) | Developer Tools | Turn any document into AI-ready structured data. |
| `unwrap` | [Unwrap](third_party/unwrap/) | Analytics | Search and analyze customer feedback. |
| `upwork` | [Upwork](third_party/upwork/) | Productivity | Hire talent or find work. |
| `v0` | [v0](third_party/v0/) | Developer Tools | Build Full-Stack Web Apps with AI. |
| `vaisala-xweather` | [Vaisala Xweather](third_party/vaisala-xweather/) | Developer Tools | Access real-time, forecast, and historical weather. |
| `valtown` | [Val Town](third_party/valtown/) | Hosting | Build and deploy on Val Town. Bundles the Val Town MCP server and platform skills (HTTP vals, cron/intervals, SQLite, email, OAuth, React UI, third-party integrations). |
| `vanta` | [Vanta](third_party/vanta/) | Security | Review Vanta compliance tests, controls, vendors, and vulnerabilities. |
| `vercel` | [Vercel](third_party/vercel/) | Hosting | Inspect Vercel projects, deployments, and build logs, and search Vercel docs. |
| `verisk-underwriting` | [Verisk Underwriting Intelligence](third_party/verisk-underwriting/) | Finance | Ask questions. Get underwriting insights from Verisk. |
| `viator` | [Viator](third_party/viator/) | Productivity | Book travel experiences around the world. |
| `vibe-prospecting` | [Vibe Prospecting](third_party/vibe-prospecting/) | Sales | B2B data for lead lists, company research and outreach with Vibe Prospecting. |
| `vidiq` | [vidIQ](third_party/vidiq/) | Media | Research and create for YouTube, Instagram & TikTok. |
| `vsql-extension-builder` | [VillageSQL Extension Builder](third_party/vsql-extension-builder/) | Database | Skills for VillageSQL (MySQL with extensions): build extensions end-to-end (including porting PostgreSQL extensions to MySQL) and install VillageSQL Server. |
| `webex-for-claude` | [Webex for Claude](third_party/webex-for-claude/) | Marketing | Access your Webex meetings, messaging, and Vidcast content securely in Claude. |
| `webex-meetings` | [Webex Meetings](third_party/webex-meetings/) | Communication | AI-powered workflows for Webex meetings. |
| `webflow` | [Webflow](third_party/webflow/) | CMS | Design pages, manage CMS content, add motion, analyze traffic, and launch the whole site, all from a prompt and all inside the permissions your workspace already has. |
| `webull` | [Webull](third_party/webull/) | Finance | Your Global Multi-Asset Trading & Analysis Powerhouse. |
| `whimsical` | [Whimsical](third_party/whimsical/) | Design | Create flowcharts, mindmaps, wireframes and diagrams. |
| `wiley-scholar-gateway` | [Wiley Scholar Gateway](third_party/wiley-scholar-gateway/) | Science | Enhance responses with scholarly research and citations. |
| `windsor-ai` | [Windsor.ai](third_party/windsor-ai/) | Analytics | Connect Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads + 320 more. |
| `wingspan` | [Wingspan](third_party/wingspan/) | Payments | Ask Claude about the contractors you pay through Wingspan, what you owe them, and what is holding up a payment — then onboard contractors and log payments as drafts, with a preview before anything is written. |
| `wispr-flow` | [Wispr Flow](third_party/wispr-flow/) | Communication | Your meetings, notes, and tasks from Wispr Flow — now native context for Claude. |
| `within` | [Within](third_party/within/) | Productivity | Explore your org's processes. |
| `wix` | [Wix](third_party/wix/) | CMS | Manage and build sites and apps on Wix. |
| `wolfram` | [Wolfram](third_party/wolfram/) | Education | Inject precise, real-time computation and knowledge. |
| `wordpress-com` | [WordPress.com](third_party/wordpress-com/) | Productivity | Secure AI access to manage your WordPress.com sites. |
| `workable` | [Workable](third_party/workable/) | Productivity | Your AI assistant for Hiring and HR — inside Workable. |
| `workos` | [WorkOS](third_party/workos/) | Developer Tools | Manage your WorkOS workspace from Claude. |
| `wrike` | [Wrike](third_party/wrike/) | Productivity | Manage, update and move work forward from Claude. |
| `xero` | [Xero](third_party/xero/) | Finance | Access your Xero financials from any conversation. |
| `yardi-matrix` | [Yardi Matrix](third_party/yardi-matrix/) | Analytics | Real estate market intelligence from Yardi Matrix. |
| `youdotcom-agent-skills` | [You.com Skills](third_party/youdotcom-agent-skills/) | Search | Search the web, read pages, research and look up finance data with You.com. |
| `zapier` | [Zapier](third_party/zapier/) | Productivity | Run Zapier actions across the apps connected to your Zapier account. |
| `zillow` | [Zillow](third_party/zillow/) | Commerce | Search homes, rentals, neighborhoods, and affordability. |
| `zoho-books` | [Zoho Books](third_party/zoho-books/) | Finance | Zoho Books MCP for Smart Finance Ops. |
| `zoho-crm` | [Zoho CRM](third_party/zoho-crm/) | Productivity | MCP Server for Zoho CRM Workflows. |
| `zoho-desk` | [Zoho Desk](third_party/zoho-desk/) | Communication | Zoho Desk MCP for Customer Support Automation. |
| `zoho-projects` | [Zoho Projects](third_party/zoho-projects/) | Productivity | Zoho Projects MCP for Task & Project Automation. |
| `zomato` | [Zomato](third_party/zomato/) | Commerce | Fast & easy online food ordering and delivery service. |
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
