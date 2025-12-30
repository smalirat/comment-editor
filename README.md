# Comment Editor

**Comment Editor** is a lightweight and powerful VS Code extension designed to keep your workspace clean. It removes comments, logs, TODOs, and emojis intelligently while respecting each language's specific syntax.

## Key Features

- **Integrated StatusBar**: Access all features instantly from the **StatusBar** button.
- **Interactive Menu**: Choose exactly what to clean (Logs, Comments, TODOs, or Emojis) or run all filters at once.
- **Language-Aware Engine**: Automatically adapts cleanup rules based on the file type (JS, Python, C++, SQL, etc.).
- **URL Protection**: Smart regex ensures `//` inside links (e.g., `https://...`) are never accidentally deleted.

## How to Use

### Status Bar Action
Click the **$(edit) Comment Editor** icon in the bottom-right corner of your editor to open the action menu.

### Command Palette (`Ctrl+Shift+P`)
- `Comment Editor: Show Menu`: Opens the interactive filter selector to choose specific actions.
- `Comment Editor: Apply Filters`: Runs the default cleanup (all filters) on the current file immediately.
- `Comment Editor: Remove Comments`: Deletes all single-line and multi-line comments.
- `Comment Editor: Remove Logs`: Cleans up console logs, print statements, and debuggers.
- `Comment Editor: Remove TODOs`: Removes TODO, FIXME, and HACK annotations.
- `Comment Editor: Remove Emojis`: Strips all emojis and presentation symbols from the code.

## Supported Languages
Includes full support for JavaScript, TypeScript, Python, Java, C, C++, C#, PHP, Ruby, Go, Rust, Swift, SQL, HTML/XML, and more.

---
Enjoy a cleaner coding experience!