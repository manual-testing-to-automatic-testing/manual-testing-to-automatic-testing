// Route parameter matchers (SvelteKit 3: one module, defineParams).
import { defineParams } from '@sveltejs/kit/params';
import { LOCALES } from './lib/i18n/locale-codes.js';

export const params = defineParams({
  locale: (param: string) => ((LOCALES as readonly string[]).includes(param) ? param : undefined)
});
