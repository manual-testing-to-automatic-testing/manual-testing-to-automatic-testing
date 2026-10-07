// The site root has no content of its own: every page lives under a locale.
// adapter-static turns this redirect into a static meta-refresh page.
import { redirect } from '@sveltejs/kit';
import { DEFAULT_LOCALE } from '#lib/i18n/locales.js';

export const load = () => {
  redirect(308, `/${DEFAULT_LOCALE}/`);
};
