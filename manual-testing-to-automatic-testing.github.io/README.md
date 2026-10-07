# manual-testing-to-automatic-testing.github.io

The website for the manual testing to automatic testing training programme: the programme spec, plan, tasks, every material, and an interactive capability self-assessment for each track.

Published at <https://manual-testing-to-automatic-testing.github.io>.

> **This repository is a read-only export.** It is published from the `manual-testing-to-automatic-testing.github.io/` directory of the monorepo by `git subtree`. Do not commit here: the next publish would be rejected. Make every change in the monorepo.

## Build

Requires Node.js 26 and pnpm.

```sh
pnpm install
./bin/sync      # in the monorepo only: refresh vendored inputs
pnpm dev        # http://localhost:5173
pnpm check
pnpm build      # build/
pnpm test       # after pnpm build
```

GitHub Actions (`.github/workflows/deploy.yml`) checks, builds, and tests every push to `main`, then deploys `build/` to GitHub Pages.

See [spec/index.md](spec/index.md) for the site specification and [AGENTS.md](AGENTS.md) for working rules.

## Licence

See [LICENSE.md](LICENSE.md).
