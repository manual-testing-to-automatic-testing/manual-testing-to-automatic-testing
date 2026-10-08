# Locales

How the programme is translated, published, and served in more than one language, and which locales are done. See [`locales-by-priority.md`](locales-by-priority.md) for the order of work, and [`../locales-for-global-sharing-with-svelte/`](../locales-for-global-sharing-with-svelte/index.md) for the general guidance this project follows.

## Status

| Locale | Name | Direction | Status | Notes |
| --- | --- | --- | --- | --- |
| en-001 | English | ltr | Done | Source language |
| cy-001 | Cymraeg (y byd) | ltr | Not started | Next in priority order; translation stopped on 2026-10-07 |
| cy-gb | Cymraeg | ltr | Not started | To start as a copy of cy-001, for Welsh readers in Great Britain |

Any AI-generated translation needs a native speaker review; [`../../tasks.md`](../../tasks.md) tracks each review.

## Implementation status

This file is the contract for adding locales. Today only part of it is built:

| Part | Status |
| --- | --- |
| Locale codes, directory names, peer ids | Built: `scripts/locales.py` places, relinks, copies, and checks translations in `locales/<code>/` |
| Website at `/<locale>/<slug>/`, `en-001` only, with `lang` and `dir` from the BCP 47 tag | Built |
| Website serving more than one locale: translated documents, untranslated fallback, alternates and `hreflang`, the picker switching to the same page | Not built |
| Home page redirect by browser language, and the stored picker choice | Not built: `/` always goes to `/en-001/` |
| Interface strings for another locale (`chrome.ts`, page messages, `assessment.ts`) | Not built: strings are English only, and `assessment.ts` does not exist yet |
| Localised instruments (`instruments/locales/<code>/`, `build_instrument.py --locale`) | Not built |

Build the parts marked "Not built" before publishing the first translated locale.

## Locale codes

A locale code is `<language>-<region>`, in lowercase: a two- or three-letter ISO 639 language code, a hyphen, then a two-letter ISO 3166 region code or the three-digit UN Module 49 code `001` for the world. For example `cy-gb` (Welsh in Great Britain) and `cy-001` (Welsh for readers anywhere).

- Prefer the world locale, `<language>-001`. A regional locale, such as `cy-gb`, may start as a copy of its world locale, kept in step with it, so that readers in that region get a matching URL and language tag.
- Never use a bare language code, such as `en`, as a locale code, a directory name, or a URL path.
- The region code must be a real ISO 3166 code for a place where the language is spoken.
- The default locale is `en-001`.

A locale code is not the same as a language tag. Each locale also has a BCP 47 tag, in `LOCALE_META` in `manual-testing-to-automatic-testing.github.io/src/lib/i18n/locales.ts`, for `<html lang>`, `hreflang`, and screen readers: `en`, `cy`, `cy-GB`. Use the tag, not the code, wherever a browser or search engine reads the language.

## Directory names

All locale directories use the format `<language>-<region>`. A bare language code, such as `en/`, is not allowed.

| Directory | Holds | Written by |
| --- | --- | --- |
| `locales/<code>/` | The translated Markdown documents, with translated folder names (source of truth for that locale) | Translators, through `scripts/locales.py` |
| `instruments/locales/<code>/` | The capability self-assessment for each track, in that locale | `scripts/build_instrument.py`, from the roles-skills reference's locale |
| `manual-testing-to-automatic-testing.github.io/content/locales/<code>/` | Copies of the above, for the website | `bin/sync` |

`scripts/locales.py check` rejects any other name.

## Documents and peer ids

English documents are the monorepo's own Markdown files, at their own paths, such as `plan.md` and `materials/gates/calibration-guide.md`.

Each other locale's version of a document is a directory in `locales/<code>/`, with a translated name, holding:

- `index.md`: the translation
- `README.md`: a symlink to `index.md`
- `.locale-peer-id`: a 32-character lowercase hexadecimal id and a newline.

The peer id is the MD5 of `doc:` followed by the English document's path, for example `doc:materials/gates/calibration-guide.md`. It is identical in every locale's version of the same document, whatever its slug, and it is how the website resolves "this page, in locale X". The translation of the root `README.md` is `locales/<code>/index.md`, with its own peer id file in `locales/<code>/`.

Translated folder names are slugs made from the translated titles, lower case, with hyphens, keeping accented and non-Latin letters. Ids that are codes stay as they are in every locale: track ids (`band-5-quality-assurance`), module ids (`m4`), and item ids (`Part A item 1`).

