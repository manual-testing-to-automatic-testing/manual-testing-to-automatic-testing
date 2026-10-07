# AGENTS.md

This directory is `manual-testing-to-automatic-testing.github.io`: a SvelteKit 3 site, built with `@sveltejs/adapter-static` and prerendered to plain HTML, styled with the Lily Design System™ and its PickerBar, deployed to GitHub Pages by `.github/workflows/deploy.yml`.

It publishes the training programme in the monorepo around it: the programme spec, plan, tasks, and every material, plus an interactive capability self-assessment for each track.

@spec/index.md
@../spec/monorepo-github-pages/index.md

## The critical non-negotiable

**The monorepo is the source of truth.** Every document on this site is vendored from the monorepo by `./bin/sync`. Never edit `content/`, `static/downloads/`, or `static/assets/themes/` by hand: edit the monorepo's documents, run `./bin/sync`, and commit both. `./bin/sync --check` reports stale copies.

**Never commit to the site repository directly.** It receives this directory by `git subtree` from the monorepo (`make github-pages` at the monorepo root). A commit made there has no common ancestor with the next subtree split, so the next publish is rejected.

## Scoring must match the monorepo

`src/lib/capability.ts` scores the self-assessment in the browser. It must follow the same rules as the monorepo's `scripts/capability_index.py` and the programme spec ("Capability index", "Gate thresholds"). If you change one, change the other, and check that an exported TSV gives the same index with both.

## Privacy

The self-assessment keeps answers in the browser's `localStorage` only, under `manual-testing-to-automatic-testing:self-assessment:<track>`. Nothing is sent anywhere. Never add analytics, a backend, or any call that sends answers off the device.

## Locales

Every page lives at `/<locale>/<slug>/`, as in testingexamples.github.io. `/` redirects to `/en-001/`. Only `en-001` exists today. See `spec/locales/index.md` before adding one.

## Commands

```sh
pnpm install
./bin/sync     # refresh vendored inputs from the monorepo
pnpm dev       # http://localhost:5173
pnpm check     # svelte-check, must be clean
pnpm build     # build/; strict prerendering fails on any broken internal link
pnpm test      # Playwright, against the production build (run pnpm build first)
```

## Things that bite

- **Lily themes style `.hero`.** Use `.page-intro` and `.page-lede` for page headers.
- **`{#each}` keys must be unique.** A duplicate key throws at hydration and blanks the page, while the prerendered HTML looks fine.
- **Prerendering crawls every link.** A broken internal link fails the build. A page reached only by a form (search) needs `entries`.
- **`url.search` is unavailable while prerendering.** Read the query string in the browser, as the search page does.
- **Theme colours can fail contrast.** The default theme's primary gives 4.13:1. `static/assets/style.css` mixes the theme's text colour into primary, danger, warning, and success; `tests/accessibility.spec.ts` checks it.
- **Restart `pnpm preview` after a build.** A running preview server keeps serving the old build's asset names.
