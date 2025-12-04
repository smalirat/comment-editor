# Comment Editor

Comment Editor is a lightweight and language-aware VS Code extension that helps you clean your code by removing comments, log statements, or running all cleanup tools at once — while respecting each language’s syntax rules.

## Features

- Removes **single-line** and **multi-line** comments.
- Removes common **log statements** (`console.log`, `printf`, `System.out.println`, etc.).
- “**Run All**” mode allows applying multiple filters in one step.
- **Language-aware rules**, automatically adapting to the file being edited.
- Supports a growing set of languages:
  - JavaScript, TypeScript
  - Java, C, C++, C#
  - PHP
  - Ruby
  - Bash / Shell
  - …and more.

## Commands

| Command | Description |
|--------|-------------|
| **Remove Comments** | Deletes all comments in the current file |
| **Remove Logs** | Removes console/log/debug statements |
| **Run All Filters** | Opens an action window to run one or multiple rules |

### Ways to execute commands:
- Open the **Command Palette** → `Ctrl+Shift+P`
- Type any of:
  - `Remove Comments`
  - `Remove Logs`
  - `Run All Filters`

## How It Works

Comment Editor uses internal syntax-aware rules and a unified filtering engine.
Each rule targets specific patterns for each language, ensuring cleaner and safer transformations.

Future versions will introduce:
- Per-language configuration
- Optional rule toggles
- Smarter URL handling

## Release Notes

### 1.2.0
- Added **Remove Logs** command.
- Added **Run All Filters** command window.
- Introduced unified **filter pipeline** for better extensibility.

### 1.1.0
- Added repository and license metadata.

### 1.0.0
- Initial release with comment removal.

## Known Issues

- Some URLs containing `//` may still be interpreted as comments.
  A more robust parser is planned for future releases.

## Requirements

No external dependencies.
Works on all platforms supported by VS Code.

---

Enjoy clean code! ✨
