// The published locale codes, default first. Plain JavaScript, because
// vite.config.ts and src/params.ts load it directly at build time, where the
// #lib import alias does not resolve. src/lib/i18n/locales.ts builds on this.
// See spec/locales/index.md before adding a locale.

export const DEFAULT_LOCALE = 'en-001';

export const LOCALES = /** @type {const} */ (['en-001']);
