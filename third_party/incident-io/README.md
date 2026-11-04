# incident.io

BoldCreate plugin that connects agents to incident.io through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Look up and manage incidents in incident.io.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **incident.io**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **incident.io**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install incident-io@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "incident-io": {
      "type": "http",
      "url": "https://mcp.incident.io/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to incident.io in the browser (OAuth). Tool calls run with that member's permissions. The vendor's repository does not state the auth mode for the hosted server, so confirm it against incident.io's documentation before release.

## Notes

- The vendor names its server `incident_io`. This plugin uses `incident-io`.

## Docs

- incident.io plugin (vendor repository): https://github.com/incident-io/skills

## Logo

Official incident.io icon, downloaded from incident.io. The mark is a trademark of its owner.

## License

MIT
