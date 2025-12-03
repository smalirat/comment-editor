# Change Log

All notable changes to the "comment-editor" extension will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/),
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.0.0] - 2025-12-03
### Added
- Initial implementation of the **Remove Comments** command.
- Language-aware comment removal using:
  - `commentRules.ts` → comment syntax per language.
  - `commentFilter.ts` → generic comment filter.
  - `basePipeline.ts` → abstract pipeline structure for future features.
- Support for multiple languages: JS, TS, Java, C, C++, C#, PHP, Ruby, Shell/Bash.
