# Unlikely Animal Friends

A tiny client-side React app that generates whimsical prompt ideas pairing unlikely animal friends and places. It's a Vite + React single-page app intended as a simple creative seed generator.

Why this repo
- Small, single-purpose UI for generating short creative prompts. Good for small experiments, demos, or learning Vite + React 19.

Quick start
1. Install dependencies (pnpm preferred):

```bash
pnpm install
pnpm dev
```

- Open the dev server URL shown by Vite (HMR active).
- Build for production: `pnpm build` and preview with `pnpm preview`.

Project structure (key files)
- `index.html` — HTML shell that mounts the app.
- `src/main.jsx` — app entry, mounts `App` into `#root`.
- `src/App.jsx` — main UI and logic: arrays of `animals` and `places`, `useState` for `prompt`, `generatePrompt()` helper, and the `PromptCard` presentational component.
- `src/App.css` and `src/index.css` — plain CSS used for layout and styling (no CSS-in-JS).
- `public/` — static assets (e.g. `/favicon.svg`) referenced from code as absolute paths.
- `vite.config.js` — Vite configuration with `@vitejs/plugin-react`.
- `package.json` — scripts and dependency pins (React 19, Vite 8).

Patterns & conventions
- ESM modules (package.json `type: "module"`). Use `import`/`export`.
- Small functional components and hooks only. Add new components under `src/`.
- Styles are colocated CSS files; keep class names simple (BEM-like blocks such as `.page`, `.hero`, `.generator`).
- No router or backend — changes are purely client-side UI.

Editing notes / examples
- To change the headline, edit the `<h1 className="title">` block in `src/App.jsx`.
- To add a card field: add a new property to `prompt` state and render an additional `PromptCard` in `src/App.jsx`.

Developer commands
- `pnpm dev` — start dev server (Vite HMR)
- `pnpm build` — build for production
- `pnpm preview` — preview the production build
- `pnpm run lint` — run ESLint (eslint.config.js)

Contributing
- This repo is intentionally minimal. Open small, focused PRs and prefer changes that are easy to run locally with `pnpm dev`.

License
- None included. Add a license file if you plan to reuse or redistribute.

