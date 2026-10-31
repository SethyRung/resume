# Resume

Sethy Rung's personal CV/resume — a Vue 3 + Vite single-page app that renders the resume at A4 and prints to PDF via the browser.

The app supports **multiple resume templates** selectable at runtime. New templates are added by dropping a `.vue` file in `src/components/resume/` and registering it in `src/App.vue`.

## Stack

- **Vue 3** (rc channel) + **Vite**
- **@nuxt/ui** v4 for components and Tailwind theming
- **Tailwind CSS** v4
- **@comark/vue** for rendering markdown content (descriptions, bullet lists)
- **vue-to-print** for the A4 PDF export
- **oxlint + oxfmt** for linting and formatting
- **Bun** as the package manager (no `npm`/`pnpm` lockfiles)

## Quick start

```sh
bun install         # install dependencies
bun dev             # vite dev server (http://localhost:5173)
bun run build       # typecheck + production build (runs in parallel)
bun run preview     # serve the production build
bun fmt             # format with oxfmt
bun lint            # lint with oxlint
```

## Cloudflare deployment

Hosting uses Cloudflare Workers Static Assets. `cloudflare.config.ts` defines the
`resume` Worker and SPA fallback. The Cloudflare Vite plugin writes the deployable
site to `.cloudflare/output/v0/`; no server-side Worker code is needed.

Use Bun for dependency installation and project scripts. The Cloudflare CLI runs
on Node.js; use Node.js 24.22 or newer in the 24.x release line.

```sh
bun install --frozen-lockfile
cf auth login
bun run deploy:check # typecheck, build, and validate without uploading
bun run deploy       # typecheck, build, and deploy
```

For automatic deployments, connect this repository in Cloudflare Workers Builds:

- Production branch: `main`
- Build command: `bun run build`
- Deploy command: `bunx --no-install cf deploy --prebuilt`
- Root directory: repository root
- Build environment: Node.js `24.22.2`, Bun `1.4.4`

Use the Cloudflare dashboard to authorize the GitHub repository and configure the
build's deployment token. CLI deployment uses your `cf auth login` session, or
`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in unattended environments.

Production URL: <https://resume.sethyrung.com/>. The custom domain is declared in
`cloudflare.config.ts`, so deployments preserve its Cloudflare routing. The
`workers.dev` URL remains available for verification.

## Project structure

```
src/
  App.vue                              # templates registry + <USelect> + Download PDF
  main.ts                              # createApp + @nuxt/ui plugin
  assets/main.css                      # Tailwind, @nuxt/ui, Geist @font-face, @page rules
  components/resume/
    Modern.vue                         # one template per file
public/
  profile.png                          # avatar used in the Modern template
  fonts/{Geist,GeistMono,GeistPixel}/  # self-hosted fonts
.data/                                 # throwaway draft content (gitignored)
```

## Adding a new template

1. Create `src/components/resume/<Name>.vue`. Wrap its top-level element in `<Suspense>` if it (or any descendant) uses async components — `@comark/vue`'s `<Comark>` is async, so most templates will.
2. Add one entry to the `templates` array in `src/App.vue`:
   ```ts
   const templates = [
     { id: "modern", name: "Modern", component: resolveComponent("Modern") },
     { id: "minimal", name: "Minimal", component: resolveComponent("Minimal") },
   ] as const;
   ```
3. The `<USelect>` items, the `TemplateId` literal type, and the dynamic `<component :is>` rendering update automatically — no other changes needed.

## Printing to PDF

The "Download PDF" button calls `vue-to-print` on the active template. The printable area is configured globally in `src/assets/main.css` via `@page { size: A4; margin: 12mm 0 }`, with `content: none` on all six header/footer margin boxes to suppress the browser's default date / URL / page-number overlays (Chrome 131+, via CSS Paged Media Level 3).

## Where resume content lives

Content (name, contact, work history, projects, etc.) is defined inline in each template's `<script setup>`. Draft material lives in `.data/*.md`, but that folder is **gitignored** — it's scratch space for content experimentation, not the source of truth.

## Conventions

- **Bun only** — `bun.lock` is the sole lockfile. Don't add `package-lock.json` / `pnpm-lock.yaml`.
- **oxlint + oxfmt, not ESLint + Prettier.** 2-space indent, double quotes, semicolons, `trailingComma: "all"`, `printWidth: 100`.
- **Vue APIs + VueUse are auto-imported** — no need to import `ref`, `computed`, `createReusableTemplate`, etc.
- **`@nuxt/ui` components auto-import as `U*`** — `UButton`, `USelect`, `USeparator`, `UIcon`, `UTimeline`, etc. Local SFCs are also auto-imported via `unplugin-vue-components`.
- Use **Nuxt UI semantic colors** (`text-default`, `bg-elevated`, `border-inverted`) — not raw Tailwind palette colors.
