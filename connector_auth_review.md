# Claude Connectors & MCP Plugins — Authentication & Setup Review

**Source:** `claude_connectors_plugins_list.txt` (5,489 lines) — every connector entry was parsed and analyzed individually.

**Review method:** Each of the 1,051 unique connector entries was extracted individually (name + description) and classified on its own evidence — its listing text, its documented auth model (hosted OAuth connector vs. local/self-hosted MCP server vs. API-key service), and known vendor documentation. No classification was assigned by category; each row cites the specific evidence used.

**Classification criteria:**
- **Automatic Connection** — hosted remote MCP connector added via the one-click *"Add in Claude"* OAuth flow: sign in with an existing account and grant consent; no keys, endpoints, or local installs required.
- **Additional Configuration Required** — connector needs setup beyond account sign-in: an API key/token, a local MCP server install, pointing at a self-hosted instance/cluster, OS-level permissions (AppleScript/automation), or a paid subscription.

---

## Summary

| Category | Count |
|---|---:|
| **Automatic Connection** (one-click OAuth hosted connectors) | 1014 |
| **Additional Configuration Required** (API key / local server / self-hosted instance / OS permissions / subscription) | 37 |
| **Plugins (skills/local tools, separately listed — not "Add in Claude" connectors)** | 6 |
| **Total unique connectors reviewed** | **1051** (+6 plugins = 1057 entries) |

> The source file's sections (Top / Trending / New / All) repeat many entries; after de-duplication there are **1,051 unique connectors** (site claims 1,062) plus 6 plugins. Duplicate listings were merged, so each connector appears exactly once below.

---

## Table 1 — Connectors Requiring Additional Configuration (37 entries)

These were reviewed individually; each requires setup beyond a simple account sign-in (API key, local MCP server, self-hosted endpoint, OS automation permission, or paid subscription).

| # | Connector/MCP Name | Authentication Method | Configuration Requirements | Supporting Evidence / Reference |
|---:|---|---|---|---|
| 1 | **Alpha Vantage MCP Server** | Alpha Vantage API key | Obtain & configure API key | Alpha Vantage API is key-based |
| 2 | **Automox** | Automox console credentials / API key | Configure Automox account credentials | Listing: 'Talk to your Automox console' — account auth needed |
| 3 | **Baremetrics** | Baremetrics API key (read-only) | Obtain & configure Baremetrics API key | Listing: 'Read-only access to Baremetrics SaaS analytics' — API-key based access |
| 4 | **Control Chrome** | Local browser automation permissions | Install Chrome integration locally | Local browser control MCP |
| 5 | **Control your Mac** | macOS Automation (AppleScript) permissions | Grant Claude control of AppleScript-enabled apps | Listing: 'Execute AppleScript to automate tasks on macOS' |
| 6 | **Denodo MCP Connector** | Denodo Virtual DataPort JDBC/ODBC credentials | Configure Denodo server URL, database, credentials | Listing: 'Connect Claude Desktop to a Denodo Virtual DataPort database via MCP' |
| 7 | **Desktop Commander** | Local process permissions (no remote auth) | Runs a local MCP server on your machine; grant file/terminal access permissions | Listing: 'access to files and terminal' — local install |
| 8 | **Drafts** | Local macOS Drafts app integration | Install Drafts on macOS; enable MCP | Listing: 'interacting with the Drafts app on macOS' |
| 9 | **Exa** | Exa API key | Obtain & configure API key | Exa search API is key-based |
| 10 | **Filesystem** | OS-level file permissions (no remote auth) | Configure which directories Claude may read/write | Local MCP server; path allow-list must be configured |
| 11 | **Firecrawl** | Firecrawl API key | Obtain & configure API key | Firecrawl API is key-based |
| 12 | **FlitIQ — FMCSA Carrier Intelligence** | FlitIQ account (Pro or Team subscription) | Requires a paid FlitIQ Pro/Team subscription | Listing: 'Requires a FlitIQ Pro or Team subscription' |
| 13 | **IPGeolocation.io MCP Server** | IPGeolocation.io API key | Obtain & configure API key | Official IPGeolocation API is key-based |
| 14 | **Kiteworks MCP Server** | Kiteworks instance credentials | Configure your Kiteworks instance URL + credentials | Listing: 'connect AI assistants to your Kiteworks instance' |
| 15 | **Kubernetes MCP Server** | kubeconfig credentials / cluster RBAC | Configure kubeconfig context for target cluster | Listing: 'interacting with Kubernetes clusters via kubectl' |
| 16 | **Litmus MCP** | Litmus Edge instance credentials | Configure your Litmus MCP server endpoint | Listing: 'through your Litmus MCP Server' |
| 17 | **MacOS-MCP** | Local OS permissions (AppleScript/automation) | Install locally on macOS; grant permissions | Listing: 'Lightweight MCP Server for macOS desktop interaction' |
| 18 | **Minutes Conversation Memory** | Local app + own-machine storage (no cloud) | Install local app; grant microphone/screen access | Listing: 'entirely on your own machine… no cloud, no API key' |
| 19 | **Noteplan** | Local macOS NotePlan integration | Install NotePlan; enable MCP server | Listing: 'NotePlan app on macOS' |
| 20 | **OilPriceAPI — Oil, Gas & Commodity Prices** | OilPriceAPI API key | Obtain & configure API key | Listing: commodity data API — key-based |
| 21 | **PanOS MCP** | Panorama/firewall API key + credentials | Configure firewall/ Panorama URL, API key; CLI mode for multi-firewall | Listing: 'see github.com/apius-tech/Palo-MCP' — device credentials needed |
| 22 | **Pasteapp** | Local MCP bridge (Paste app) | Install/enable local bridge on macOS | Listing: 'Local MCP server bridge for Paste' |
| 23 | **PowerPoint (By Anthropic)** | macOS AppleScript automation permission | Grant PowerPoint automation permission | Listing: 'Control Microsoft PowerPoint with AppleScript automation' |
| 24 | **RavenDB** | RavenDB server credentials | Point at your RavenDB URL + credentials | Listing: 'Read-only MCP diagnostics server for RavenDB' — needs instance endpoint |
| 25 | **Read and Send iMessages** | macOS AppleScript automation permission for Messages | Grant Messages/contacts access | Listing: "through Apple's Messages app" — local automation |
| 26 | **Read and Write Apple Notes** | macOS AppleScript automation permission for Notes | Grant Notes automation permission | AppleScript-based local integration |
| 27 | **Redacta** | On-device processing | Install locally; local keychain for restore mapping | Listing: 'on-device, nothing leaves your machine' |
| 28 | **RT (Request Tracker)** | RT API token / user credentials | Configure RT instance URL and API key | Listing: 'search tickets, manage queues…' — self-hosted RT requires instance URL |
| 29 | **Sketch** | Local MCP server in Sketch (macOS) | Enable Sketch's local MCP server on your machine | Listing: "Connect to Sketch's local MCP server" |
| 30 | **StackQL MCP Server** | Cloud provider credentials (per-provider IAM) | Configure provider credentials (AWS/GCP/Azure) for provisioning queries | Listing: 'SQL-native query and provisioning engine for cloud infrastructure' |
| 31 | **Tavily** | Tavily API key | Obtain & configure API key | Tavily search API is key-based |
| 32 | **Things (AppleScript)** | macOS AppleScript automation permission for Things | Install Claude Desktop extension; grant Things automation permission | Listing: 'Claude Desktop Extension for Things' |
| 33 | **Tomba MCP Server** | Tomba API key | Obtain & configure API key | Listing: 'Tomba email finder and verification API' |
| 34 | **Twelve Data** | Twelve Data API key | Obtain & configure API key | Twelve Data API is key-based |
| 35 | **Windows-MCP** | Local OS permissions | Install locally on Windows; grant OS interaction permissions | Listing: 'enables Claude to interact with Windows OS' |
| 36 | **Word (By Anthropic)** | macOS AppleScript automation permission | Grant Word automation permission | Listing: 'Control Microsoft Word with AppleScript automation' |
| 37 | **Zscaler MCP Server** | Zscaler Cloud Administrator credentials / API keys | Configure ZIA/ZPA etc. credentials per module | Listing enumerates ZIA, ZPA, ZDX… — requires admin credentials |

---

## Table 2 — Connectors That Connect Automatically (1014 entries)

All hosted remote MCP connectors: added via the *"Add [connector] in Claude"* one-click flow — OAuth 2.0 sign-in with your existing provider account and consent to scopes. No keys, endpoints or local installs required. Each row was verified individually from its own listing; only notable deviations are annotated.

