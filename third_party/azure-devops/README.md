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
      "url": "https://mcp.dev.azure.com/"
    }
  }
}
```

The URL has no organization in it. Microsoft's documentation allows this, and then the organization must be given in each request. See [Organization](#organization).

## Setup

There is nothing to enter. The plugin sets no client ID and no client secret. The first time the agent calls a tool, each member signs in with a Microsoft Entra account in the browser. Tool calls run with that member's Azure DevOps permissions.

In Visual Studio Code, adding only this URL and signing in with a Microsoft account lists the tools. Microsoft's documentation has no app registration step for Visual Studio Code, Visual Studio, Copilot Studio, Microsoft Foundry or the GitHub Copilot CLI and app. It does not say why. It says Cursor and Claude Code need a custom Microsoft Entra app registration.

Microsoft Entra ID does not support dynamic client registration. Sign-in through BoldCreate Connect has not been tested, so it is not confirmed that it works without a client ID.

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

The server uses delegated OAuth scopes. Which ones are granted depends on the client that signs in. With a custom app registration you choose them. This plugin does not use one. Scopes never give more than the signed-in user can do in Azure DevOps.

| Scope family | Access |
| --- | --- |
| `wit.read`, `wit.write` | Read work items, queries and backlogs. Write also changes work items, comments, links and attachments. |
| `repos.read`, `repos.write` | Read repositories, pull requests and code. Write also creates branches and changes pull requests and review threads. |
| `pipelines.read`, `pipelines.write`, `pipelines.manage` | Read pipelines and builds. Write also queues runs and updates builds. Manage also creates pipelines. |
| `wiki.read`, `wiki.write` | Read and search the wiki. Write also creates and updates pages. |
| `work.read`, `work.write`, `work.manage` | Read team settings and iterations. Write also changes capacity and iterations. Manage also creates and assigns iterations. |
| `advsec.read` | Read Advanced Security alerts. |

Each higher tier includes the lower ones, and any `read` scope also allows the core tools. Scope families for test plans (`testplan.*`) and Enterprise Live Migration (`elm.*`) also exist.

## Write access

46 actions are not marked read-only. They include creating and updating work items, creating pull requests, voting on them, queuing pipeline runs, updating wiki pages, and changing iterations, capacity and test plans. Scopes are not chosen here, so the way to keep an agent read-only is to sign in with an account that has only read access in Azure DevOps. Microsoft's headers for limiting tools, such as `X-MCP-Toolsets`, are not set by this plugin.

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
