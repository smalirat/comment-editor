# Change Log

All notable changes to the **comment-editor** extension will be documented in this file.

## [1.0.0] - 2025-12-30
### Added
- **Initial Official Release**: Professional version of Comment Editor.
- **StatusBar Interface**: Integrated button in the bottom-right corner for quick access.
- **Interactive Cleanup Menu**: QuickPick menu to choose between specific filters or a full cleanup.
- **Language-Aware Filtering**: Support for 20+ languages including JS, TS, Python, Java, C++, PHP, and SQL.
- **Smart Filters**:
  - **Remove Comments**: Support for single-line and multi-line comments.
  - **Remove Logs**: Detection of console logs, print statements, and debuggers.
  - **Remove TODOs**: Strips TODO, FIXME, and HACK annotations.
  - **Remove Emojis**: Robust detection using Unicode Property Escapes.
- **Standalone Commands**: Each filter is now available directly in the Command Palette.
- **URL Protection**: Advanced regex logic to prevent accidental deletion of `//` inside URLs.
- **Auto-Formatting**: Automatic removal of residual blank lines after code cleanup.