### Working with translations

```sh
# Place a translation: writes locales/<code>/<dir>/index.md, README.md, and
# .locale-peer-id, and rewrites relative links from English paths to this
# locale's paths (or to the English document where there is no translation).
python3 scripts/locales.py place cy-001 materials/gates/calibration-guide.md deunyddiau/gatiau/canllaw-graddnodi translation.md

# Start a regional locale as a copy of its world locale.
python3 scripts/locales.py copy cy-001 cy-gb

# Check every locale: names, files, peer ids, links, and what is missing.
python3 scripts/locales.py check
```

Write a translation with its links exactly as they are in the English source; `place` rewrites them.

## What is translated

- **Translated:** every document's prose, headings, tables, and lists; the website's interface strings; the band outlines, job evaluation factors, health care skills, and reference responsibilities in the self-assessment, from the roles-skills reference's translation.
- **Never translated:** quotations from the UK GDaD PCF (role and role level statements, UK GDaD PCF skill names and level descriptions), which stay in English as quotations; product and tool names (Selenium, Mocha, Node.js, HAPI FHIR, GitHub); code, commands, file names, and paths; ids (`Band 5 quality assurance`, `Learning outcome 4`, `Evidence 10`, `Decision 7`, `Part A item 17`); and the rating codes in exported TSV files (`Meets`, `Partly`, `Not yet`), so that `scripts/capability_index.py` reads every locale's export.

## URLs

The URL carries the locale, as in testingexamples.github.io.

- Every page is under `/<code>/`, including the default: `/en-001/spec/`, `/cy-001/manyleb/`.
- A document's slug is its directory in `locales/<code>/`. A document with no translation yet is served at its English slug under the locale, with its English text, marked as English (`lang="en"`) and with a notice.
- The website's own pages use fixed slugs in every locale: `self-assessment/<track>/` and `search/`, with translated content.
- A bare-language path such as `/cy/` or `/en/` is a 404.

### Home page redirect

On a visit to the bare home page, `/`, the site goes to the published locale that best matches the browser's languages (`navigator.languages`):

1. The exact locale code, such as `cy-GB` to `/cy-gb/`.
2. The language's world locale, such as `cy` to `/cy-001/`.
3. Any locale of that language.

The first language that matches wins. If none matches, the site goes to `/en-001/`. Once a reader chooses a language with the picker, the choice is stored in `localStorage` under `manual-testing-to-automatic-testing.locale-chosen`, and the home page goes there instead. The matching is `browserLocale` in `src/lib/i18n/locales.ts`.

## Language picker

- The picker lists every locale in `LOCALES`, labelled each in its own language.
- It reflects the URL, and navigates to the same page in the chosen locale, using the page's alternates; a page with no peer in that locale goes to that locale's home page.
- It gets a detached target element, so it never writes its raw code to `<html lang>`; `hooks.server.ts` and the layout set `lang` and `dir` from the BCP 47 tag.
- Every page declares its alternates with `<link rel="alternate" hreflang>`, plus `x-default` for `en-001`.

## Interface strings

`src/lib/i18n/chrome.ts` holds the interface strings for the header, footer, pickers, and banner; each page holds its own strings, keyed by locale; and `src/lib/components/SelfAssessment.svelte` takes its strings from `src/lib/i18n/assessment.ts`. Each is a typed object per locale, so a missing key fails `pnpm check`.

## Right-to-left locales

A locale with `dir: 'rtl'` in `LOCALE_META` gets `dir="rtl"` on `<html>`. Check every page layout, table, and picker in a browser before publishing the first one.

## Adding a locale

1. Translate serially, one locale at a time, without subagents.
2. Translate every document into `locales/<code>/` with `scripts/locales.py place`, until `scripts/locales.py check` reports nothing missing.
3. Build its instruments: `python3 scripts/build_instrument.py --reference <roles-skills locale reference.json> --locale <code> --out instruments/locales/<code>`.
4. Add the code to `LOCALES` in `src/lib/i18n/locale-codes.js` and to `LOCALE_META`, and its strings to `chrome.ts`, `assessment.ts`, and each page's messages.
5. Run `manual-testing-to-automatic-testing.github.io/bin/sync` and `make check`.
6. Check pages in a browser: the locale's home page, a document, search, a self-assessment, and the picker.
7. Update this file's status table, `README.md`, and `tasks.md`.
8. Commit, push, publish with `make github-pages`, watch the deploy, and verify the live site.
9. Stop, and ask before starting the next locale.
