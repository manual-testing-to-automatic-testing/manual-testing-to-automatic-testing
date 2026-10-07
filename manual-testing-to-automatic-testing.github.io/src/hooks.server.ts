// Set <html lang> and dir from the URL's locale, so every prerendered page
// declares its own language before any JavaScript runs.
import type { Handle } from '@sveltejs/kit/hooks';
import { LOCALE_META, localeOfPath } from '#lib/i18n/locales.js';

export const handle: Handle = async ({ event, resolve }) => {
  const meta = LOCALE_META[localeOfPath(event.url.pathname)];
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', meta.bcp47).replace('%dir%', meta.dir)
  });
};
