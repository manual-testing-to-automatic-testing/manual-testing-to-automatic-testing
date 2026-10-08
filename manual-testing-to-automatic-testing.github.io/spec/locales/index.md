# Locales

This site supports one locale today:

| Locale | Label | Notes |
| --- | --- | --- |
| `en-001` | English — **default** | British spelling, as in the monorepo's documents |

## URL scheme

As in testingexamples.github.io, every page lives at `/<locale>/<slug>/`, including the default locale, which is prefixed (`/en-001/...`), not bare. The site root `/` redirects to `/en-001/`.

Locale codes have the form `<language>-<region>`, all lower case: a two-letter ISO 639-1 language and a two-letter ISO 3166-1 region, or a UN M.49 region for a language not tied to one country (`001` is "world"). A bare language (`/en/`) is never a locale and 404s.

## What gets translated

- **Interface strings** (header, navigation, pickers, banner, footer) are in `src/lib/i18n/chrome.ts`, one message object per locale.
- **Page strings** (home, self-assessment, search) are in each page's own `MESSAGES`, keyed by locale, as in testingexamples.github.io.
- **Documents** are rendered from the monorepo's Markdown and are English only. A translated document would need a translated source in the monorepo, vendored by `bin/sync`; that is not designed yet.

Never translated: UK GDaD PCF role and skill names, track ids (`Band 5 quality assurance`), item ids (`Part A item 1`, `Part C item 3`), file names, code, and product names.

## Adding a locale

1. Add its code to `src/lib/i18n/locale-codes.js`, and its label, BCP 47 tag, and direction to `LOCALE_META` in `src/lib/i18n/locales.ts`.
2. Add its message object to `src/lib/i18n/chrome.ts` and to each page's `MESSAGES`.
3. Decide how documents are served in that locale, and update this file.
4. Run `pnpm check`, `pnpm build`, and `pnpm test`.
