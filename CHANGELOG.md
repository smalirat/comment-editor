# Change Log

All notable changes to the **comment-editor** extension will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/),
and this project adheres to [Semantic Versioning](http://semver.org/).

---

## [1.2.0] - 2025-12-03
### Added
- Nuevo comando **Run All Filters**, con ventana interactiva de acciones.
- Nuevos comando:
  - **Remove Logs**

### Changed
- Refactor completo de la estructura de filtros hacia un pipeline dinámico.
- Mejoras en la detección de lenguaje y manejo del contexto de filtrado.

### Fixed
- Correcciones menores en el procesamiento de comentarios anidados.
- Se corrigieron inconsistencias en filtros multiline para ciertos lenguajes.

---

## [1.1.0] - 2025-12-03
### Added
- Adición de archivo `LICENSE` (MIT) al proyecto.

### Changed
- Se reorganizó la estructura del proyecto para mayor claridad en los filtros.
- Se mejoró documentación interna del código.

---

## [1.0.0] - 2025-12-03
### Added
- Implementación inicial del comando **Remove Comments**.
- Eliminación de comentarios dependiente del lenguaje mediante:
  - `commentRules.ts` → sintaxis de comentarios según lenguaje.
  - `commentFilter.ts` → filtro genérico de comentarios.
  - `basePipeline.ts` → estructura de pipeline para procesar código.
- Soporte multilenguaje:
  - JavaScript, TypeScript, Java, C, C++, C#, PHP, Ruby, Shell/Bash.

