# Expo

Skills that teach agents to work with Expo. They are copied from the vendor's repository, [expo/skills](https://github.com/expo/skills), at commit `d4f4840`.

Build, deploy, upgrade and debug Expo and React Native apps, including EAS.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Expo**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Expo**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install expo@boldcreate-plugins`.

## Skills

24 skills: `eas-app-stores`, `eas-hosting`, `eas-observe`, `eas-simulator`, `eas-update`, `eas-update-insights`, `eas-workflows`, `expo-animation`, `expo-app-clip`, `expo-brownfield`, `expo-data-fetching`, `expo-design-system`, `expo-dev-client`, `expo-dom`, `expo-examples`, `expo-module`, `expo-native-ui`, `expo-overview`, `expo-project-structure`, `expo-router`, `expo-skill-feedback`, `expo-ui`, `expo-upgrade`, `expo-web-to-native`.

## Setup

No install-time settings.

## Before you install

Two scripts ship inside the skills: `eas-workflows/scripts/fetch.js`, `expo-ui/scripts/list-components.js`. I did not run them.

The skills assume the Expo MCP server at `https://mcp.expo.dev/mcp`. It is not part of this plugin, so add it yourself.

`skills/README.md` is the vendor's own index of the skills. `skills/expo-animation/LICENSE` is a separate MIT licence held by Emil Kowalski for that skill. It ships inside the skill folder.

## Docs

- Vendor repository: https://github.com/expo/skills

## Logo

Expo mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #1C2024, on a padded white tile. The mark is a trademark of its owner.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.