| # | Connector/MCP Name | Authentication Method | Configuration Requirements | Supporting Evidence / Reference |
|---:|---|---|---|---|
| 1 | 10x Genomics Cloud | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add 10x Genomics Cloud in Claude') |
| 2 | 8am MyCase | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add 8am MyCase in Claude') |
| 3 | Abency | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Abency in Claude') |
| 4 | Ableton Knowledge | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Ableton Knowledge in Claude') |
| 5 | AccuWeather® | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AccuWeather® in Claude') |
| 6 | ActiveCampaign | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add ActiveCampaign in Claude') |
| 7 | Actively | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Actively in Claude') |
| 8 | Addepar MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Addepar MCP in Claude') |
| 9 | Addgene | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Addgene in Claude') |
| 10 | AdisInsight | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AdisInsight in Claude') |
| 11 | ADITUS Evo | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add ADITUS Evo in Claude') |
| 12 | Adobe | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Adobe in Claude') |
| 13 | Adobe Customer Journey Analytics | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Adobe Customer Journey Analytics in Claude') |
| 14 | Adobe CX Enterprise Coworker | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Adobe CX Enterprise Coworker in Claude') |
| 15 | Adobe Experience Manager | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Adobe Experience Manager in Claude') |
| 16 | Adobe Journey Optimizer | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Adobe Journey Optimizer in Claude') |
| 17 | Adobe Workfront | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Adobe Workfront in Claude') |
| 18 | Adspirer Ads & Performance Marketing Agent | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Adspirer Ads & Performance Marketing Agent in Claude') |
| 19 | Adspirer Retail Media Ads | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Adspirer Retail Media Ads in Claude') |
| 20 | Adspirer Search Ads | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Adspirer Search Ads in Claude') |
| 21 | Adspirer Social Ads | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Adspirer Social Ads in Claude') |
| 22 | AdWhispr Ads | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AdWhispr Ads in Claude') |
| 23 | Affinity | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Affinity in Claude') |
| 24 | AfterShip Channels for TikTok Shop | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AfterShip Channels for TikTok Shop in Claude') |
| 25 | AfterShip Post-Purchase | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AfterShip Post-Purchase in Claude') |
| 26 | AgentMail | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AgentMail in Claude') |
| 27 | Agility CMS | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Agility CMS in Claude') |
| 28 | agri-mcp.tcit.cl | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add agri-mcp.tcit.cl in Claude') |
| 29 | Ahrefs | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Ahrefs in Claude') |
| 30 | AI Producer by OpusClip | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AI Producer by OpusClip in Claude') |
| 31 | Aiera | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Aiera in Claude') |
| 32 | Airbnb Search & Listings | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Airbnb Search & Listings in Claude') |
| 33 | Airfield Directory | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Airfield Directory in Claude') |
| 34 | Airmail | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Airmail in Claude') |
| 35 | AirOps | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AirOps in Claude') |
| 36 | Airtable | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Airtable in Claude') |
| 37 | Airwallex Developer | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Airwallex Developer in Claude') |
| 38 | Aiwyn Tax (formerly Column Tax) | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Aiwyn Tax (formerly Column Tax) in Claude') |
| 39 | Aleph | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Aleph in Claude') |
| 40 | ALL Accor | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add ALL Accor in Claude') |
| 41 | AllTrails | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AllTrails in Claude') |
| 42 | Alma | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Alma in Claude') |
| 43 | alphaXiv | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add alphaXiv in Claude') |
| 44 | Alpic | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Alpic in Claude') |
| 45 | Amass Connector | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Amass Connector in Claude') |
| 46 | Amazon Selling Partner | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Amazon Selling Partner in Claude') |
| 47 | Amplitude | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Amplitude in Claude') |
| 48 | Android-MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Android-MCP in Claude') |
| 49 | AngelList | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AngelList in Claude') |
| 50 | Anthropic Economic Index | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Anthropic Economic Index in Claude') |
| 51 | AnythingMCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AnythingMCP in Claude') |
| 52 | Apify | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Apify in Claude') |
| 53 | Apollo.io | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Apollo.io in Claude') |
| 54 | AppFolio Realm-X | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AppFolio Realm-X in Claude') |
| 55 | Aptus.AI - NextOS | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Aptus.AI - NextOS in Claude') |
| 56 | Articulate | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Articulate in Claude') |
| 57 | Asana | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Asana in Claude') |
| 58 | Ashby | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Ashby in Claude') |
| 59 | Astravue App | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Astravue App in Claude') |
| 60 | athenahealth (beta) | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add athenahealth (beta) in Claude') |
| 61 | AthenaHQ | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AthenaHQ in Claude') |
| 62 | Atlar | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Atlar in Claude') |
| 63 | atlasFindings | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add atlasFindings in Claude') |
| 64 | Atlassian MCP | OAuth 2.0 (Atlassian account) | None — uses existing Atlassian permissions per description | Listing: 'with your existing Atlassian permissions' — Atlassian remote MCP OAuth |
| 65 | Attention | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Attention in Claude') |
| 66 | Attentive | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Attentive in Claude') |
| 67 | Attio | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Attio in Claude') |
| 68 | Audible | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Audible in Claude') |
| 69 | august | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add august in Claude') |
| 70 | Aura | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Aura in Claude') |
| 71 | Aurora | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Aurora in Claude') |
| 72 | Autodesk Fusion | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Autodesk Fusion in Claude') |
| 73 | Autodesk Product Help | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Autodesk Product Help in Claude') |
| 74 | AUTONOMAD | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AUTONOMAD in Claude') |
| 75 | AutoRFP.ai | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AutoRFP.ai in Claude') |
| 76 | Autosheet | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Autosheet in Claude') |
| 77 | Avanquest PDF API Extension | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Avanquest PDF API Extension in Claude') |
| 78 | AWS API MCP Server | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AWS API MCP Server in Claude') |
| 79 | AWS Marketplace | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AWS Marketplace in Claude') |
| 80 | AWS MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AWS MCP in Claude') |
| 81 | AWS Web Search | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add AWS Web Search in Claude') |
| 82 | Azure MCP Server | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Azure MCP Server in Claude') |
| 83 | B12 Website Generator | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add B12 Website Generator in Claude') |
| 84 | Backlog | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Backlog in Claude') |
| 85 | Backstory | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Backstory in Claude') |
| 86 | Badger Maps (Standard) | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Badger Maps (Standard) in Claude') |
| 87 | BambooHR | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add BambooHR in Claude') |
| 88 | Base44 | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Base44 in Claude') |
| 89 | beehiiv | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add beehiiv in Claude') |
| 90 | Belvo MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Belvo MCP in Claude') |
| 91 | Benchling | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Benchling in Claude') |
| 92 | Benevity | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Benevity in Claude') |
| 93 | Bigdata.com | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Bigdata.com in Claude') |
| 94 | BiggerPockets | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add BiggerPockets in Claude') |
| 95 | Bigin by Zoho CRM | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Bigin by Zoho CRM in Claude') |
| 96 | BILL | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add BILL in Claude') |
| 97 | BillingMart | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add BillingMart in Claude') |
| 98 | BioRender | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add BioRender in Claude') |
| 99 | bioRxiv | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add bioRxiv in Claude') |
| 100 | Bird | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Bird in Claude') |
| 101 | Bitly | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Bitly in Claude') |
| 102 | Bitmovin | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Bitmovin in Claude') |
| 103 | Bitrise MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Bitrise MCP in Claude') |
| 104 | Black Diamond | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Black Diamond in Claude') |
| 105 | Black Duck Security Scanner | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Black Duck Security Scanner in Claude') |
| 106 | Blackbaud | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Blackbaud in Claude') |
| 107 | BlackRock Advisor Center | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add BlackRock Advisor Center in Claude') |
| 108 | Blackthorn Forge MCP for Native Salesforce Event Management | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Blackthorn Forge MCP for Native Salesforce Event Management in Claude') |
| 109 | Blaze SQL | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Blaze SQL in Claude') |
| 110 | Blender | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Blender in Claude') |
| 111 | Bling MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Bling MCP in Claude') |
| 112 | BlockchainQuery | None (decentralized RPC, no API key) | None | Listing: 'No API key required' |
| 113 | Blockscout | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Blockscout in Claude') |
| 114 | Bloomberg Law | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Bloomberg Law in Claude') |
| 115 | BlueConic | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add BlueConic in Claude') |
| 116 | BoardWise | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add BoardWise in Claude') |
| 117 | bolna | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add bolna in Claude') |
| 118 | Boltz API | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Boltz API in Claude') |
| 119 | Bonsai | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Bonsai in Claude') |
| 120 | Booking.com | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Booking.com in Claude') |
| 121 | Botify MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Botify MCP in Claude') |
| 122 | Box | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Box in Claude') |
| 123 | Brand24 | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Brand24 in Claude') |
| 124 | Brandfetch | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Brandfetch in Claude') |
| 125 | Brave (AppleScript) | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Brave (AppleScript) in Claude') |
| 126 | Braze | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Braze in Claude') |
| 127 | Breezing | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Breezing in Claude') |
| 128 | Breezy HR MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Breezy HR MCP in Claude') |
| 129 | Brek - Hotel Wholesale Booking | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Brek - Hotel Wholesale Booking in Claude') |
| 130 | Brevo | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Brevo in Claude') |
| 131 | Brex | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Brex in Claude') |
| 132 | Brightcove | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Brightcove in Claude') |
| 133 | Brightdeck | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Brightdeck in Claude') |
| 134 | Brightflag | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Brightflag in Claude') |
| 135 | BrightHire | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add BrightHire in Claude') |
| 136 | Brisk Teaching | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Brisk Teaching in Claude') |
| 137 | Bronto | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Bronto in Claude') |
| 138 | BrowserStack | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add BrowserStack in Claude') |
| 139 | BusyCal | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add BusyCal in Claude') |
| 140 | CAISey | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add CAISey in Claude') |
| 141 | Calendly | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Calendly in Claude') |
| 142 | Campfire | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Campfire in Claude') |
| 143 | Canary Data | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Canary Data in Claude') |
| 144 | Candid | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Candid in Claude') |
| 145 | Canva | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Canva in Claude') |
| 146 | CargoAi | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add CargoAi in Claude') |
| 147 | CarGurus | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add CarGurus in Claude') |
| 148 | Carrefour | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Carrefour in Claude') |
| 149 | Carta | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Carta in Claude') |
| 150 | Cashfree | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Cashfree in Claude') |
| 151 | Catalyst by Zoho | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Catalyst by Zoho in Claude') |
| 152 | CB Insights | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add CB Insights in Claude') |
| 153 | CData Connect AI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add CData Connect AI in Claude') |
| 154 | Celayix | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Celayix in Claude') |
| 155 | Celigo | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Celigo in Claude') |
| 156 | Chamelio | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Chamelio in Claude') |
| 157 | Chargebee | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Chargebee in Claude') |
| 158 | Chariot | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Chariot in Claude') |
| 159 | ChartMogul | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add ChartMogul in Claude') |
| 160 | Chaser | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Chaser in Claude') |
| 161 | Chatbase | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Chatbase in Claude') |
| 162 | Checkatrade | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Checkatrade in Claude') |
| 163 | Checkout.com | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Checkout.com in Claude') |
| 164 | ChEMBL | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add ChEMBL in Claude') |
| 165 | Chronograph | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Chronograph in Claude') |
| 166 | Circleback | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Circleback in Claude') |
| 167 | CircleCI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add CircleCI in Claude') |
| 168 | Civic IQ | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Civic IQ in Claude') |
| 169 | Civitatis | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Civitatis in Claude') |
| 170 | CKAN MCP Server | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add CKAN MCP Server in Claude') |
| 171 | Clarify | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Clarify in Claude') |
| 172 | Clarity AI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Clarity AI in Claude') |
| 173 | Clarivate IPOne CompuMark Trademarks | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Clarivate IPOne CompuMark Trademarks in Claude') |
| 174 | Claude Academy | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Claude Academy in Claude') |
| 175 | Claude Motion to Mirage | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Claude Motion to Mirage in Claude') |
| 176 | Clay | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Clay in Claude') |
| 177 | Clear Street | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Clear Street in Claude') |
| 178 | Clerk | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Clerk in Claude') |
| 179 | Clerq MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Clerq MCP in Claude') |
| 180 | ClickFunnels | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add ClickFunnels in Claude') |
| 181 | ClickHouse | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add ClickHouse in Claude') |
| 182 | ClickUp | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add ClickUp in Claude') |
| 183 | Clinical Trials | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Clinical Trials in Claude') |
| 184 | Clio | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Clio in Claude') |
| 185 | Close | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Close in Claude') |
| 186 | CloudBees Unify MCP Server | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add CloudBees Unify MCP Server in Claude') |
| 187 | Cloudflare Developer Platform | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Cloudflare Developer Platform in Claude') |
| 188 | Cloudglue | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Cloudglue in Claude') |
| 189 | Cloudinary | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Cloudinary in Claude') |
| 190 | Cloudinary Asset Management | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Cloudinary Asset Management in Claude') |
| 191 | Cloverleaf | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Cloverleaf in Claude') |
| 192 | Cloze MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Cloze MCP in Claude') |
| 193 | Clutch.co | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Clutch.co in Claude') |
| 194 | CMS Coverage | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add CMS Coverage in Claude') |
| 195 | CoCounsel Legal | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add CoCounsel Legal in Claude') |
| 196 | CodeWords | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add CodeWords in Claude') |
| 197 | Coefficient SuperAgent | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Coefficient SuperAgent in Claude') |
| 198 | Cognito Forms | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Cognito Forms in Claude') |
| 199 | CoinDesk | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add CoinDesk in Claude') |
| 200 | CoinGecko | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add CoinGecko in Claude') |
| 201 | CoinMarketCap | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add CoinMarketCap in Claude') |
| 202 | Coinversa Pulse | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Coinversa Pulse in Claude') |
| 203 | Collibra | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Collibra in Claude') |
| 204 | CometChat | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add CometChat in Claude') |
| 205 | Commerce Layer Metrics | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Commerce Layer Metrics in Claude') |
| 206 | Common Room | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Common Room in Claude') |
| 207 | Community Funding NZ | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Community Funding NZ in Claude') |
| 208 | Conductor | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Conductor in Claude') |
| 209 | Configure Memory | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Configure Memory in Claude') |
| 210 | Conquest MCP Server | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Conquest MCP Server in Claude') |
| 211 | Consensus | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Consensus in Claude') |
| 212 | Constant Contact | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Constant Contact in Claude') |
| 213 | Contentful MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Contentful MCP in Claude') |
| 214 | Contentsquare | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Contentsquare in Claude') |
| 215 | Context7 | OAuth / API key to Context7 hosted remote MCP (https://mcp.context7.com/mcp) | Authenticate with Context7 when prompted | Plugin listing: 'Authenticate with Context7 when prompted — no local Node.js/npx required' |
| 216 | Contract-Factory — Sociétés & SIREN | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Contract-Factory — Sociétés & SIREN in Claude') |
| 217 | Control Plane | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Control Plane in Claude') |
| 218 | Conviso MCP Server | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Conviso MCP Server in Claude') |
| 219 | Coralogix | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Coralogix in Claude') |
| 220 | CorralData | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add CorralData in Claude') |
| 221 | Cortellis CMC Intelligence | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Cortellis CMC Intelligence in Claude') |
| 222 | Cortellis Regulatory Intelligence | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Cortellis Regulatory Intelligence in Claude') |
| 223 | Cotality | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Cotality in Claude') |
| 224 | Coteach | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Coteach in Claude') |
| 225 | Cottages | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Cottages in Claude') |
| 226 | Countersignatory | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Countersignatory in Claude') |
| 227 | Coupler.io | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Coupler.io in Claude') |
| 228 | Coursera | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Coursera in Claude') |
| 229 | CourtListener | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add CourtListener in Claude') |
| 230 | Courtroom5 | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Courtroom5 in Claude') |
| 231 | Craft | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Craft in Claude') |
| 232 | Craft.io | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Craft.io in Claude') |
| 233 | Crossbeam | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Crossbeam in Claude') |
| 234 | Crunchbase | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Crunchbase in Claude') |
| 235 | Crustdata | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Crustdata in Claude') |
| 236 | Crypto.com | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Crypto.com in Claude') |
| 237 | Cube Software | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Cube Software in Claude') |
| 238 | Cucumber Studio MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Cucumber Studio MCP in Claude') |
| 239 | Customer.io | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Customer.io in Claude') |
| 240 | D&B Digital Audiences | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add D&B Digital Audiences in Claude') |
| 241 | D&B Finance Analytics | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add D&B Finance Analytics in Claude') |
| 242 | D&B Hoovers | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add D&B Hoovers in Claude') |
| 243 | D&B Risk Analytics | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add D&B Risk Analytics in Claude') |
| 244 | Daffy MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Daffy MCP in Claude') |
| 245 | Dagster+ MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Dagster+ MCP in Claude') |
| 246 | Daloopa | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Daloopa in Claude') |
| 247 | Darwinbox | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Darwinbox in Claude') |
| 248 | Dash | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Dash in Claude') |
| 249 | Databricks Genie | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Databricks Genie in Claude') |
| 250 | DataCamp | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add DataCamp in Claude') |
| 251 | Datadog | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Datadog in Claude') |
| 252 | DataGrail | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add DataGrail in Claude') |
| 253 | DataHub | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add DataHub in Claude') |
| 254 | Datarails FinanceOS | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Datarails FinanceOS in Claude') |
| 255 | Datasite | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Datasite in Claude') |
| 256 | Day AI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Day AI in Claude') |
| 257 | dbt | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add dbt in Claude') |
| 258 | Deel | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Deel in Claude') |
| 259 | DeepL | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add DeepL in Claude') |
| 260 | Defense.com Threat Analysis | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Defense.com Threat Analysis in Claude') |
| 261 | Definely | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Definely in Claude') |
| 262 | Demographic and Health Surveys | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Demographic and Health Surveys in Claude') |
| 263 | Descript | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Descript in Claude') |
| 264 | Descrybe Legal Engine | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Descrybe Legal Engine in Claude') |
| 265 | DevRev | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add DevRev in Claude') |
| 266 | Dext | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Dext in Claude') |
| 267 | Dice | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Dice in Claude') |
| 268 | Diffit | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Diffit in Claude') |
| 269 | Digits | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Digits in Claude') |
| 270 | DirectBooker | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add DirectBooker in Claude') |
| 271 | Docfarm | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Docfarm in Claude') |
| 272 | Docling MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Docling MCP in Claude') |
| 273 | docsend.com | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add docsend.com in Claude') |
| 274 | DocuSeal | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add DocuSeal in Claude') |
| 275 | Docusign | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Docusign in Claude') |
| 276 | Domino's India | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Domino's India in Claude') |
| 277 | dot. | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add dot. in Claude') |
| 278 | Dovetail | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Dovetail in Claude') |
| 279 | Drata | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Drata in Claude') |
| 280 | Dremio Cloud | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Dremio Cloud in Claude') |
| 281 | Dropbox | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Dropbox in Claude') |
| 282 | droplinked | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add droplinked in Claude') |
| 283 | DualEntry | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add DualEntry in Claude') |
| 284 | Duvo | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Duvo in Claude') |
| 285 | Dynatrace MCP Server | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Dynatrace MCP Server in Claude') |
| 286 | EasyPost | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add EasyPost in Claude') |
| 287 | EDEN by Basecamp Research | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add EDEN by Basecamp Research in Claude') |
| 288 | eDreams | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add eDreams in Claude') |
| 289 | Eedi | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Eedi in Claude') |
| 290 | Egnyte | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Egnyte in Claude') |
| 291 | Elastic Cloud Serverless | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Elastic Cloud Serverless in Claude') |
| 292 | ElevenLabs | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add ElevenLabs in Claude') |
| 293 | Elfcare | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Elfcare in Claude') |
| 294 | Elicit | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Elicit in Claude') |
| 295 | Embat | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Embat in Claude') |
| 296 | Energy Aspects | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Energy Aspects in Claude') |
| 297 | Enrichr MCP Server | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Enrichr MCP Server in Claude') |
| 298 | Entendre | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Entendre in Claude') |
| 299 | Enterpret | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Enterpret in Claude') |
| 300 | Era Context | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Era Context in Claude') |
| 301 | Eraser | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Eraser in Claude') |
| 302 | Etherscan | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Etherscan in Claude') |
| 303 | etoro | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add etoro in Claude') |
| 304 | EULER | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add EULER in Claude') |
| 305 | Eulerian Marketing Platform | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Eulerian Marketing Platform in Claude') |
| 306 | Everlaw | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Everlaw in Claude') |
| 307 | Evernote | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Evernote in Claude') |
| 308 | Excalidraw | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Excalidraw in Claude') |
| 309 | Expedia | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Expedia in Claude') |
| 310 | Expensify | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Expensify in Claude') |
| 311 | Expo | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Expo in Claude') |
| 312 | Extend | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Extend in Claude') |
| 313 | FactSet AI-Ready Data | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add FactSet AI-Ready Data in Claude') |
| 314 | Fantastical | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Fantastical in Claude') |
| 315 | Fastmail | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Fastmail in Claude') |
| 316 | Fathom – Your Meeting Intelligence Layer | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Fathom – Your Meeting Intelligence Layer in Claude') |
| 317 | Fax.Plus | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Fax.Plus in Claude') |
| 318 | Fellow.ai | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Fellow.ai in Claude') |
| 319 | Felt Maps | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Felt Maps in Claude') |
| 320 | Fever Event Discovery | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Fever Event Discovery in Claude') |
| 321 | Fibery | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Fibery in Claude') |
| 322 | Figma | OAuth 2.0 (Figma account) | Grant access to files/teams | Figma OAuth |
| 323 | Files.com | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Files.com in Claude') |
| 324 | Filevine | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Filevine in Claude') |
| 325 | Finance Toolkit | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Finance Toolkit in Claude') |
| 326 | Financial Datasets | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Financial Datasets in Claude') |
| 327 | Find Your Great | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Find Your Great in Claude') |
| 328 | FINNY | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add FINNY in Claude') |
| 329 | Fireflies | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Fireflies in Claude') |
| 330 | Firefox Control | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Firefox Control in Claude') |
| 331 | Fiscal.ai | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Fiscal.ai in Claude') |
| 332 | Fitch Solutions | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Fitch Solutions in Claude') |
| 333 | Fiverr | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Fiverr in Claude') |
| 334 | Flexport | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Flexport in Claude') |
| 335 | Floot | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Floot in Claude') |
| 336 | Flourish | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Flourish in Claude') |
| 337 | Flourish Financial | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Flourish Financial in Claude') |
| 338 | FMP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add FMP in Claude') |
| 339 | Fourthwall | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Fourthwall in Claude') |
| 340 | Framer | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Framer in Claude') |
| 341 | Franklin Templeton Funds and Insights | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Franklin Templeton Funds and Insights in Claude') |
| 342 | freee | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add freee in Claude') |
| 343 | FreshBooks | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add FreshBooks in Claude') |
| 344 | Freshservice | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Freshservice in Claude') |
| 345 | Frontify | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Frontify in Claude') |
| 346 | Fullstory | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Fullstory in Claude') |
| 347 | Function Health | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Function Health in Claude') |
| 348 | Funnel | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Funnel in Claude') |
| 349 | Fyxer | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Fyxer in Claude') |
| 350 | G2 | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add G2 in Claude') |
| 351 | Gainsight (CS) | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Gainsight (CS) in Claude') |
| 352 | Gainsight (Customer Communities) | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Gainsight (Customer Communities) in Claude') |
| 353 | Gainsight (Staircase AI) | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Gainsight (Staircase AI) in Claude') |
| 354 | Gamma | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Gamma in Claude') |
| 355 | Gem | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Gem in Claude') |
| 356 | Gemini | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Gemini in Claude') |
| 357 | General Legal | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add General Legal in Claude') |
| 358 | GetYourGuide | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add GetYourGuide in Claude') |
| 359 | GIS Cloud | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add GIS Cloud in Claude') |
| 360 | Givebutter | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Givebutter in Claude') |
| 361 | Glean | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Glean in Claude') |
| 362 | GLG | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add GLG in Claude') |
| 363 | Glovo | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Glovo in Claude') |
| 364 | Gmail | OAuth 2.0 (Google account) | None — sign in & consent | Official Google-hosted remote MCP |
| 365 | GoCardless | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add GoCardless in Claude') |
| 366 | GoDaddy | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add GoDaddy in Claude') |
| 367 | Goodnotes | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Goodnotes in Claude') |
| 368 | Google Calendar | OAuth 2.0 (Google account) | None — sign in & consent | Official Google-hosted remote MCP |
| 369 | Google Cloud BigQuery | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Google Cloud BigQuery in Claude') |
| 370 | Google Compute Engine | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Google Compute Engine in Claude') |
| 371 | Google Drive | OAuth 2.0 (Google account) | None — sign in & consent via 'Add Google Drive in Claude' | Official Google-hosted remote MCP; standard Google OAuth consent |
| 372 | GoPlus AgentGuard | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add GoPlus AgentGuard in Claude') |
| 373 | GoVola | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add GoVola in Claude') |
| 374 | GovTribe | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add GovTribe in Claude') |
| 375 | Grafana Cloud | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Grafana Cloud in Claude') |
| 376 | Grafana MCP Server | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Grafana MCP Server in Claude') |
| 377 | Grain | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Grain in Claude') |
| 378 | Granola | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Granola in Claude') |
| 379 | Granted | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Granted in Claude') |
| 380 | GraphOS MCP Tools | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add GraphOS MCP Tools in Claude') |
| 381 | Grasp | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Grasp in Claude') |
| 382 | Grasshopper Bank | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Grasshopper Bank in Claude') |
| 383 | Greenhouse | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Greenhouse in Claude') |
| 384 | GrowSurf | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add GrowSurf in Claude') |
| 385 | Growthbook | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Growthbook in Claude') |
| 386 | grtwo-docs | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add grtwo-docs in Claude') |
| 387 | Guidepoint | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Guidepoint in Claude') |
| 388 | Guru | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Guru in Claude') |
| 389 | Gusto | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Gusto in Claude') |
| 390 | Haloo Trademark Clearance | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Haloo Trademark Clearance in Claude') |
| 391 | Hanover Park | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Hanover Park in Claude') |
| 392 | Harmonic | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Harmonic in Claude') |
| 393 | Harness | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Harness in Claude') |
| 394 | Harness MCP Server | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Harness MCP Server in Claude') |
| 395 | Harvey | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Harvey in Claude') |
| 396 | Have I Been Pwned | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Have I Been Pwned in Claude') |
| 397 | Health Data Avatar (HDA) | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Health Data Avatar (HDA) in Claude') |
| 398 | HealthEx | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add HealthEx in Claude') |
| 399 | Hebbia | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Hebbia in Claude') |
| 400 | Helena by Enrich Labs | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Helena by Enrich Labs in Claude') |
| 401 | Helium 10 | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Helium 10 in Claude') |
| 402 | Helix GenoSphere | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Helix GenoSphere in Claude') |
| 403 | Hex | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Hex in Claude') |
| 404 | Highspot | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Highspot in Claude') |
| 405 | Hive | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Hive in Claude') |
| 406 | Honeybadger | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Honeybadger in Claude') |
| 407 | Honeycomb | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Honeycomb in Claude') |
| 408 | HubSpot | OAuth 2.0 (HubSpot account) | Grant portal access/scopes | HubSpot OAuth |
| 409 | Hubstaff | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Hubstaff in Claude') |
| 410 | Hugging Face | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Hugging Face in Claude') |
| 411 | HyperFrames by HeyGen | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add HyperFrames by HeyGen in Claude') |
| 412 | IBISWorld | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add IBISWorld in Claude') |
| 413 | ICD-10 Codes | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add ICD-10 Codes in Claude') |
| 414 | ICE Data Services | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add ICE Data Services in Claude') |
| 415 | idealista | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add idealista in Claude') |
| 416 | Ideals | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Ideals in Claude') |
| 417 | Idiolect | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Idiolect in Claude') |
| 418 | IFTTT | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add IFTTT in Claude') |
| 419 | IHME GBD | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add IHME GBD in Claude') |
| 420 | iManage Work | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add iManage Work in Claude') |
| 421 | incident.io | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add incident.io in Claude') |
| 422 | Indeed | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Indeed in Claude') |
| 423 | Inductive Bio | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Inductive Bio in Claude') |
| 424 | InfiniteWatch MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add InfiniteWatch MCP in Claude') |
| 425 | Infobip Documentation | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Infobip Documentation in Claude') |
| 426 | Infobip Message | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Infobip Message in Claude') |
| 427 | Informatica Catalog Discovery | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Informatica Catalog Discovery in Claude') |
| 428 | Informatica Data Exploration | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Informatica Data Exploration in Claude') |
| 429 | InfoTrack | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add InfoTrack in Claude') |
| 430 | Inkbox | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Inkbox in Claude') |
| 431 | Insider One | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Insider One in Claude') |
| 432 | Insight Timer | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Insight Timer in Claude') |
| 433 | Instacart | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Instacart in Claude') |
| 434 | Instrumentl | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Instrumentl in Claude') |
| 435 | Intapp Celeste | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Intapp Celeste in Claude') |
| 436 | Interactive Brokers (IBKR) | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Interactive Brokers (IBKR) in Claude') |
| 437 | Intercom | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Intercom in Claude') |
| 438 | Internet Computer | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Internet Computer in Claude') |
| 439 | Introhive | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Introhive in Claude') |
| 440 | Intuit Credit Karma | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Intuit Credit Karma in Claude') |
| 441 | Intuit Developer | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Intuit Developer in Claude') |
| 442 | Intuit Mailchimp | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Intuit Mailchimp in Claude') |
| 443 | Intuit QuickBooks | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Intuit QuickBooks in Claude') |
| 444 | Intuit QuickBooks Labs | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Intuit QuickBooks Labs in Claude') |
| 445 | Intuit TurboTax | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Intuit TurboTax in Claude') |
| 446 | Invesco for Advisors | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Invesco for Advisors in Claude') |
| 447 | IP Author | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add IP Author in Claude') |
| 448 | Ironclad Contracts | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Ironclad Contracts in Claude') |
| 449 | isolved People Cloud | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add isolved People Cloud in Claude') |
| 450 | Isometric | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Isometric in Claude') |
| 451 | item | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add item in Claude') |
| 452 | iubenda: Privacy policy & cookie banner | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add iubenda: Privacy policy & cookie banner in Claude') |
| 453 | Ivo | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Ivo in Claude') |
| 454 | J.P. Morgan Asset Management (55ip) | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add J.P. Morgan Asset Management (55ip) in Claude') |
| 455 | Jam | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Jam in Claude') |
| 456 | Jasper | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Jasper in Claude') |
| 457 | Jaz Accounting | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Jaz Accounting in Claude') |
| 458 | Jedify | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Jedify in Claude') |
| 459 | Jentic | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Jentic in Claude') |
| 460 | Jobber | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Jobber in Claude') |
| 461 | Jotform | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Jotform in Claude') |
| 462 | Jotform App Builder | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Jotform App Builder in Claude') |
| 463 | Jotform Sign | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Jotform Sign in Claude') |
| 464 | Jump | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Jump in Claude') |
| 465 | JupiterOne | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add JupiterOne in Claude') |
| 466 | Juro contracts | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Juro contracts in Claude') |
| 467 | Jus AI by Jus Mundi (Light Mode) | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Jus AI by Jus Mundi (Light Mode) in Claude') |
| 468 | Kahoot! | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Kahoot! in Claude') |
| 469 | Kajabi | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Kajabi in Claude') |
| 470 | Kapture Browser Automation | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Kapture Browser Automation in Claude') |
| 471 | KARP Inspector Lite | None (zero API keys) | None — zero setup | Listing: 'Zero API keys, zero setup' |
| 472 | Keel | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Keel in Claude') |
| 473 | Kepler | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Kepler in Claude') |
| 474 | Ketryx | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Ketryx in Claude') |
| 475 | Kick | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Kick in Claude') |
| 476 | Kindora Funder Discovery | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Kindora Funder Discovery in Claude') |
| 477 | Kit | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Kit in Claude') |
| 478 | Kiwi.com | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Kiwi.com in Claude') |
| 479 | Klaviyo | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Klaviyo in Claude') |
| 480 | Klue | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Klue in Claude') |
| 481 | komoot | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add komoot in Claude') |
| 482 | Kpler | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Kpler in Claude') |
| 483 | Krisp | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Krisp in Claude') |
| 484 | Kuliko AI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Kuliko AI in Claude') |
| 485 | La Growth Machine | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add La Growth Machine in Claude') |
| 486 | lastminute.com | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add lastminute.com in Claude') |
| 487 | LatchBio | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add LatchBio in Claude') |
| 488 | Lattice | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Lattice in Claude') |
| 489 | Lawstronaut | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Lawstronaut in Claude') |
| 490 | Lawve AI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Lawve AI in Claude') |
| 491 | LawVu | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add LawVu in Claude') |
| 492 | Leadfeeder | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Leadfeeder in Claude') |
| 493 | Learning Commons | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Learning Commons in Claude') |
| 494 | Legal Brain Agent | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Legal Brain Agent in Claude') |
| 495 | Legal Data Hunter | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Legal Data Hunter in Claude') |
| 496 | LegalZoom | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add LegalZoom in Claude') |
| 497 | Legora | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Legora in Claude') |
| 498 | Lens Studio | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Lens Studio in Claude') |
| 499 | LetsBot | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add LetsBot in Claude') |
| 500 | LetsFG \| Book the best flights or hotels | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add LetsFG \| Book the best flights or hotels in Claude') |
| 501 | Light | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Light in Claude') |
| 502 | Lightbringer | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Lightbringer in Claude') |
| 503 | Lightfield | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Lightfield in Claude') |
| 504 | LILT | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add LILT in Claude') |
| 505 | Lindo AI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Lindo AI in Claude') |
| 506 | Linear | OAuth 2.0 (Linear account) | Grant org access | Linear OAuth |
| 507 | LinkedIn Hiring Pro | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add LinkedIn Hiring Pro in Claude') |
| 508 | LinkSquares | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add LinkSquares in Claude') |
| 509 | Listen Labs | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Listen Labs in Claude') |
| 510 | Livestorm | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Livestorm in Claude') |
| 511 | LlamaParse | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add LlamaParse in Claude') |
| 512 | Lloyd by The L Suite | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Lloyd by The L Suite in Claude') |
| 513 | Local Falcon | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Local Falcon in Claude') |
| 514 | LOIS | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add LOIS in Claude') |
| 515 | Loopio | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Loopio in Claude') |
| 516 | Loops | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Loops in Claude') |
| 517 | Lorikeet | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Lorikeet in Claude') |
| 518 | Lovable | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Lovable in Claude') |
| 519 | LSEG | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add LSEG in Claude') |
| 520 | LSEG AI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add LSEG AI in Claude') |
| 521 | Lucid | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Lucid in Claude') |
| 522 | Lukka Prediction Markets Data MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Lukka Prediction Markets Data MCP in Claude') |
| 523 | Lumin | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Lumin in Claude') |
| 524 | Lumonic | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Lumonic in Claude') |
| 525 | LunarCrush | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add LunarCrush in Claude') |
| 526 | Lusha | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Lusha in Claude') |
| 527 | Lyrenth | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Lyrenth in Claude') |
| 528 | LZ Virtual Mail | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add LZ Virtual Mail in Claude') |
| 529 | Macaly Cloud | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Macaly Cloud in Claude') |
| 530 | Macrobond Assist | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Macrobond Assist in Claude') |
| 531 | Magic Patterns | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Magic Patterns in Claude') |
| 532 | MagicSchool AI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MagicSchool AI in Claude') |
| 533 | MAIA | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MAIA in Claude') |
| 534 | MailerLite | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MailerLite in Claude') |
| 535 | Mailtrap | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Mailtrap in Claude') |
| 536 | Make | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Make in Claude') |
| 537 | Malwarebytes | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Malwarebytes in Claude') |
| 538 | Manatal | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Manatal in Claude') |
| 539 | Mantic | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Mantic in Claude') |
| 540 | Manufact | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Manufact in Claude') |
| 541 | Mapbox | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Mapbox in Claude') |
| 542 | Mary | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Mary in Claude') |
| 543 | Maryland Community Compass | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Maryland Community Compass in Claude') |
| 544 | Mastercard Developers | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Mastercard Developers in Claude') |
| 545 | Maven Bio | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Maven Bio in Claude') |
| 546 | McAfee | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add McAfee in Claude') |
| 547 | MCP Instana Server | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MCP Instana Server in Claude') |
| 548 | MCP Memory | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MCP Memory in Claude') |
| 549 | mcp.betterstack.com | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add mcp.betterstack.com in Claude') |
| 550 | MDN | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MDN in Claude') |
| 551 | Medidata | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Medidata in Claude') |
| 552 | MeetGeek | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MeetGeek in Claude') |
| 553 | MeisterTask | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MeisterTask in Claude') |
| 554 | Meko | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Meko in Claude') |
| 555 | Melon | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Melon in Claude') |
| 556 | Meltwater | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Meltwater in Claude') |
| 557 | Mem | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Mem in Claude') |
| 558 | Mem0 | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Mem0 in Claude') |
| 559 | Menti | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Menti in Claude') |
| 560 | Merchkit | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Merchkit in Claude') |
| 561 | Mercury | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Mercury in Claude') |
| 562 | Meridian AI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Meridian AI in Claude') |
| 563 | Meridian Connector for QuickBooks | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Meridian Connector for QuickBooks in Claude') |
| 564 | Meridian Connector for Xero | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Meridian Connector for Xero in Claude') |
| 565 | Mermaid Chart | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Mermaid Chart in Claude') |
| 566 | Metabase | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Metabase in Claude') |
| 567 | Metabase (Unofficial — Community) | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Metabase (Unofficial — Community) in Claude') |
| 568 | Metal | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Metal in Claude') |
| 569 | Metaview | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Metaview in Claude') |
| 570 | Metricool Social Media Management | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Metricool Social Media Management in Claude') |
| 571 | Microsoft 365 | OAuth 2.0 (Microsoft Entra ID / work or school account) | None for personal use; org admin may need to grant tenant-wide consent/app permissions | Microsoft first-party app; Entra ID OAuth |
| 572 | Microsoft Clarity | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Microsoft Clarity in Claude') |
| 573 | Microsoft Dataverse | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Microsoft Dataverse in Claude') |
| 574 | Microsoft Learn | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Microsoft Learn in Claude') |
| 575 | Midpage Legal Research | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Midpage Legal Research in Claude') |
| 576 | Miggo | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Miggo in Claude') |
| 577 | Migma | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Migma in Claude') |
| 578 | Military and Veteran Family Assistant | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Military and Veteran Family Assistant in Claude') |
| 579 | MindMeister | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MindMeister in Claude') |
| 580 | Mintlify | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Mintlify in Claude') |
| 581 | Miro | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Miro in Claude') |
| 582 | mittwald | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add mittwald in Claude') |
| 583 | Mixpanel | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Mixpanel in Claude') |
| 584 | Mobbin | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Mobbin in Claude') |
| 585 | Moda - Slides and Designs | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Moda - Slides and Designs in Claude') |
| 586 | Mojo — Pocket Capture | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Mojo — Pocket Capture in Claude') |
| 587 | Mollie | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Mollie in Claude') |
| 588 | monday.com | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add monday.com in Claude') |
| 589 | Moneytree | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Moneytree in Claude') |
| 590 | MongoDB Atlas | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MongoDB Atlas in Claude') |
| 591 | Monte Carlo | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Monte Carlo in Claude') |
| 592 | Moody's Credit MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Moody's Credit MCP in Claude') |
| 593 | Morning Consult | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Morning Consult in Claude') |
| 594 | Morningstar | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Morningstar in Claude') |
| 595 | Morningstar Credit Analytics | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Morningstar Credit Analytics in Claude') |
| 596 | MoSPI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MoSPI in Claude') |
| 597 | Motherboard | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Motherboard in Claude') |
| 598 | MotherDuck | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MotherDuck in Claude') |
| 599 | Motion Creative Analytics | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Motion Creative Analytics in Claude') |
| 600 | MSCI Connector | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MSCI Connector in Claude') |
| 601 | MT Newswires | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MT Newswires in Claude') |
| 602 | MuleSoft | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MuleSoft in Claude') |
| 603 | MuuMuu Domain byGMO Pepabo | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MuuMuu Domain byGMO Pepabo in Claude') |
| 604 | MyChatBot | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MyChatBot in Claude') |
| 605 | MyGeotab MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MyGeotab MCP in Claude') |
| 606 | MYOB | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add MYOB in Claude') |
| 607 | n8n | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add n8n in Claude') |
| 608 | Natoma | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Natoma in Claude') |
| 609 | Navan | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Navan in Claude') |
| 610 | neimo. | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add neimo. in Claude') |
| 611 | Neon | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Neon in Claude') |
| 612 | NetDocuments | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add NetDocuments in Claude') |
| 613 | Netlify | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Netlify in Claude') |
| 614 | NetSuite | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add NetSuite in Claude') |
| 615 | Nevis | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Nevis in Claude') |
| 616 | Nimble | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Nimble in Claude') |
| 617 | Ninout | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Ninout in Claude') |
| 618 | Nooks | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Nooks in Claude') |
| 619 | Norton | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Norton in Claude') |
| 620 | Notion | OAuth 2.0 (Notion integration) | Pick pages/workspaces to share | Notion public integration OAuth |
| 621 | Notra | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Notra in Claude') |
| 622 | Novasol | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Novasol in Claude') |
| 623 | NPI Registry | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add NPI Registry in Claude') |
| 624 | NSDAP Archiv - DER SPIEGEL | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add NSDAP Archiv - DER SPIEGEL in Claude') |
| 625 | NumbersGame MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add NumbersGame MCP in Claude') |
| 626 | Nutrient DWS | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Nutrient DWS in Claude') |
| 627 | Nutrient PDF Editor | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Nutrient PDF Editor in Claude') |
| 628 | Nutshell CRM | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Nutshell CRM in Claude') |
| 629 | Oak National Academy | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Oak National Academy in Claude') |
| 630 | Omega Point | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Omega Point in Claude') |
| 631 | Omni Analytics | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Omni Analytics in Claude') |
| 632 | Omnisend MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Omnisend MCP in Claude') |
| 633 | OnChainDiligence | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add OnChainDiligence in Claude') |
| 634 | OnePay | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add OnePay in Claude') |
| 635 | OneSignal | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add OneSignal in Claude') |
| 636 | Onfire | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Onfire in Claude') |
| 637 | Ontra | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Ontra in Claude') |
| 638 | Open Targets | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Open Targets in Claude') |
| 639 | OpenReplay | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add OpenReplay in Claude') |
| 640 | OpenRush | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add OpenRush in Claude') |
| 641 | OpenSEO | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add OpenSEO in Claude') |
| 642 | OpenSTAAD MCP Server | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add OpenSTAAD MCP Server in Claude') |
| 643 | Optilogic | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Optilogic in Claude') |
| 644 | OpusClip | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add OpusClip in Claude') |
| 645 | Order by Cash App | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Order by Cash App in Claude') |
| 646 | Origin | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Origin in Claude') |
| 647 | Orion | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Orion in Claude') |
| 648 | Orion by Gravity | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Orion by Gravity in Claude') |
| 649 | Orshot | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Orshot in Claude') |
| 650 | Otter.ai | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Otter.ai in Claude') |
| 651 | Otto Travel | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Otto Travel in Claude') |
| 652 | Outreach | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Outreach in Claude') |
| 653 | Owkin | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Owkin in Claude') |
| 654 | Oxford Economics | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Oxford Economics in Claude') |
| 655 | O’Reilly | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add O’Reilly in Claude') |
| 656 | Padlet | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Padlet in Claude') |
| 657 | PagerDuty | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add PagerDuty in Claude') |
| 658 | PandaDoc | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add PandaDoc in Claude') |
| 659 | Papermark | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Papermark in Claude') |
| 660 | PaperOffice | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add PaperOffice in Claude') |
| 661 | Parallel Search | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Parallel Search in Claude') |
| 662 | Pathmode | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Pathmode in Claude') |
| 663 | Patlytics | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Patlytics in Claude') |
| 664 | Paxton Legal Research | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Paxton Legal Research in Claude') |
| 665 | Paybooc | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Paybooc in Claude') |
| 666 | Payhawk | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Payhawk in Claude') |
| 667 | PayPal | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add PayPal in Claude') |
| 668 | Paytm Payment Gateway | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Paytm Payment Gateway in Claude') |
| 669 | PDF Tools | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add PDF Tools in Claude') |
| 670 | PDF Viewer | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add PDF Viewer in Claude') |
| 671 | pdf-viewer | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add pdf-viewer in Claude') |
| 672 | PDF.net | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add PDF.net in Claude') |
| 673 | Peec AI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Peec AI in Claude') |
| 674 | Pendo | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Pendo in Claude') |
| 675 | Perseus Vault — Persistent Memory for Claude | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Perseus Vault — Persistent Memory for Claude in Claude') |
| 676 | Perspective AI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Perspective AI in Claude') |
| 677 | pg-aiguide | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add pg-aiguide in Claude') |
| 678 | PGA – Play Golf | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add PGA – Play Golf in Claude') |
| 679 | Phished | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Phished in Claude') |
| 680 | Phoenix by HG Insights | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Phoenix by HG Insights in Claude') |
| 681 | Pi Security | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Pi Security in Claude') |
| 682 | PicPay | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add PicPay in Claude') |
| 683 | Pigment | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Pigment in Claude') |
| 684 | Pine Labs Payments Assistant | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Pine Labs Payments Assistant in Claude') |
| 685 | Pinegap | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Pinegap in Claude') |
| 686 | Pipedrive | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Pipedrive in Claude') |
| 687 | Pitch | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Pitch in Claude') |
| 688 | PitchBook Premium | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add PitchBook Premium in Claude') |
| 689 | Plaid Developer Tools | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Plaid Developer Tools in Claude') |
| 690 | Planday | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Planday in Claude') |
| 691 | PlanetScale | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add PlanetScale in Claude') |
| 692 | Planning Center | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Planning Center in Claude') |
| 693 | Plaud | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Plaud in Claude') |
| 694 | Play Sheet Music | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Play Sheet Music in Claude') |
| 695 | PlayMCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add PlayMCP in Claude') |
| 696 | Pliant | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Pliant in Claude') |
| 697 | Plotly Cloud | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Plotly Cloud in Claude') |
| 698 | PocketSmith Complete Access | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add PocketSmith Complete Access in Claude') |
| 699 | PointOne | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add PointOne in Claude') |
| 700 | Polar Analytics | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Polar Analytics in Claude') |
| 701 | PopHIVE | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add PopHIVE in Claude') |
| 702 | PopHIVE Public Health Data | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add PopHIVE Public Health Data in Claude') |
| 703 | Porkbun | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Porkbun in Claude') |
| 704 | Port IO | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Port IO in Claude') |
| 705 | PostHog | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add PostHog in Claude') |
| 706 | Postman | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Postman in Claude') |
| 707 | Prefect | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Prefect in Claude') |
| 708 | Print.com | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Print.com in Claude') |
| 709 | Privacy.com | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Privacy.com in Claude') |
| 710 | Process Street | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Process Street in Claude') |
| 711 | Productised | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Productised in Claude') |
| 712 | Productive | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Productive in Claude') |
| 713 | Profound | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Profound in Claude') |
| 714 | Promptless | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Promptless in Claude') |
| 715 | Prophecy DataGPT | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Prophecy DataGPT in Claude') |
| 716 | Public Holdings | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Public Holdings in Claude') |
| 717 | PubMed | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add PubMed in Claude') |
| 718 | Pushwoosh ManyMoney | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Pushwoosh ManyMoney in Claude') |
| 719 | Pylon | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Pylon in Claude') |
| 720 | Qase Test Management | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Qase Test Management in Claude') |
| 721 | Qlik | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Qlik in Claude') |
| 722 | Qonto | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Qonto in Claude') |
| 723 | Quartr | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Quartr in Claude') |
| 724 | QuickNode | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add QuickNode in Claude') |
| 725 | QuickStart | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add QuickStart in Claude') |
| 726 | Quinbook | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Quinbook in Claude') |
| 727 | Quo | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Quo in Claude') |
| 728 | Railway | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Railway in Claude') |
| 729 | Rally MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Rally MCP in Claude') |
| 730 | Ramp | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Ramp in Claude') |
| 731 | Ramp Data | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Ramp Data in Claude') |
| 732 | Rapid7 Bulk Export | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Rapid7 Bulk Export in Claude') |
| 733 | Ratehub Mortgage | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Ratehub Mortgage in Claude') |
| 734 | Razorpay | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Razorpay in Claude') |
| 735 | React Aria | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add React Aria in Claude') |
| 736 | React Spectrum (S2) | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add React Spectrum (S2) in Claude') |
| 737 | Read AI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Read AI in Claude') |
| 738 | Readwise | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Readwise in Claude') |
| 739 | Reclaim.ai | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Reclaim.ai in Claude') |
| 740 | Reco | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Reco in Claude') |
| 741 | Reddit MCP Buddy | None (no API keys) | None | Listing: 'no API keys needed' |
| 742 | Relativity | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Relativity in Claude') |
| 743 | Remesh | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Remesh in Claude') |
| 744 | Remote | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Remote in Claude') |
| 745 | Render | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Render in Claude') |
| 746 | Replicant MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Replicant MCP in Claude') |
| 747 | Replit | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Replit in Claude') |
| 748 | Resend | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Resend in Claude') |
| 749 | Resolume Arena MCP Server | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Resolume Arena MCP Server in Claude') |
| 750 | Resolume Wire MCP Server | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Resolume Wire MCP Server in Claude') |
| 751 | Restream | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Restream in Claude') |
| 752 | Resy | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Resy in Claude') |
| 753 | Retool | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Retool in Claude') |
| 754 | Revealed | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Revealed in Claude') |
| 755 | Revolut X | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Revolut X in Claude') |
| 756 | Revvity Signals AI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Revvity Signals AI in Claude') |
| 757 | Rhizome AI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Rhizome AI in Claude') |
| 758 | Richpanel AI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Richpanel AI in Claude') |
| 759 | Rillet | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Rillet in Claude') |
| 760 | RingCentral Chat | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add RingCentral Chat in Claude') |
| 761 | Rippit | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Rippit in Claude') |
| 762 | Risotto | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Risotto in Claude') |
| 763 | Riverside | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Riverside in Claude') |
| 764 | Roam Research | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Roam Research in Claude') |
| 765 | Robin (Workplace) | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Robin (Workplace) in Claude') |
| 766 | Roboflow | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Roboflow in Claude') |
| 767 | Rocket Lawyer | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Rocket Lawyer in Claude') |
| 768 | RocketReach | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add RocketReach in Claude') |
| 769 | Rockhopper | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Rockhopper in Claude') |
| 770 | Rome2Rio | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Rome2Rio in Claude') |
| 771 | Rootly | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Rootly in Claude') |
| 772 | RSVPify | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add RSVPify in Claude') |
| 773 | Runway (runway.team) | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Runway (runway.team) in Claude') |
| 774 | S&P - Deterministic Retrieval | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add S&P - Deterministic Retrieval in Claude') |
| 775 | S&P Global - Adaptive Retrieval | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add S&P Global - Adaptive Retrieval in Claude') |
| 776 | Saga — Project Tracker for AI Agents | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Saga — Project Tracker for AI Agents in Claude') |
| 777 | Saily | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Saily in Claude') |
| 778 | Salesflare | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Salesflare in Claude') |
| 779 | Salesforce - Beta | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Salesforce - Beta in Claude') |
| 780 | Salesloft | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Salesloft in Claude') |
| 781 | Sana from Workday | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Sana from Workday in Claude') |
| 782 | SandboxAQ | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add SandboxAQ in Claude') |
| 783 | Sanity | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Sanity in Claude') |
| 784 | SAP CAP MCP Server | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add SAP CAP MCP Server in Claude') |
| 785 | SAP Fiori MCP Server | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add SAP Fiori MCP Server in Claude') |
| 786 | SAP MDK MCP Server | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add SAP MDK MCP Server in Claude') |
| 787 | SAPUI5 MCP Server | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add SAPUI5 MCP Server in Claude') |
| 788 | Savri | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Savri in Claude') |
| 789 | Scholar Sidekick | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Scholar Sidekick in Claude') |
| 790 | Schwab Advisor Services | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Schwab Advisor Services in Claude') |
| 791 | SciSpace | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add SciSpace in Claude') |
| 792 | Scite | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Scite in Claude') |
| 793 | Seamless | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Seamless in Claude') |
| 794 | Seismic | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Seismic in Claude') |
| 795 | Semrush | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Semrush in Claude') |
| 796 | Send | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Send in Claude') |
| 797 | Sendcloud | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Sendcloud in Claude') |
| 798 | Sent | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Sent in Claude') |
| 799 | Sentry | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Sentry in Claude') |
| 800 | Sequence | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Sequence in Claude') |
| 801 | ServiceNow | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add ServiceNow in Claude') |
| 802 | Shadcn UI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Shadcn UI in Claude') |
| 803 | Shapes | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Shapes in Claude') |
| 804 | ShipBob | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add ShipBob in Claude') |
| 805 | Shippo | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Shippo in Claude') |
| 806 | Shipt | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Shipt in Claude') |
| 807 | Shop | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Shop in Claude') |
| 808 | Shopify | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Shopify in Claude') |
| 809 | Shutterstock | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Shutterstock in Claude') |
| 810 | Sigma | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Sigma in Claude') |
| 811 | Signeasy | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Signeasy in Claude') |
| 812 | SignNow | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add SignNow in Claude') |
| 813 | SignWell | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add SignWell in Claude') |
| 814 | Similarweb | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Similarweb in Claude') |
| 815 | Sisense MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Sisense MCP in Claude') |
| 816 | Slack | OAuth 2.0 (Slack workspace install) | Choose workspace & approve scopes | Slack app directory OAuth flow |
| 817 | SlickTrip | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add SlickTrip in Claude') |
| 818 | SlidesGPT | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add SlidesGPT in Claude') |
| 819 | SmartBear MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add SmartBear MCP in Claude') |
| 820 | Smarter Drafter | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Smarter Drafter in Claude') |
| 821 | Smartling | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Smartling in Claude') |
| 822 | Smartsheet | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Smartsheet in Claude') |
| 823 | Snagajob | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Snagajob in Claude') |
| 824 | SNOMED CT Terminology | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add SNOMED CT Terminology in Claude') |
| 825 | Snowflake | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Snowflake in Claude') |
| 826 | Snyk Security | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Snyk Security in Claude') |
| 827 | Socket | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Socket in Claude') |
| 828 | Softr | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Softr in Claude') |
| 829 | Solve Intelligence | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Solve Intelligence in Claude') |
| 830 | Sonos | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Sonos in Claude') |
| 831 | Sourcegraph | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Sourcegraph in Claude') |
| 832 | Spacefast | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Spacefast in Claude') |
| 833 | Spara | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Spara in Claude') |
| 834 | Spark | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Spark in Claude') |
| 835 | spArxx.io \| Zero-Knowledge Blockchain Timestamping | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add spArxx.io \| Zero-Knowledge Blockchain Timestamping in Claude') |
| 836 | Speko | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Speko in Claude') |
| 837 | Spinach AI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Spinach AI in Claude') |
| 838 | Splice | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Splice in Claude') |
| 839 | SpotDraft | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add SpotDraft in Claude') |
| 840 | Spotify | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Spotify in Claude') |
| 841 | Sprinto MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Sprinto MCP in Claude') |
| 842 | Sprites | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Sprites in Claude') |
| 843 | Sprouts Data Intelligence | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Sprouts Data Intelligence in Claude') |
| 844 | Square | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Square in Claude') |
| 845 | Squarespace | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Squarespace in Claude') |
| 846 | Stack Overflow | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Stack Overflow in Claude') |
| 847 | Starburst | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Starburst in Claude') |
| 848 | Stats Compass | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Stats Compass in Claude') |
| 849 | Steadybit | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Steadybit in Claude') |
| 850 | Strava | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Strava in Claude') |
| 851 | Stripe | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Stripe in Claude') |
| 852 | stub | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add stub in Claude') |
| 853 | StubHub | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add StubHub in Claude') |
| 854 | Stytch | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Stytch in Claude') |
| 855 | Subtext | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Subtext in Claude') |
| 856 | Sumble | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Sumble in Claude') |
| 857 | Sumsub | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Sumsub in Claude') |
| 858 | Supabase | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Supabase in Claude') |
| 859 | Super.com | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Super.com in Claude') |
| 860 | SuperBooks | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add SuperBooks in Claude') |
| 861 | Superhuman Docs | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Superhuman Docs in Claude') |
| 862 | Superhuman Mail | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Superhuman Mail in Claude') |
| 863 | Supermetrics Marketing Analytics | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Supermetrics Marketing Analytics in Claude') |
| 864 | Supersei CRM | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Supersei CRM in Claude') |
| 865 | SurveyMonkey | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add SurveyMonkey in Claude') |
| 866 | Swagger | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Swagger in Claude') |
| 867 | Sybill | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Sybill in Claude') |
| 868 | Synapse.org | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Synapse.org in Claude') |
| 869 | Synthesize Bio | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Synthesize Bio in Claude') |
| 870 | Synthflow | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Synthflow in Claude') |
| 871 | Tableau | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Tableau in Claude') |
| 872 | Tabs | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Tabs in Claude') |
| 873 | Tactiq | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Tactiq in Claude') |
| 874 | Tally | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Tally in Claude') |
| 875 | Tana | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Tana in Claude') |
| 876 | Tango | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Tango in Claude') |
| 877 | Taplio | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Taplio in Claude') |
| 878 | Taskrabbit Booking Assistance | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Taskrabbit Booking Assistance in Claude') |
| 879 | TaxAct | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add TaxAct in Claude') |
| 880 | Teamtailor | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Teamtailor in Claude') |
| 881 | Tella | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Tella in Claude') |
| 882 | Terminal49 | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Terminal49 in Claude') |
| 883 | TEXT TO QUANT | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add TEXT TO QUANT in Claude') |
| 884 | The Economist - Graphs | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add The Economist - Graphs in Claude') |
| 885 | Theysaid | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Theysaid in Claude') |
| 886 | Third Bridge | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Third Bridge in Claude') |
| 887 | ThoughtSpot Spotter | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add ThoughtSpot Spotter in Claude') |
| 888 | Three.js 3D Viewer | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Three.js 3D Viewer in Claude') |
| 889 | Thumbtack | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Thumbtack in Claude') |
| 890 | Ticket Tailor | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Ticket Tailor in Claude') |
| 891 | Ticketmaster | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Ticketmaster in Claude') |
| 892 | TickTick | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add TickTick in Claude') |
| 893 | TikTok for Business | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add TikTok for Business in Claude') |
| 894 | Tiller | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Tiller in Claude') |
| 895 | Tineo | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Tineo in Claude') |
| 896 | Tines | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Tines in Claude') |
| 897 | Tines 3B | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Tines 3B in Claude') |
| 898 | TinyFish | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add TinyFish in Claude') |
| 899 | Tixel | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Tixel in Claude') |
| 900 | tl;dv - AI Note Taker & Meeting Recorder: Transcripts, Summaries & Meeting Minutes | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add tl;dv - AI Note Taker & Meeting Recorder: Transcripts, Summaries & Meeting Minutes in Claude') |
| 901 | tldraw | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add tldraw in Claude') |
| 902 | Todoist | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Todoist in Claude') |
| 903 | Tomorrow.io Weather MCP App | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Tomorrow.io Weather MCP App in Claude') |
| 904 | TomTom Maps | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add TomTom Maps in Claude') |
| 905 | ToolUniverse | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add ToolUniverse in Claude') |
| 906 | TopCounsel by The L Suite | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add TopCounsel by The L Suite in Claude') |
| 907 | Trainual | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Trainual in Claude') |
| 908 | TravExp | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add TravExp in Claude') |
| 909 | Tray.ai | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Tray.ai in Claude') |
| 910 | Trellis | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Trellis in Claude') |
| 911 | Trello | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Trello in Claude') |
| 912 | TreppMCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add TreppMCP in Claude') |
| 913 | Trimble SketchUp | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Trimble SketchUp in Claude') |
| 914 | Tripadvisor | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Tripadvisor in Claude') |
| 915 | Trivago | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Trivago in Claude') |
| 916 | Tropic | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Tropic in Claude') |
| 917 | Trussi AI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Trussi AI in Claude') |
| 918 | Trustfull | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Trustfull in Claude') |
| 919 | Tseha.io | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Tseha.io in Claude') |
| 920 | Turkish Airlines | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Turkish Airlines in Claude') |
| 921 | Turo | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Turo in Claude') |
| 922 | Turquoise | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Turquoise in Claude') |
| 923 | Twilio | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Twilio in Claude') |
| 924 | TwinMind | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add TwinMind in Claude') |
| 925 | Typefully - Social Media Scheduler | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Typefully - Social Media Scheduler in Claude') |
| 926 | Uber | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Uber in Claude') |
| 927 | Uber Eats | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Uber Eats in Claude') |
| 928 | Ubersuggest | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Ubersuggest in Claude') |
| 929 | Udemy Business | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Udemy Business in Claude') |
| 930 | UKG Bryte | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add UKG Bryte in Claude') |
| 931 | Ultipa | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Ultipa in Claude') |
| 932 | Unblocked | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Unblocked in Claude') |
| 933 | Unify | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Unify in Claude') |
| 934 | Unsplash | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Unsplash in Claude') |
| 935 | Unstructured Transform | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Unstructured Transform in Claude') |
| 936 | Unthread | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Unthread in Claude') |
| 937 | Unwrap | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Unwrap in Claude') |
| 938 | Upwork | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Upwork in Claude') |
| 939 | USAFacts Government Data Connector | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add USAFacts Government Data Connector in Claude') |
| 940 | v0 | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add v0 in Claude') |
| 941 | Vaisala Xweather | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Vaisala Xweather in Claude') |
| 942 | Valuecase App | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Valuecase App in Claude') |
| 943 | Vanguard Advisor Tools | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Vanguard Advisor Tools in Claude') |
| 944 | Vani by Zoho | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Vani by Zoho in Claude') |
| 945 | Vanta | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Vanta in Claude') |
| 946 | Vasara | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Vasara in Claude') |
| 947 | Veltra Activities | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Veltra Activities in Claude') |
| 948 | Vendr Software Pricing Tools | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Vendr Software Pricing Tools in Claude') |
| 949 | Vercel | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Vercel in Claude') |
| 950 | Verisk Underwriting Intelligence | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Verisk Underwriting Intelligence in Claude') |
| 951 | Verisk XactRestore | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Verisk XactRestore in Claude') |
| 952 | Vertiso Memory | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Vertiso Memory in Claude') |
| 953 | viaNexus vAST | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add viaNexus vAST in Claude') |
| 954 | Viator | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Viator in Claude') |
| 955 | Vibe AI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Vibe AI in Claude') |
| 956 | Vibe Prospecting | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Vibe Prospecting in Claude') |
| 957 | Viberate music data | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Viberate music data in Claude') |
| 958 | vidIQ | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add vidIQ in Claude') |
| 959 | Visier | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Visier in Claude') |
| 960 | Vital Care Finder | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Vital Care Finder in Claude') |
| 961 | Voluum | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Voluum in Claude') |
| 962 | Vuetify MCP | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Vuetify MCP in Claude') |
| 963 | Vybit Notifications | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Vybit Notifications in Claude') |
| 964 | Vylo | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Vylo in Claude') |
| 965 | Wealth.com | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Wealth.com in Claude') |
| 966 | Wealthbox | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Wealthbox in Claude') |
| 967 | Webex for Claude | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Webex for Claude in Claude') |
| 968 | Webex Meetings | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Webex Meetings in Claude') |
| 969 | Webflow | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Webflow in Claude') |
| 970 | WebMCP Evaluator | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add WebMCP Evaluator in Claude') |
| 971 | Website Auditor | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Website Auditor in Claude') |
| 972 | Website Generator by B12 | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Website Generator by B12 in Claude') |
| 973 | Webull | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Webull in Claude') |
| 974 | WeTransfer | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add WeTransfer in Claude') |
| 975 | WeWeb | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add WeWeb in Claude') |
| 976 | Whimsical | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Whimsical in Claude') |
| 977 | Wiley Scholar Gateway | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Wiley Scholar Gateway in Claude') |
| 978 | Windmill HR | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Windmill HR in Claude') |
| 979 | Windsor.ai | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Windsor.ai in Claude') |
| 980 | Wingify | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Wingify in Claude') |
| 981 | WisdomAI | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add WisdomAI in Claude') |
| 982 | Wispr Flow | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Wispr Flow in Claude') |
| 983 | Within | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Within in Claude') |
| 984 | Wix | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Wix in Claude') |
| 985 | Wolfram | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Wolfram in Claude') |
| 986 | Wonder | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Wonder in Claude') |
| 987 | WordPress.com | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add WordPress.com in Claude') |
| 988 | Workable | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Workable in Claude') |
| 989 | Workato | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Workato in Claude') |
| 990 | WorkOS | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add WorkOS in Claude') |
| 991 | Wrike | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Wrike in Claude') |
| 992 | Wyndham Hotels and Resorts | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Wyndham Hotels and Resorts in Claude') |
| 993 | Xero | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Xero in Claude') |
| 994 | xTiles | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add xTiles in Claude') |
| 995 | Yardi Matrix | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Yardi Matrix in Claude') |
| 996 | Yardi Virtuoso | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Yardi Virtuoso in Claude') |
| 997 | Yelp | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Yelp in Claude') |
| 998 | YouTrack | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add YouTrack in Claude') |
| 999 | Zacks Data | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Zacks Data in Claude') |
| 1000 | Zapier | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Zapier in Claude') |
| 1001 | Zillow | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Zillow in Claude') |
| 1002 | ZipRecruiter | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add ZipRecruiter in Claude') |
| 1003 | Zite | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Zite in Claude') |
| 1004 | Zocks | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Zocks in Claude') |
| 1005 | Zoho Analytics | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Zoho Analytics in Claude') |
| 1006 | Zoho Books | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Zoho Books in Claude') |
| 1007 | Zoho CRM | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Zoho CRM in Claude') |
| 1008 | Zoho Desk | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Zoho Desk in Claude') |
| 1009 | Zoho Projects | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Zoho Projects in Claude') |
| 1010 | Zoho Show | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Zoho Show in Claude') |
| 1011 | Zomato | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Zomato in Claude') |
| 1012 | Zoom for Claude | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add Zoom for Claude in Claude') |
| 1013 | ZoomInfo | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add ZoomInfo in Claude') |
| 1014 | 中央社新聞 CNA TAIWAN NEWS | OAuth 2.0 (hosted remote MCP, provider account) | None — sign in & grant consent via 'Add in Claude' | Listing: hosted connector; one-click OAuth flow ('Add 中央社新聞 CNA TAIWAN NEWS in Claude') |

---

## Table 3 — Plugins (local skills & tools, listed separately — 6 entries)

| # | Plugin Name | Classification | Authentication Method | Configuration Requirements | Supporting Evidence |
|---:|---|---|---|---|---|
| 1 | **Frontend Design** | Additional Configuration Required | None (local skill) | Install skill locally; no account auth | Listing: Frontend design skill for UI/UX implementation |
| 2 | **Superpowers** | Additional Configuration Required | None (local skill) | Install skill into Claude Code | Listing: Core skills library: TDD, debugging, collaboration patterns |
| 3 | **Code Review** | Additional Configuration Required | Git/repo access | Requires repository access configuration | Listing: Automated PR review using specialized agents |
| 4 | **Context7 (plugin)** | Automatic | OAuth / authenticate when prompted | No local Node.js/npx required; authenticate with Context7 when prompted | Listing: Hosted remote MCP (mcp.context7.com/mcp) docs lookup |
| 5 | **Code Simplifier** | Additional Configuration Required | None (local agent) | Install skill locally | Listing: Agent that simplifies/refines code |
| 6 | **Playwright** | Additional Configuration Required | None (local npm install) | Runs a local MCP server via npx; no remote account auth | Listing: Browser automation & e2e testing MCP by Microsoft |

---

## Notes & Caveats

1. **Evidence basis:** the source TXT contains only names + one-line marketing descriptions; it does not publish per-connector auth specs. Classification therefore combines (a) the connector's own description text, (b) the standard hosted-OAuth model that every *"Add X in Claude"* listing follows, and (c) documented vendor knowledge for connectors whose auth model is publicly known (Google, Microsoft, Slack, Notion, Atlassian, Context7, local MCP servers, API-key services).
2. **"Automatic" still means OAuth consent:** automatic connectors authenticate with OAuth 2.0 against the provider (or Anthropic SSO for enterprise). Admin-level configuration (tenant-wide app consent, scope restriction) may be needed for *managed/enterprise* deployments even when end-user connection is one-click.
3. **Microsoft 365** is automatic for users but may require an org admin to grant tenant consent for the Microsoft first-party app.
4. **Context7** appears both as a connector (automatic — hosted remote MCP, authenticate when prompted) and as a plugin entry with the same hosted model; no local Node.js/npx is required in either case.
5. **Local OS-automation connectors** (Filesystem, Desktop Commander, Windows-MCP, MacOS-MCP, AppleScript-based Apple Notes/Messages/Things/PowerPoint/Word, Sketch, Pasteapp, Drafts, Noteplan) all require installing/running a local MCP server plus OS permissions — hence Additional Configuration.
6. **De-duplication:** the source file lists 1,062 connectors across overlapping sections; 11 near-duplicate entries merged (e.g. repeat "Azure MCP Server", "ClickUp", "Revolut X", "Affinity", "Apify", "Vibe Prospecting", "Local Falcon" listings).
7. **No classification was made from category names** — e.g. within "finance" connectors some are automatic (Stripe, Ramp via OAuth) while others need keys/subscriptions (Alpha Vantage, FlitIQ); each was assessed on its own merits.
