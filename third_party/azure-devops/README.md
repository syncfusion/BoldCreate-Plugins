# Azure DevOps

BoldCreate plugin that connects agents to Azure DevOps through Microsoft's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Work with Azure DevOps work items, repositories, pull requests, pipelines, wikis and test plans.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Azure DevOps**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Azure DevOps**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install azure-devops@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "azure-devops": {
      "type": "http",
      "url": "https://mcp.dev.azure.com/",
      "auth": {
        "CLIENT_ID": "${CLIENT_ID}"
      }
    }
  }
}
```

The URL has no organization in it. Microsoft's documentation allows this, and then the organization must be given in each request. See [Organization](#organization).

## Setup

Set this when you install the plugin. It is not a secret.

| Setting | Required | Secret | What to enter |
| --- | --- | --- | --- |
| **Client ID** (`CLIENT_ID`) | Yes | No | The Application (client) ID of the Microsoft Entra app registration that your team creates for this plugin. There is no default. |

Microsoft Entra ID does not support dynamic client registration, so the plugin cannot register itself. Each team registers one app and enters its client ID. There is no client secret.

Steps, based on Microsoft's steps for Cursor. A tenant administrator may need to do some of them.

1. In **Microsoft Entra ID**, then **Enterprise applications**, confirm that the **Azure DevOps MCP** application (ID `2a72489c-aab2-4b65-b93a-a91edccf33b8`) exists. Set **Application type** to **All applications** when you search. If it is missing, see Microsoft's [troubleshooting page](https://learn.microsoft.com/en-us/azure/devops/mcp-server/remote-mcp-server-troubleshooting).
2. In the Microsoft Entra admin center, go to **App registrations** and create an app registration.
3. Under **Authentication**, add a redirect URI of the **Mobile and desktop applications** type for BoldCreate Connect, and turn on **Allow public client flows**. Ask your BoldCreate administrator for the redirect URI. Microsoft's `http://localhost:8787/callback` is for Cursor and does not apply here.
4. Under **API permissions**, choose **Add a permission**, then **APIs my organization uses**, and select **Azure DevOps MCP**. Add the delegated permissions you need (see [Scopes](#scopes)), then grant admin consent.
5. Copy the **Application (client) ID** and enter it as **Client ID**.

Microsoft's steps use the Mobile and desktop platform with a localhost address. Whether Entra accepts the BoldCreate Connect redirect URI under that platform has not been tested.

## Organization

The plugin does not fix an organization, so one plugin works for every organization your account can reach. Name the organization in your request, for example "In the contoso organization, list my active work items". Microsoft's documentation says the organization must be given as context in each tool call when it is left out of the URL. The `core_list_orgs` tool lists the organizations your account can access.

## Before you connect

- You need an Azure DevOps organization that is backed by a Microsoft Entra tenant. Organizations that use only standalone Microsoft accounts are not supported on the remote server.
- Personal access tokens are not supported on the remote server.
- Each member signs in to Microsoft Entra in the browser. Tool calls run with that member's Azure DevOps permissions.

## What it can do

Microsoft's documentation lists 48 tools. Most take an `action` parameter, and the table counts actions. The read-only marking is Microsoft's. The counts come from the documentation, because the server's own tool list needs sign-in.

| Area | Tools | Read-only actions | Other actions | What it covers |
| --- | --- | --- | --- | --- |
| Core | 4 | not marked | not marked | List organizations, projects, teams and group members. `core_list_group_members` is for MCP Insiders only. |
| Work items (`wit`) | 11 | 16 | 12 | Work items, comments, links, attachments, queries, WIQL, backlogs and work item search. |
| Repos | 10 | 15 | 8 | Repositories, branches, files, commits, pull requests, review threads and code search. |
| Pipelines | 6 | 11 | 3 | Builds, build logs, definitions, runs and artifacts. |
| Wiki | 3 | 5 | 1 | Read and search wiki pages, and create or update pages. |
| Work | 3 | 5 | 3 | Team settings, iterations and capacity. |
| Test plans | 7 | 5 | 9 | Test plans, suites, cases, test runs and results. |
| Advanced Security | 1 | 2 | 0 | GitHub Advanced Security for Azure DevOps alerts. |
| Enterprise Live Migration (preview) | 3 | 5 | 10 | Migration status and actions. Enabled by default. |

## Scopes

The server uses delegated OAuth scopes. The access an agent has is the scopes you grant to the app registration, and never more than the signed-in user can do in Azure DevOps.

| Scope family | Access |
| --- | --- |
| `wit.read`, `wit.write` | Read work items, queries and backlogs. Write also changes work items, comments, links and attachments. |
| `repos.read`, `repos.write` | Read repositories, pull requests and code. Write also creates branches and changes pull requests and review threads. |
| `pipelines.read`, `pipelines.write`, `pipelines.manage` | Read pipelines and builds. Write also queues runs and updates builds. Manage also creates pipelines. |
| `wiki.read`, `wiki.write` | Read and search the wiki. Write also creates and updates pages. |
| `work.read`, `work.write`, `work.manage` | Read team settings and iterations. Write also changes capacity and iterations. Manage also creates and assigns iterations. |
| `advsec.read` | Read Advanced Security alerts. |

Each higher tier includes the lower ones, and any `read` scope also allows the core tools. Scope families for test plans (`testplan.*`) and Enterprise Live Migration (`elm.*`) also exist.

Do not grant `Ado.Mcp.Tools`. It is a legacy scope that allows every tool and overrides the granular scopes.

## Write access

46 actions are not marked read-only. They include creating and updating work items, creating pull requests, voting on them, queuing pipeline runs, updating wiki pages, and changing iterations, capacity and test plans. To keep an agent read-only, grant only `read` scopes. Microsoft's headers for limiting tools, such as `X-MCP-Toolsets`, are not set by this plugin.

## Authentication

Checked on 2026-11-27 against `mcp.dev.azure.com`:

- An unauthenticated request returns HTTP 401 with a link to the protected-resource metadata.
- The metadata names Microsoft Entra ID (`login.microsoftonline.com/organizations/v2.0`) as the only authorization server, and lists the scope `https://mcp.dev.azure.com/.default`.
- Entra's metadata has no registration endpoint. Microsoft's FAQ says Entra ID "doesn't currently support the dynamic client registration flow".

Microsoft's documentation says Claude Desktop and Codex cannot use the remote server.

## Docs

- Remote Azure DevOps MCP Server: https://learn.microsoft.com/en-us/azure/devops/mcp-server/remote-mcp-server
- Troubleshooting: https://learn.microsoft.com/en-us/azure/devops/mcp-server/remote-mcp-server-troubleshooting

## Logo

Azure DevOps icon from Microsoft's catalog in the `microsoft/mcp` repository, served from Microsoft's CDN. The favicon on azure.microsoft.com is the Microsoft logo, so it was not used. The icon is a trademark of Microsoft and is not covered by the MIT licence.

## License

MIT
