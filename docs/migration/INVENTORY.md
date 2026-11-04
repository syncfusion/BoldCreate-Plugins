# Upstream plugin inventory

The upstream index lists 315 plugins. 14 already exist in `third_party/`. 301 do not.

The index holds names and source pointers only. It has no MCP endpoints, auth modes, variables, licences or logos, which a BoldCreate `plugin.json` requires. A plugin can be imported only after its source is readable. The workspace egress policy currently blocks those sources, so every missing plugin has the status **Blocked: source not readable**.

This file is generated. Regenerate it with `node scripts/migration-inventory.mjs`.

## Plugins already in third_party

| ID | Connector | Current version | Upstream version | Migration required | Status |
|---|---|---|---|---|---|
| PM-001 | atlassian | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-002 | context7 | 0.7.1 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-003 | figma | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-004 | github | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-005 | gitlab | 0.7.1 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-006 | google-cloud-storage | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-007 | linear | 0.7.1 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-008 | neon | 0.7.1 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-009 | notion | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-010 | posthog | 0.7.1 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-011 | sentry | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-012 | stripe | 0.7.1 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-013 | supabase | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-014 | vercel | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |

## Plugins not yet imported

| ID | Connector | Category | Source type | Source | Pinned ref | Status |
|---|---|---|---|---|---|---|
| PM-015 | 42crunch-api-security-testing | security | git-subdir | 42Crunch-AI/claude-plugins (plugins/api-security-testing) | faf5305385de | Blocked: source not readable |
| PM-016 | activecampaign | productivity | url | ActiveCampaign/activecampaign-plugin | 0ff858728bc5 | Blocked: source not readable |
| PM-017 | adobe-for-creativity | design | git-subdir | adobe/skills (plugins/creative-cloud/adobe-for-creativity) | 0f487c9b1b98 | Blocked: source not readable |
| PM-018 | agent-sdk-dev | development | local | claude-plugins-official ./plugins/agent-sdk-dev | - | Blocked: source not readable |
| PM-019 | agentforce-adlc | development | url | SalesforceAIResearch/agentforce-adlc | 09bf1539d41f | Blocked: source not readable |
| PM-020 | ai-plugins |  | url | endorlabs/ai-plugins | 2de00883bd2b | Blocked: source not readable |
| PM-021 | aikido |  | url | AikidoSec/aikido-claude-plugin | 8fdc995a4410 | Blocked: source not readable |
| PM-022 | airtable | productivity | git-subdir | Airtable/skills (plugins/airtable) | 812ee67f1fd3 | Blocked: source not readable |
| PM-023 | airwallex-agentos | productivity | git-subdir | airwallex/airwallex-marketplace (plugins/airwallex-agentos) | 877551077786 | Blocked: source not readable |
| PM-024 | airwallex-dev | development | git-subdir | airwallex/airwallex-marketplace (plugins/airwallex-dev) | 877551077786 | Blocked: source not readable |
| PM-025 | aiven | database | url | aiven/aiven-ai-plugins | 634f41d68529 | Blocked: source not readable |
| PM-026 | alloydb | database | url | gemini-cli-extensions/alloydb | f9b3280bdcfe | Blocked: source not readable |
| PM-027 | alloydb-omni | database | url | gemini-cli-extensions/alloydb-omni | 37101e3f9aaf | Blocked: source not readable |
| PM-028 | altimate-code | database | git-subdir | AltimateAI/altimate-claude-plugin (plugins/altimate-code) | b7c8f68b3dfd | Blocked: source not readable |
| PM-029 | amazon-location-service | location | git-subdir | awslabs/agent-plugins (plugins/amazon-location-service) | 097fe8ad56d8 | Blocked: source not readable |
| PM-030 | amazon-selling-partner | productivity | url | amzn/selling-partner-agentic-toolkit | 10573bac239b | Blocked: source not readable |
| PM-031 | amd-skills | development | git-subdir | amd/skills (skills) | 6916fb371d1c | Blocked: source not readable |
| PM-032 | amplitude | monitoring | git-subdir | amplitude/mcp-marketplace (plugins/amplitude) | c4bcb5feff54 | Blocked: source not readable |
| PM-033 | apollo | productivity | url | apolloio/apollo-mcp-plugin | bd0513c961f0 | Blocked: source not readable |
| PM-034 | apollo-skills | development | url | apollographql/skills | c288eb80629d | Blocked: source not readable |
| PM-035 | appwrite | development | url | appwrite/claude-plugin | ab3c90b37c95 | Blocked: source not readable |
| PM-036 | asana | productivity | local | claude-plugins-official ./external_plugins/asana | - | Blocked: source not readable |
| PM-037 | astronomer-data-agents | development | url | astronomer/agents | 35b9610bb271 | Blocked: source not readable |
| PM-038 | atlan |  | url | atlanhq/agent-toolkit | 17b7ae3b4852 | Blocked: source not readable |
| PM-039 | atlassian-twg-cli | productivity | url | atlassian-labs/twg-plugins | b3336ef63d45 | Blocked: source not readable |
| PM-040 | atomic-agents | development | url | BrainBlend-AI/atomic-agents (claude-plugin/atomic-agents) | 33d2ec94f42d | Blocked: source not readable |
| PM-041 | auth0 | security | git-subdir | auth0/agent-skills (plugins/auth0) | 7b3821d53343 | Blocked: source not readable |
| PM-042 | aws-agents | development | git-subdir | aws/agent-toolkit-for-aws (plugins/aws-agents) | 0d6167ad2e6d | Blocked: source not readable |
| PM-043 | aws-agents-for-devsecops | development | git-subdir | aws/agent-toolkit-for-aws (plugins/aws-agents-for-devsecops) | 7bde20faede4 | Blocked: source not readable |
| PM-044 | aws-amplify | development | git-subdir | awslabs/agent-plugins (plugins/aws-amplify) | 097fe8ad56d8 | Blocked: source not readable |
| PM-045 | aws-core | development | git-subdir | aws/agent-toolkit-for-aws (plugins/aws-core) | 34b3eccfd8b6 | Blocked: source not readable |
| PM-046 | aws-data-analytics | development | git-subdir | aws/agent-toolkit-for-aws (plugins/aws-data-analytics) | 0d6167ad2e6d | Blocked: source not readable |
| PM-047 | aws-serverless | development | git-subdir | awslabs/agent-plugins (plugins/aws-serverless) | 097fe8ad56d8 | Blocked: source not readable |
| PM-048 | aws-startup-advisor | development | git-subdir | aws/agent-toolkit-for-aws (plugins/aws-startup-advisor) | b310d1c46b4c | Blocked: source not readable |
| PM-049 | aws-transform | migration | git-subdir | awslabs/agent-plugins (plugins/aws-transform) | 097fe8ad56d8 | Blocked: source not readable |
| PM-050 | azure | deployment | url | microsoft/azure-skills | 5b4f0c077807 | Blocked: source not readable |
| PM-051 | azure-cosmos-db-assistant | database | url | AzureCosmosDB/cosmosdb-claude-code-plugin | f1e0498579a9 | Blocked: source not readable |
| PM-052 | azure-sql-developer | database | url | microsoft/azure-sql-database-container | c1e8167e4c1d | Blocked: source not readable |
| PM-053 | base44 | development | url | base44/skills | 8548a482f606 | Blocked: source not readable |
| PM-054 | bigdata-com | database | git-subdir | Bigdata-com/bigdata-plugins-marketplace (plugins/bigdata-com) | 43777fbdb929 | Blocked: source not readable |
| PM-055 | bigquery-data-analytics | database | url | gemini-cli-extensions/bigquery-data-analytics | 6f9b35627d20 | Blocked: source not readable |
| PM-056 | blackrock-advisor-center-plugin | productivity | url | blackrock/advisor-center-agent-skills | 591c758960c1 | Blocked: source not readable |
| PM-057 | boltz | development | git-subdir | boltz-bio/boltz-api-skills (plugins/boltz) | beafb3c16236 | Blocked: source not readable |
| PM-058 | box | productivity | url | box/skills | 84320fd8984b | Blocked: source not readable |
| PM-059 | brightdata-plugin |  | url | brightdata/skills | 37503c1ba310 | Blocked: source not readable |
| PM-060 | browser-use | automation | git-subdir | browser-use/plugins (browser-use) | 4749bcbfe456 | Blocked: source not readable |
| PM-061 | build-with-wordpress |  | url | Automattic/claude-code-wordpress.com | 052ca970df2c | Blocked: source not readable |
| PM-062 | buildkite | development | url | buildkite/skills | d29b846ecbb6 | Blocked: source not readable |
| PM-063 | canva | design | git-subdir | canva-sdks/canva-skills (plugins/canva) | bfcbc681560f | Blocked: source not readable |
| PM-064 | carbone-skill | productivity | url | carboneio/carbone-skill | 25207b3f52b9 | Blocked: source not readable |
| PM-065 | carta-cap-table | productivity | git-subdir | carta/plugins (plugins/carta-cap-table) | ea7fe1d4db0f | Blocked: source not readable |
| PM-066 | carta-crm | productivity | git-subdir | carta/plugins (plugins/carta-crm) | ea7fe1d4db0f | Blocked: source not readable |
| PM-067 | carta-investors | productivity | git-subdir | carta/plugins (plugins/carta-investors) | ea7fe1d4db0f | Blocked: source not readable |
| PM-068 | catalyst-by-zoho | development | url | catalystbyzoho/claude-plugin | 9670b79d72fe | Blocked: source not readable |
| PM-069 | cds-mcp | development | url | cap-js/mcp-server | 52ca3304342d | Blocked: source not readable |
| PM-070 | chrome-devtools-mcp | development | url | ChromeDevTools/chrome-devtools-mcp | a878bcad3958 | Blocked: source not readable |
| PM-071 | chronograph-gp | productivity | url | chronograph-pe/chronograph-gp-claude-plugin | 35cb3d12cf4e | Blocked: source not readable |
| PM-072 | chronograph-lp | productivity | url | chronograph-pe/chronograph-lp-claude-plugin | 322b2d3fbd4d | Blocked: source not readable |
| PM-073 | circle-skills | development | git-subdir | circlefin/skills (plugins/circle) | 58ab8648bb1a | Blocked: source not readable |
| PM-074 | circleback | productivity | url | circlebackai/claude-code-plugin | a610634c95ab | Blocked: source not readable |
| PM-075 | ckeditor | development | url | ckeditor/skills | 261766a0d70f | Blocked: source not readable |
| PM-076 | clangd-lsp | development | local | claude-plugins-official ./plugins/clangd-lsp | - | Blocked: source not readable |
| PM-077 | claude-code-setup | productivity | local | claude-plugins-official ./plugins/claude-code-setup | - | Blocked: source not readable |
| PM-078 | claude-md-management | productivity | local | claude-plugins-official ./plugins/claude-md-management | - | Blocked: source not readable |
| PM-079 | claude-security | security | local | claude-plugins-official ./plugins/claude-security | - | Blocked: source not readable |
| PM-080 | clay | productivity | git-subdir | clay-run/agent-plugins (clay) | 769514a3a236 | Blocked: source not readable |
| PM-081 | clickhouse | database | url | ClickHouse/clickhouse-claude-code-plugin | 652664c8924c | Blocked: source not readable |
| PM-082 | clickhouse-best-practices | database | url | ClickHouse/agent-skills | 356a8c1b9a73 | Blocked: source not readable |
| PM-083 | cloud-sql-mysql | database | url | gemini-cli-extensions/cloud-sql-mysql | 51aa269094a8 | Blocked: source not readable |
| PM-084 | cloud-sql-postgresql | database | url | gemini-cli-extensions/cloud-sql-postgresql | 1d758bb34795 | Blocked: source not readable |
| PM-085 | cloud-sql-sqlserver | database | url | gemini-cli-extensions/cloud-sql-sqlserver | 7efeaaf026b3 | Blocked: source not readable |
| PM-086 | cloudflare | deployment | url | cloudflare/skills | b052c32bab7d | Blocked: source not readable |
| PM-087 | cloudinary |  | url | cloudinary-devs/cloudinary-plugin | 86be53409e3f | Blocked: source not readable |
| PM-088 | cockroachdb | database | url | cockroachdb/claude-plugin | 6c96c6394a61 | Blocked: source not readable |
| PM-089 | code-modernization | development | local | claude-plugins-official ./plugins/code-modernization | - | Blocked: source not readable |
| PM-090 | code-review | productivity | local | claude-plugins-official ./plugins/code-review | - | Blocked: source not readable |
| PM-091 | code-simplifier | productivity | local | claude-plugins-official ./plugins/code-simplifier | - | Blocked: source not readable |
| PM-092 | coderabbit | productivity | url | coderabbitai/skills | 3e8763d24d54 | Blocked: source not readable |
| PM-093 | codspeed | development | url | CodSpeedHQ/codspeed | 59cfc90540bb | Blocked: source not readable |
| PM-094 | commit-commands | productivity | local | claude-plugins-official ./plugins/commit-commands | - | Blocked: source not readable |
| PM-095 | confidence | development | url | spotify/confidence-ai-plugins | f416826fde81 | Blocked: source not readable |
| PM-096 | convex | database | url | get-convex/convex-backend-skill | 6ca54f6e2e75 | Blocked: source not readable |
| PM-097 | crowdsec | security | url | crowdsecurity/crowdsec-skill | 9bca8a76de2c | Blocked: source not readable |
| PM-098 | crowdstrike-falcon-foundry | security | url | CrowdStrike/foundry-skills | 61572f38592d | Blocked: source not readable |
| PM-099 | crowdstrike-falcon-fusion | security | url | CrowdStrike/fusion-skills | 38527dc5afa9 | Blocked: source not readable |
| PM-100 | csharp-lsp | development | local | claude-plugins-official ./plugins/csharp-lsp | - | Blocked: source not readable |
| PM-101 | cwc-makers | productivity | local | claude-plugins-official ./plugins/cwc-makers | - | Blocked: source not readable |
| PM-102 | dash0 | monitoring | url | dash0hq/dash0-agent-plugin | 72a84179e6c6 | Blocked: source not readable |
| PM-103 | data | development | url | astronomer/agents | 35b9610bb271 | Blocked: source not readable |
| PM-104 | data-agent-kit | development | url | GoogleCloudPlatform/data-agent-kit-plugin | 83c53b5f129c | Blocked: source not readable |
| PM-105 | data-engineering |  | url | astronomer/agents | 35b9610bb271 | Blocked: source not readable |
| PM-106 | databases-on-aws | database | git-subdir | awslabs/agent-plugins (plugins/databases-on-aws) | fbefb3764e67 | Blocked: source not readable |
| PM-107 | databricks | database | git-subdir | databricks/databricks-agent-skills (plugins/databricks/claude) | c1964266c7aa | Blocked: source not readable |
| PM-108 | datadog | monitoring | url | datadog-labs/claude-code-plugin | 195f570c002b | Blocked: source not readable |
| PM-109 | datahub-skills | database | url | datahub-project/datahub-skills | a27f8e7bb514 | Blocked: source not readable |
| PM-110 | dataproc | database | url | gemini-cli-extensions/dataproc | 18534a9bfe0d | Blocked: source not readable |
| PM-111 | datarobot-agent-skills | development | url | datarobot-oss/datarobot-agent-skills | 53a4dacc6b55 | Blocked: source not readable |
| PM-112 | dataverse | database | git-subdir | microsoft/Dataverse-skills (.github/plugins/dataverse) | 669e71519886 | Blocked: source not readable |
| PM-113 | deepeval | development | url | confident-ai/deepeval | da9b2c969f8a | Blocked: source not readable |
| PM-114 | deploy-on-aws | deployment | git-subdir | awslabs/agent-plugins (plugins/deploy-on-aws) | fbefb3764e67 | Blocked: source not readable |
| PM-115 | desktop-commander | productivity | git-subdir | wonderwhy-er/DesktopCommanderMCP (plugins/claude) | 75048278f486 | Blocked: source not readable |
| PM-116 | discord | productivity | local | claude-plugins-official ./external_plugins/discord | - | Blocked: source not readable |
| PM-117 | dominodatalab | development | url | dominodatalab/domino-claude-plugin | 7949e3ac470c | Blocked: source not readable |
| PM-118 | dropbox | productivity | git-subdir | dropbox/dropbox-ai-plugins (claude) | 078f0ca36df4 | Blocked: source not readable |
| PM-119 | duckdb-skills | database | url | duckdb/duckdb-skills | 7feda8e01e22 | Blocked: source not readable |
| PM-120 | duende-skills | security | url | DuendeSoftware/duende-skills | fb32edc51982 | Blocked: source not readable |
| PM-121 | dynatrace | monitoring | url | Dynatrace/dynatrace-for-ai | 4f9aa71f9802 | Blocked: source not readable |
| PM-122 | exa | productivity | url | exa-labs/exa-mcp-server | 15ffb50519e7 | Blocked: source not readable |
| PM-123 | explanatory-output-style | learning | local | claude-plugins-official ./plugins/explanatory-output-style | - | Blocked: source not readable |
| PM-124 | expo | development | git-subdir | expo/skills (plugins/expo) | d4f484024fec | Blocked: source not readable |
| PM-125 | fakechat | development | local | claude-plugins-official ./external_plugins/fakechat | - | Blocked: source not readable |
| PM-126 | fastly-agent-toolkit |  | url | fastly/fastly-agent-toolkit | 6db70eaf54ba | Blocked: source not readable |
| PM-127 | feature-dev | development | local | claude-plugins-official ./plugins/feature-dev | - | Blocked: source not readable |
| PM-128 | fiftyone |  | url | voxel51/fiftyone-skills | 8b87befcce6c | Blocked: source not readable |
| PM-129 | firebase | database | local | claude-plugins-official ./external_plugins/firebase | - | Blocked: source not readable |
| PM-130 | firecrawl | development | url | firecrawl/firecrawl-claude-plugin | 3e1fb0c319d7 | Blocked: source not readable |
| PM-131 | firestore-native | database | url | gemini-cli-extensions/firestore-native | 6e6a841c2173 | Blocked: source not readable |
| PM-132 | forge-skills | development | url | atlassian/forge-skills | 4f04ae028794 | Blocked: source not readable |
| PM-133 | frontend-design | development | local | claude-plugins-official ./plugins/frontend-design | - | Blocked: source not readable |
| PM-134 | fullstory | monitoring | url | fullstorydev/fullstory-skills | ca872d97f5c3 | Blocked: source not readable |
| PM-135 | gc-ai | productivity | url | GC-AI-Inc/gc-ai-claude-plugin | efda779972c7 | Blocked: source not readable |
| PM-136 | gitkraken | development | url | gitkraken/claude-plugin | f7a53b2cd138 | Blocked: source not readable |
| PM-137 | gopls-lsp | development | local | claude-plugins-official ./plugins/gopls-lsp | - | Blocked: source not readable |
| PM-138 | govtribe | productivity | url | GovTribe/claude-plugin | 41cb943db7f9 | Blocked: source not readable |
| PM-139 | grafana-assistant | monitoring | git-subdir | grafana/ai-marketplace (plugins/grafana-assistant) | 12be5634a492 | Blocked: source not readable |
| PM-140 | grafana-cloud-mcp | monitoring | git-subdir | grafana/ai-marketplace (plugins/grafana-cloud-mcp) | 6c28ba1961d5 | Blocked: source not readable |
| PM-141 | grafana-mcp | monitoring | git-subdir | grafana/ai-marketplace (plugins/grafana-mcp) | 6c28ba1961d5 | Blocked: source not readable |
| PM-142 | greptile | development | git-subdir | greptileai/claude-plugin (plugins/greptile) | f0b7379ca06e | Blocked: source not readable |
| PM-143 | growthbook | testing | url | growthbook/skills | 7a84f338fe21 | Blocked: source not readable |
| PM-144 | honeycomb | monitoring | git-subdir | honeycombio/agent-skill (honeycomb) | 6bb09279fc3f | Blocked: source not readable |
| PM-145 | hookify | productivity | local | claude-plugins-official ./plugins/hookify | - | Blocked: source not readable |
| PM-146 | hostinger | deployment | url | hostinger/claude-plugin | 569880c60681 | Blocked: source not readable |
| PM-147 | hubspot-sales | productivity | git-subdir | HubSpot/hubspot-mcp-plugins (HubSpot-Sales) | a0c59600fc1d | Blocked: source not readable |
| PM-148 | huggingface-skills | development | url | huggingface/skills | c3ff942be3e0 | Blocked: source not readable |
| PM-149 | hunter | productivity | url | hunter-io/claude-plugin | 44f0f5689d2d | Blocked: source not readable |
| PM-150 | hyperframes | design | url | heygen-com/hyperframes | 8d2b6e7bdc1c | Blocked: source not readable |
| PM-151 | idmp-plugin | development | git-subdir | taosdata/agent-skills (plugins/idmp-plugin) | bf5197716bac | Blocked: source not readable |
| PM-152 | imessage | productivity | local | claude-plugins-official ./external_plugins/imessage | - | Blocked: source not readable |
| PM-153 | incident-io | monitoring | git-subdir | incident-io/skills (plugins/incident-io) | 00f7d1dc8089 | Blocked: source not readable |
| PM-154 | informatica-for-claude-platform | database | git-subdir | forcedotcom/informatica-claude-plugins (informatica-for-claude-platform) | 554d02e0f7f2 | Blocked: source not readable |
| PM-155 | intercom | productivity | url | intercom/claude-plugin-external | 62773a7d4b8a | Blocked: source not readable |
| PM-156 | intuit-quickbooks | productivity | url | intuit/quickbooks-claude-plugin | c8daa17a64d4 | Blocked: source not readable |
| PM-157 | jdtls-lsp | development | local | claude-plugins-official ./plugins/jdtls-lsp | - | Blocked: source not readable |
| PM-158 | jfrog | security | url | jfrog/claude-plugin | 9b1f8f6c8835 | Blocked: source not readable |
| PM-159 | knowledge-catalog | database | url | gemini-cli-extensions/knowledge-catalog | 630397520359 | Blocked: source not readable |
| PM-160 | kotlin-lsp | development | local | claude-plugins-official ./plugins/kotlin-lsp | - | Blocked: source not readable |
| PM-161 | langfuse | monitoring | url | langfuse/skills | b86532b77f16 | Blocked: source not readable |
| PM-162 | langfuse-observability | monitoring | url | langfuse/claude-observability-plugin | b5211009698f | Blocked: source not readable |
| PM-163 | laravel-boost | development | local | claude-plugins-official ./external_plugins/laravel-boost | - | Blocked: source not readable |
| PM-164 | leadfeeder | productivity | url | Leadfeeder/leadfeeder-mcp-plugin | cddf27f07713 | Blocked: source not readable |
| PM-165 | learn-with-coursera | learning | git-subdir | coursera/skills (skills) | ac28fd6ebf85 | Blocked: source not readable |
| PM-166 | learning-output-style | learning | local | claude-plugins-official ./plugins/learning-output-style | - | Blocked: source not readable |
| PM-167 | legalzoom | productivity | git-subdir | legalzoom/claude-plugins (plugins/legalzoom) | f9fd8a0ca6e1 | Blocked: source not readable |
| PM-168 | linq-alpha | productivity | git-subdir | linq-lab/linq-alpha-plugin (plugins/linq-alpha) | bfb594b7ccca | Blocked: source not readable |
| PM-169 | liquid-lsp | development | git-subdir | Shopify/liquid-skills (plugins/liquid-lsp) | ae3e4cc3f454 | Blocked: source not readable |
| PM-170 | liquid-skills | development | git-subdir | Shopify/liquid-skills (plugins/liquid-skills) | ae3e4cc3f454 | Blocked: source not readable |
| PM-171 | logfire | monitoring | git-subdir | pydantic/skills (plugins/logfire) | 238d97102650 | Blocked: source not readable |
| PM-172 | logrocket | monitoring | git-subdir | LogRocket/logrocket-claude-plugin (plugins/logrocket) | 2e44dbb47faf | Blocked: source not readable |
| PM-173 | looker | database | url | gemini-cli-extensions/looker | 13ed738a97a1 | Blocked: source not readable |
| PM-174 | lovable | development | url | lovablelabs/mcp | 0336e6db8026 | Blocked: source not readable |
| PM-175 | lua-lsp | development | local | claude-plugins-official ./plugins/lua-lsp | - | Blocked: source not readable |
| PM-176 | lumen | development | url | ory/lumen | f60f9ecee417 | Blocked: source not readable |
| PM-177 | lusha | productivity | url | lusha-oss/lusha-mcp-plugin | 4bcf5c743d57 | Blocked: source not readable |
| PM-178 | mapbox | location | url | mapbox/mapbox-agent-skills | f71cd72b8d89 | Blocked: source not readable |
| PM-179 | math-olympiad | math | local | claude-plugins-official ./plugins/math-olympiad | - | Blocked: source not readable |
| PM-180 | math-proof | math | local | claude-plugins-official ./plugins/math-proof | - | Blocked: source not readable |
| PM-181 | mattpocock-skills | development | url | mattpocock/skills | 49dd158d1076 | Blocked: source not readable |
| PM-182 | mcp-apps | development | git-subdir | modelcontextprotocol/ext-apps (plugins/mcp-apps) | 6d9bdc7babf2 | Blocked: source not readable |
| PM-183 | mcp-server-dev | development | local | claude-plugins-official ./plugins/mcp-server-dev | - | Blocked: source not readable |
| PM-184 | mcp-tunnels | development | local | claude-plugins-official ./plugins/mcp-tunnels | - | Blocked: source not readable |
| PM-185 | mercadopago | development | git-subdir | mercadopago/mercadopago-claude-marketplace (plugins/mercadopago) | 755d33740af2 | Blocked: source not readable |
| PM-186 | mergify | development | url | mergifyio/mergify-cli | 6307ed10e862 | Blocked: source not readable |
| PM-187 | microsoft-docs | development | url | MicrosoftDocs/mcp | f0a9478a954c | Blocked: source not readable |
| PM-188 | migration-to-aws | development | git-subdir | awslabs/startups (migrate/plugins/migration-to-aws) | ec681ba5d49b | Blocked: source not readable |
| PM-189 | mintlify | development | url | mintlify/mintlify-claude-plugin | acd6d2e0128c | Blocked: source not readable |
| PM-190 | miro | design | git-subdir | miroapp/miro-ai (claude-plugins/miro) | b6408e1bdfe0 | Blocked: source not readable |
| PM-191 | mlflow | monitoring | url | mlflow/skills | 51a42ea2b07f | Blocked: source not readable |
| PM-192 | modern-web-guidance | development | url | GoogleChrome/modern-web-guidance | b31dc0a43ff5 | Blocked: source not readable |
| PM-193 | monday-crm | productivity | git-subdir | mondaycom/mcp (plugins/monday-crm) | 8fdc0b4af07a | Blocked: source not readable |
| PM-194 | mongodb | database | git-subdir | mongodb/agent-skills (plugins/mongodb) | c370a63b2707 | Blocked: source not readable |
| PM-195 | mongodb-atlas | database | git-subdir | mongodb/agent-skills (plugins/mongodb-atlas) | c370a63b2707 | Blocked: source not readable |
| PM-196 | netlify-skills | development | url | netlify/context-and-tools | dc9ebf1b9944 | Blocked: source not readable |
| PM-197 | netsuite-ai-companion | productivity | git-subdir | oracle/netsuite-suitecloud-sdk (anthropic/netsuite-ai-companion) | 23793a10a9bb | Blocked: source not readable |
| PM-198 | netsuite-finance-analyst | productivity | git-subdir | oracle/netsuite-suitecloud-sdk (anthropic/netsuite-finance-analyst) | 23793a10a9bb | Blocked: source not readable |
| PM-199 | netsuite-suitecloud | development | git-subdir | oracle/netsuite-suitecloud-sdk (anthropic/netsuite-suitecloud) | 23793a10a9bb | Blocked: source not readable |
| PM-200 | newrelic | monitoring | url | newrelic/claude-code-plugin | f8e5f8b62139 | Blocked: source not readable |
| PM-201 | nightvision |  | url | nvsecurity/nightvision-skills | 957db6bb9348 | Blocked: source not readable |
| PM-202 | nimble |  | url | Nimbleway/agent-skills | fdb077c7220a | Blocked: source not readable |
| PM-203 | noibu | monitoring | git-subdir | Noibu/ai-plugin (src) | 9fa2eddc3a86 | Blocked: source not readable |
| PM-204 | nvidia-skills | development | git-subdir | NVIDIA/skills (plugins/nvidia-skills) | 029363a2023c | Blocked: source not readable |
| PM-205 | oracle-ai-data-platform-workbench-databricks-migrator | development | git-subdir | oracle-samples/oracle-aidp-samples (ai/claude-code-plugins/oracle-ai-data-platform-workbench-databricks-migrator) | a7225cbdd935 | Blocked: source not readable |
| PM-206 | oracle-ai-data-platform-workbench-engineer-agent | development | git-subdir | oracle-samples/oracle-aidp-samples (ai/claude-code-plugins/oracle-ai-data-platform-workbench-engineer-agent) | a7225cbdd935 | Blocked: source not readable |
| PM-207 | oracle-ai-data-platform-workbench-spark-connectors | development | git-subdir | oracle-samples/oracle-aidp-samples (ai/claude-code-plugins/oracle-ai-data-platform-workbench-spark-connectors) | a7225cbdd935 | Blocked: source not readable |
| PM-208 | oracledb | database | url | gemini-cli-extensions/oracledb | 8d24bdc3185c | Blocked: source not readable |
| PM-209 | outputai | development | git-subdir | growthxai/output (coding_assistants/claude/plugins/outputai) | 2032ff617a62 | Blocked: source not readable |
| PM-210 | pagerduty | monitoring | url | PagerDuty/claude-code-plugins | 761cba75bd50 | Blocked: source not readable |
| PM-211 | paypal | development | url | paypal/AI-Toolkit | 5dce83d8243f | Blocked: source not readable |
| PM-212 | pendo-analytics | productivity | git-subdir | pendo-io/claude-pendo-plugin (plugins/pendo-analytics) | a0f85260c61b | Blocked: source not readable |
| PM-213 | pendo-guides | productivity | git-subdir | pendo-io/claude-pendo-plugin (plugins/pendo-guides) | 340d503c23ee | Blocked: source not readable |
| PM-214 | pendo-orchestrate | productivity | git-subdir | pendo-io/claude-pendo-plugin (plugins/pendo-orchestrate) | a0f85260c61b | Blocked: source not readable |
| PM-215 | php-lsp | development | local | claude-plugins-official ./plugins/php-lsp | - | Blocked: source not readable |
| PM-216 | pigment | productivity | url | gopigment/ai-plugins | 8a2c2d734f94 | Blocked: source not readable |
| PM-217 | pinecone | database | url | pinecone-io/pinecone-claude-code-plugin | c383d38b5cc3 | Blocked: source not readable |
| PM-218 | pixeltable | development | url | pixeltable/pixeltable-skill | c471dbb262b6 | Blocked: source not readable |
| PM-219 | planetscale | database | url | planetscale/claude-plugin | 95c80f9f391b | Blocked: source not readable |
| PM-220 | playground | development | local | claude-plugins-official ./plugins/playground | - | Blocked: source not readable |
| PM-221 | playwright | testing | local | claude-plugins-official ./external_plugins/playwright | - | Blocked: source not readable |
| PM-222 | plugin-dev | development | local | claude-plugins-official ./plugins/plugin-dev | - | Blocked: source not readable |
| PM-223 | postiz |  | url | gitroomhq/postiz-agent | 86e02524377c | Blocked: source not readable |
| PM-224 | postman | development | url | postmanlabs/postman-plugin | c6352ef5605c | Blocked: source not readable |
| PM-225 | pr-review-toolkit | productivity | local | claude-plugins-official ./plugins/pr-review-toolkit | - | Blocked: source not readable |
| PM-226 | preset-cli-skills | development | git-subdir | preset-io/agent-skills (plugins/preset-cli-skills) | 838f0a408dc1 | Blocked: source not readable |
| PM-227 | prisma |  | url | prisma/claude-plugin | 82edd74d8189 | Blocked: source not readable |
| PM-228 | project-artifact | productivity | local | claude-plugins-official ./plugins/project-artifact | - | Blocked: source not readable |
| PM-229 | pydantic-ai | development | git-subdir | pydantic/skills (plugins/ai) | 238d97102650 | Blocked: source not readable |
| PM-230 | pyright-lsp | development | local | claude-plugins-official ./plugins/pyright-lsp | - | Blocked: source not readable |
| PM-231 | qdrant-skills | database | url | qdrant/skills | d2127f6e1b9c | Blocked: source not readable |
| PM-232 | qodo | development | git-subdir | qodo-ai/qodo-skills (packages/qodo) | b8c21854199c | Blocked: source not readable |
| PM-233 | qodo-standards | development | git-subdir | qodo-ai/qodo-skills (packages/qodo-standards) | b8c21854199c | Blocked: source not readable |
| PM-234 | qt-development-skills | development | url | TheQtCompanyRnD/agent-skills | a784c48445e3 | Blocked: source not readable |
| PM-235 | quarkus-agent | development | url | quarkusio/quarkus-agent-mcp | 73cef3b2564d | Blocked: source not readable |
| PM-236 | railway | deployment | git-subdir | railwayapp/railway-skills (plugins/railway) | a100f93e482c | Blocked: source not readable |
| PM-237 | ralph-loop | development | local | claude-plugins-official ./plugins/ralph-loop | - | Blocked: source not readable |
| PM-238 | rc | development | url | RevenueCat/rc-claude-code-plugin (revenuecat) | ccfc038185ec | Blocked: source not readable |
| PM-239 | receipts | productivity | local | claude-plugins-official ./plugins/receipts | - | Blocked: source not readable |
| PM-240 | redis-development | database | git-subdir | redis/agent-skills (plugins/redis-development) | a84871d065f3 | Blocked: source not readable |
| PM-241 | remember |  | url | Digital-Process-Tools/claude-remember | ccd45061ee4b | Blocked: source not readable |
| PM-242 | render | deployment | url | render-oss/render-plugin-claude-code | d7ecf826c597 | Blocked: source not readable |
| PM-243 | resend | development | url | resend/resend-skills | fd14937dba5a | Blocked: source not readable |
| PM-244 | revenuecat | development | url | RevenueCat/rc-claude-code-plugin (revenuecat) | ccfc038185ec | Blocked: source not readable |
| PM-245 | rill | development | url | rilldata/agent-skills | adfce5762be4 | Blocked: source not readable |
| PM-246 | rootly | monitoring | url | Rootly-AI-Labs/rootly-claude-plugin | 65832aa6ff7a | Blocked: source not readable |
| PM-247 | ruby-lsp | development | local | claude-plugins-official ./plugins/ruby-lsp | - | Blocked: source not readable |
| PM-248 | runway-api | design | git-subdir | runwayml/skills (claude) | 6e98d3f35407 | Blocked: source not readable |
| PM-249 | rust-analyzer-lsp | development | local | claude-plugins-official ./plugins/rust-analyzer-lsp | - | Blocked: source not readable |
| PM-250 | sagemaker-ai | development | git-subdir | awslabs/agent-plugins (plugins/sagemaker-ai) | 097fe8ad56d8 | Blocked: source not readable |
| PM-251 | salesforce-development | development | git-subdir | forcedotcom/sf-skills (plugins/builder/salesforce-development) | d3088edf8776 | Blocked: source not readable |
| PM-252 | sanity | development | url | sanity-io/agent-toolkit | 88d6cdfa7cb0 | Blocked: source not readable |
| PM-253 | sap-cds-mcp | development | url | cap-js/mcp-server | 52ca3304342d | Blocked: source not readable |
| PM-254 | sap-fiori-mcp-server | development | git-subdir | SAP/open-ux-tools (packages/fiori-mcp-server) | 69e2c50833f1 | Blocked: source not readable |
| PM-255 | sap-hana-cli | database | url | SAP-samples/hana-cli-claude-plugin | abadd0aba327 | Blocked: source not readable |
| PM-256 | sap-mdk-server | development | url | SAP/mdk-mcp-server | ce65cbf22089 | Blocked: source not readable |
| PM-257 | save-to-spotify | productivity | git-subdir | spotify/save-to-spotify (plugin) | 9d05c8cd8c85 | Blocked: source not readable |
| PM-258 | scandit-sdk | development | url | Scandit/skills | 2f0731a090eb | Blocked: source not readable |
| PM-259 | security-guidance | security | local | claude-plugins-official ./plugins/security-guidance | - | Blocked: source not readable |
| PM-260 | semgrep | security | git-subdir | semgrep/mcp-marketplace (plugin) | b58f407c6ac0 | Blocked: source not readable |
| PM-261 | sentry-cli | monitoring | git-subdir | getsentry/cli (packages/cli/plugins/sentry-cli) | 3567c3c937b5 | Blocked: source not readable |
| PM-262 | serena | development | local | claude-plugins-official ./external_plugins/serena | - | Blocked: source not readable |
| PM-263 | servicenow-sdk | development | git-subdir | ServiceNow/sdk (providers/claude/plugin) | 6f01c0e26cbe | Blocked: source not readable |
| PM-264 | session-report | productivity | local | claude-plugins-official ./plugins/session-report | - | Blocked: source not readable |
| PM-265 | setup-agent-analytics | development | git-subdir | pendo-io/claude-pendo-plugin (plugins/setup-agent-analytics) | 340d503c23ee | Blocked: source not readable |
| PM-266 | setup-mcp-agent-analytics | development | git-subdir | pendo-io/claude-pendo-plugin (plugins/setup-mcp-agent-analytics) | a0f85260c61b | Blocked: source not readable |
| PM-267 | shippo | productivity | git-subdir | goshippo/ai (providers/claude/plugin) | cf8e96532f24 | Blocked: source not readable |
| PM-268 | shopify-ai-toolkit | development | url | Shopify/Shopify-AI-Toolkit | 3c32168c6e4c | Blocked: source not readable |
| PM-269 | skill-creator | development | local | claude-plugins-official ./plugins/skill-creator | - | Blocked: source not readable |
| PM-270 | slack | productivity | url | slackapi/slack-mcp-plugin | ad6be8809667 | Blocked: source not readable |
| PM-271 | snowflake-cortex-code | development | git-subdir | Snowflake-Labs/snowflake-ai-kit (plugins/cortex-code) | e2a3cbb45a9a | Blocked: source not readable |
| PM-272 | sonarqube | security | url | SonarSource/sonarqube-agent-plugins | 5a9356d957db | Blocked: source not readable |
| PM-273 | sonatype-guide | security | url | sonatype/sonatype-guide-claude-plugin | 1dae73980f59 | Blocked: source not readable |
| PM-274 | sourcegraph | development | url | sourcegraph-community/sourcegraph-claudecode-plugin | 674a05e2e286 | Blocked: source not readable |
| PM-275 | spanner | database | url | gemini-cli-extensions/spanner | d4db42a27080 | Blocked: source not readable |
| PM-276 | spotify-ads-api | productivity | url | spotify/ads-claude-plugin | 532b47af3d2e | Blocked: source not readable |
| PM-277 | stackhawk-api | security | git-subdir | stackhawk/agent-skills (plugins/api) | d0eea864c42f | Blocked: source not readable |
| PM-278 | stackhawk-hawkscan | security | git-subdir | stackhawk/agent-skills (plugins/hawkscan) | 66cac9baa588 | Blocked: source not readable |
| PM-279 | streaming-skills-plugin | development | url | confluentinc/agent-skills | 204b36f10e9b | Blocked: source not readable |
| PM-280 | sumup | development | url | sumup/sumup-skills | 6922c7052ae9 | Blocked: source not readable |
| PM-281 | superdesign | design | url | superdesigndev/superdesign-skill | f9f05cd988c2 | Blocked: source not readable |
| PM-282 | superpowers | development | url | obra/superpowers | bb92a7774141 | Blocked: source not readable |
| PM-283 | swift-lsp | development | local | claude-plugins-official ./plugins/swift-lsp | - | Blocked: source not readable |
| PM-284 | synthflow | automation | git-subdir | SynthFlowAI/AnthropicPlugin (plugins/synthflow) | 205871ee8350 | Blocked: source not readable |
| PM-285 | tavily | development | url | tavily-ai/skills | 778122e5f9c6 | Blocked: source not readable |
| PM-286 | teamcity-cli | development | url | JetBrains/teamcity-cli | ac6c1fd83300 | Blocked: source not readable |
| PM-287 | telegram | productivity | local | claude-plugins-official ./external_plugins/telegram | - | Blocked: source not readable |
| PM-288 | terraform | development | local | claude-plugins-official ./external_plugins/terraform | - | Blocked: source not readable |
| PM-289 | togetherai-skills | development | url | togethercomputer/skills | 644d38225bbd | Blocked: source not readable |
| PM-290 | twilio-developer-kit | development | url | twilio/ai | 803790a281f0 | Blocked: source not readable |
| PM-291 | typescript-lsp | development | local | claude-plugins-official ./plugins/typescript-lsp | - | Blocked: source not readable |
| PM-292 | ui-theme-designer | design | git-subdir | SAP/ui-theme-designer-plugins-for-coding-agents (plugins/ui-theme-designer) | 3eff5832700d | Blocked: source not readable |
| PM-293 | ui5 | development | git-subdir | UI5/plugins-coding-agents (plugins/ui5) | a99b882ce364 | Blocked: source not readable |
| PM-294 | ui5-modernization | development | git-subdir | UI5/plugins-coding-agents (plugins/ui5-modernization) | 2b8c4a944e39 | Blocked: source not readable |
| PM-295 | ui5-typescript-conversion | development | git-subdir | UI5/plugins-coding-agents (plugins/ui5-typescript-conversion) | 2b8c4a944e39 | Blocked: source not readable |
| PM-296 | unity | development | url | Unity-Technologies/unity-agent-plugin | ba48956ae8be | Blocked: source not readable |
| PM-297 | unreal-engine-skills-for-claude-code | development | url | EpicGames/unreal-engine-skills-for-claude-code-plugin | 0e27bde2b55c | Blocked: source not readable |
| PM-298 | valtown | deployment | git-subdir | val-town/plugins (plugin) | 555ff7492c9c | Blocked: source not readable |
| PM-299 | vanguard-advisor-tools | productivity | url | Vanguard-oss/vanguard-advisor-tools | 328fe9f61fe7 | Blocked: source not readable |
| PM-300 | vanta | security | url | VantaInc/vanta-mcp-plugin | 345d86b55faa | Blocked: source not readable |
| PM-301 | vanta-mcp-plugin | security | url | VantaInc/vanta-mcp-plugin | 345d86b55faa | Blocked: source not readable |
| PM-302 | vibe-prospecting | productivity | url | explorium-ai/vibeprospecting-plugin | ca43f6d92395 | Blocked: source not readable |
| PM-303 | vsql-extension-builder | database | url | villagesql/villagesql-skills | 18f7d68673e2 | Blocked: source not readable |
| PM-304 | windsor-ai | productivity | url | windsor-ai/claude-windsor-ai-plugin | d7ba1cb036c7 | Blocked: source not readable |
| PM-305 | wingspan | productivity | url | wingspanHQ/mcp-claude-plugin | 7f99cb3d1789 | Blocked: source not readable |
| PM-306 | wix | development | url | wix/skills | 8fc544d319c4 | Blocked: source not readable |
| PM-307 | workos | security | git-subdir | workos/skills (plugins/workos) | e25141bae047 | Blocked: source not readable |
| PM-308 | youdotcom-agent-skills | productivity | url | youdotcom-oss/agent-skills | a692b6f34fac | Blocked: source not readable |
| PM-309 | zapier | productivity | git-subdir | zapier/zapier-mcp (plugins/zapier) | 54a12277a12c | Blocked: source not readable |
| PM-310 | zilliz | database | url | zilliztech/zilliz-plugin (plugins/zilliz) | 35c86c000c91 | Blocked: source not readable |
| PM-311 | zocks-advisor | productivity | url | zocks-communications/zocks-agent-plugins | a3e445c13966 | Blocked: source not readable |
| PM-312 | zoom-plugin | development | url | zoom/zoom-plugin | 86e2592334f5 | Blocked: source not readable |
| PM-313 | zoominfo | productivity | url | Zoominfo/zoominfo-mcp-plugin | 31a1ec506078 | Blocked: source not readable |
| PM-314 | zscaler | security | url | zscaler/zscaler-mcp-server | 6340cd24087a | Blocked: source not readable |
| PM-315 | zyte-web-data | automation | url | zytedata/claude-skills | d03e241729eb | Blocked: source not readable |
