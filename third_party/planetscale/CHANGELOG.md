# Changelog

All notable changes to this plugin will be documented here.

## 0.7.1 - 2026-11-04

- First version: PlanetScale remote MCP server over streamable HTTP.
- Endpoint taken from the vendor's plugin repository (`planetscale/claude-plugin 95c80f9`).
- The auth mode is OAuth, as the vendor describes it. BoldCreate Connect supplies its own OAuth client.
- The vendor's plugin also bundles skills in `database-skills/` and `planetscale-skills/`, and a `.skills-versions.json` file. They are not included here. Both have their own MIT licence and could be imported as a separate skills plugin.
