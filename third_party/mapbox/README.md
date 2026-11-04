# Mapbox

Skills that teach agents to work with Mapbox. They are copied from the vendor's repository, [mapbox/mapbox-agent-skills](https://github.com/mapbox/mapbox-agent-skills), at commit `f71cd72`.

Build location-aware apps with Mapbox: maps, search, navigation, styles and geospatial tools.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Mapbox**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Mapbox**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install mapbox@boldcreate-plugins`.

## Skills

- Web: `mapbox-web-integration-patterns`, `mapbox-web-performance-patterns`, `mapbox-data-visualization-patterns`, `mapbox-store-locator-patterns`.
- Mobile: `mapbox-ios-patterns`, `mapbox-android-patterns`, `mapbox-flutter-patterns`.
- Maps and search: `mapbox-style-patterns`, `mapbox-style-quality`, `mapbox-cartography`, `mapbox-search-patterns`, `mapbox-search-integration`, `mapbox-navigation-patterns`, `mapbox-geospatial-operations`, `mapbox-location-grounding`.
- Migration and tooling: `mapbox-google-maps-migration`, `mapbox-maplibre-migration`, `mapbox-mcp-devkit-patterns`, `mapbox-mcp-runtime-patterns`, `mapbox-token-security`.

## Setup

No install-time settings.

## Before you install

The skills use the `MAPBOX_ACCESS_TOKEN` environment variable. Use a public token (`pk.`) in client code and keep secret tokens (`sk.`) on the server. The `mapbox-token-security` skill explains this. This plugin does not store a token.

The skills refer to Mapbox's three MCP servers (`mapbox`, `mapbox-devkit`, `mapbox-docs`). This plugin does not include them.

`mapbox-mcp-runtime-patterns` includes sample Python files. They are examples for the reader. The plugin does not run them.

The vendor's `skills/README.md` sits directly under `skills/`, not inside a skill folder, so BoldCreate Connect may not deliver it.

## Docs

- Vendor repository: https://github.com/mapbox/mapbox-agent-skills

## Logo

Mapbox mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #000000, on a padded white tile. The mark is a trademark of its owner.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.
