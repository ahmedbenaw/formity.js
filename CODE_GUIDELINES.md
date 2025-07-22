# 📝 Code Guidelines for Formity Zero

Welcome to the Formity Zero codebase! This document provides detailed, line-by-line help and best practices for contributing to this project. Please read carefully before submitting a pull request.

---

## General Principles
- **Clarity:** Write clear, self-explanatory code. Use comments to explain non-obvious logic.
- **Consistency:** Follow the existing code style and structure.
- **Type Safety:** Use TypeScript types and interfaces everywhere.
- **Modularity:** Keep code modular and reusable.
- **Documentation:** Every function, class, and complex block must have a comment explaining its purpose.
- **Testing:** Add or update tests for every new feature or bugfix.

---

## File-by-File Guidelines

### `bootstrap.js`
- Top-level comment explains the script's purpose.
- Each function (e.g., `run`, `detectPm`, `main`) has a comment describing its role.
- Inline comments explain key logic, especially OS/package manager detection and error handling.
- Use `log()` for all user-facing output, with color codes for clarity.
- Always check Node version and exit with a clear message if requirements are not met.

### `scripts/doctor.js`
- Comment at the top describes the script's health-check purpose.
- Each major block (package check, dependency install) is commented.
- Use clear error messages and exit codes.

### `packages/*/src/index.ts`
- Each exported interface/class/function must have a JSDoc comment.
- For each method, add a comment describing its parameters, return value, and side effects.
- For logic blocks (e.g., registry, integration presets), add comments explaining the design.
- Use descriptive variable and function names.

### `apps/developer-ux/src/*`
- Each React component must have a comment at the top describing its purpose.
- For hooks (`useEffect`, `useRef`), add inline comments explaining their use.
- For event handlers and callbacks, describe what triggers them and their effect.

### `README.md`
- Keep the documentation up to date with code changes.
- Reference this guidelines document for all contributors.

---

## Contribution Instructions

1. **Read this document fully before starting.**
2. **Comment your code:** Every new or modified line/block must have a help comment unless it is trivial.
3. **Open an issue** if you are unsure about a design or need feedback.
4. **Submit a PR** with a clear description and reference the relevant roadmap subtask.
5. **Review feedback:** Be responsive to code review comments and update your PR as needed.

---

## Example: Commenting a Function

```ts
/**
 * Initializes the Integration Engine with default presets.
 * @constructor
 */
export class IntegrationEngine {
  // ...
}
```

---

For any questions, open an issue or join the discussion on GitHub. 