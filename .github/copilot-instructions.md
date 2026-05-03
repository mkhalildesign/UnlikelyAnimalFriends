# Copilot / AI agent guidance for this repo

Purpose
- Help AI coding agents be productive quickly in this Vite + React single-page app.

Big picture
- This is a small client-side React app built with Vite. The entry is `src/main.jsx` which mounts `App` from `src/App.jsx` and uses `index.html` as the HTML shell.
- No backend or runtime APIs are present in this repo; changes are local UI only. Static assets live in `public/` and are referenced from HTML or code as absolute paths (e.g. `/favicon.svg`).

How to run locally
- Install deps (prefers pnpm because `pnpm-lock.yaml` is present):
  - `pnpm install`
  - `pnpm dev` to start Vite dev server (same as `npm run dev`)
  - `pnpm build` to build for production
  - `pnpm preview` to preview the built app
- Linting: `pnpm run lint` runs ESLint (config at `eslint.config.js`).

Project patterns & conventions
- Uses `.jsx` components and React Hooks (see `src/App.jsx`). Create new components under `src/` and import them with ESM imports.
- Styling is plain CSS files next to components (`src/App.css`, `src/index.css`). Keep class names simple; current code uses BEM-like blocks (`.page`, `.hero`, `.generator`).
- Randomness and local state live in components via `useState` and inline helper functions (e.g. `randomItem` in `src/App.jsx`). When adding features, prefer lifting state only when multiple components need it.
- Files are ESM modules; `package.json` uses `type: "module"` so use `import`/`export` syntax.

Code-editing guidance (what to do and what to avoid)
- UI changes: edit `src/App.jsx` and `src/App.css`. Small features should be implemented as new components under `src/` and imported into `App.jsx`.
- Adding new routes or pages: this project currently has no router — if you add one, prefer `react-router` and keep routes under `src/pages/`.
- Tests: there are no tests in the repo. Do not add tests unless the user asks — focus on shipping small UI patches first.

Integration points & external deps
- No networked APIs are referenced. External packages are listed in `package.json` (React, Vite, plugins). Upgrades should respect Vite 8 / React 19 compatibility and `@vitejs/plugin-react`.

Developer workflows the project expects
- Fast iteration via `pnpm dev` (Vite HMR). Use the dev server for visual changes.
- Code quality via `pnpm run lint` (ESLint). Conform to the existing ESLint rules; don't introduce new global variables.

Examples (quick actionable edits)
- To change the title text, edit `src/App.jsx` within the `<h1 className="title">` block.
- To add a new prompt card field, add a new value to the `prompt` state and render another `PromptCard` in the `.cards` section.

When you need help or more information
- If behavior depends on external services or build infra, ask for the preferred package manager (pnpm vs npm) and whether CI exists.
- Request additional tests or a router only if the user asks for them; this repo is intentionally minimal.

Keep it small and REPL-friendly
- Prioritize changes that are easy to run locally with `pnpm dev` and visible in the browser. Small, focused PRs are preferred.

Files to reference when working here
- `package.json` — scripts and deps
- `vite.config.js` — build config
- `src/main.jsx`, `src/App.jsx`, `src/App.css` — the app core

If you modify this file
- Merge existing content if present; preserve any human-written guidance.

-- end --
