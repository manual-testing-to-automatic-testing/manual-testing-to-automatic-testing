// Site-wide constants, shared by the layout and the pages.

export const SITE_NAME = 'Manual testing to automatic testing';
export const ORIGIN = 'https://manual-testing-to-automatic-testing.github.io';

/**
 * The monorepo that is the source of truth for every document on this site.
 * This site is published from its manual-testing-to-automatic-testing.github.io/
 * directory by git subtree; see spec/monorepo-github-pages/ in the monorepo.
 */
export const SOURCE_REPO = 'https://github.com/manual-testing-to-automatic-testing/manual-testing-to-automatic-testing';
export const SITE_REPO = 'https://github.com/manual-testing-to-automatic-testing/manual-testing-to-automatic-testing.github.io';

/** A monorepo file or directory on GitHub, for example spec/index.md. */
export function sourceHref(path: string): string {
  const clean = path.replace(/^\/+/, '');
  return `${SOURCE_REPO}/${clean.endsWith('/') ? 'tree' : 'blob'}/main/${clean}`;
}

/**
 * Lily's generic reference themes, in PickerBar's own order. The national
 * government and public-sector themes are left out, because the programme is
 * written for a generic organisation. Mirrors bin/lily-themes.txt.
 */
export const THEMES = [
  'abyss', 'acid', 'adobe-spectrum', 'aqua', 'autumn', 'black', 'bumblebee', 'business',
  'caramellatte', 'cmyk', 'coffee', 'corporate', 'cupcake', 'cyberpunk', 'dark', 'dim',
  'dracula', 'emerald', 'fantasy', 'forest', 'garden', 'halloween', 'lemonade', 'light',
  'lofi', 'luxury', 'mozilla-protocol', 'night', 'nord', 'pastel', 'retro', 'silk',
  'sunset', 'synthwave', 'valentine', 'winter', 'wireframe'
];

/** A page's full <title>: its own parts, then the site name. */
export function pageTitle(...parts: string[]): string {
  return [...parts.filter(Boolean), SITE_NAME].join(' — ');
}
