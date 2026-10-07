# Monorepo GitHub Pages

Goal: publish the programme's website by using git subtree to export it from this monorepo to a sibling read-only repository.

This project is a monorepo: `manual-testing-to-automatic-testing/manual-testing-to-automatic-testing` on GitHub.

It contains a GitHub Pages subproject: `manual-testing-to-automatic-testing.github.io/`.

The GitHub Pages subproject uses:

- [GitHub Pages](https://pages.github.com/)
- [SvelteKit](https://svelte.dev/docs/kit/) 3, prerendered with `@sveltejs/adapter-static`
- [Lily Design System](https://github.com/LilyDesignSystem/lily-design-system), including its PickerBar

It follows the same ways as `testingexamples.github.io`: the same stack, pnpm and Node versions, deploy workflow, and `/<locale>/<slug>/` URL scheme. Its own specification is [`manual-testing-to-automatic-testing.github.io/spec/index.md`](../../manual-testing-to-automatic-testing.github.io/spec/index.md).

## Content

The website renders this monorepo's documents and instruments. They are vendored into the subproject by `manual-testing-to-automatic-testing.github.io/bin/sync`, so the subproject builds on its own once it is exported. After changing any document or instrument here:

```sh
manual-testing-to-automatic-testing.github.io/bin/sync
git add -A
git commit -m "Sync the website"
make github-pages
```

## Publish

To publish the GitHub Pages subproject, use git subtree to derive a sibling read-only export repository: `manual-testing-to-automatic-testing/manual-testing-to-automatic-testing.github.io` on GitHub, served at <https://manual-testing-to-automatic-testing.github.io>.

## Makefile

File `Makefile` provides task `make github-pages`, which delegates to the POSIX shell script `bin/make-github-pages`. The script runs the subtree push:

```sh
git subtree push --prefix=manual-testing-to-automatic-testing.github.io github-pages main
```

The remote is always named `github-pages`, the same as the task and the script. The script, not the Makefile, carries the safety checks, so they live in one place:

- an uncommitted-changes guard
- a validation pass: `bin/check`, which checks that the vendored content is up to date, that the instruments rebuild unchanged, that the site checks, builds, and passes its tests, and that the practice repository lints and passes its katas and API tests (and, with `CHECK_BROWSER=1`, its Selenium browser tests)

```make
.PHONY: github-pages
github-pages:
	bin/make-github-pages
```

To add the remote once:

```sh
git remote add github-pages git@github.com:manual-testing-to-automatic-testing/manual-testing-to-automatic-testing.github.io.git
```

## Maintenance

Always maintain the GitHub Pages subproject here: `manual-testing-to-automatic-testing.github.io/`.

To maintain the sibling read-only export repository, always use git subtree. Never work directly in `manual-testing-to-automatic-testing/manual-testing-to-automatic-testing.github.io`. A commit made there directly has no common ancestor with the next subtree split, so the next publish is rejected.

## One-time setup

1. Create the GitHub organisation or user `manual-testing-to-automatic-testing`, or change the owner in `manual-testing-to-automatic-testing.github.io/src/lib/site.ts`, `static/llms.txt`, `static/robots.txt`, and this file.
2. Create the empty repository `manual-testing-to-automatic-testing.github.io` under it.
3. In that repository's settings, set Pages to deploy from GitHub Actions.
4. Add the `github-pages` remote here, as above, then run `make github-pages`.
