// Locale support for this site. See spec/locales/index.md for the contract:
// the URL scheme, what is translated, and how to add a locale.

import { DEFAULT_LOCALE as DEFAULT, LOCALES as CODES } from './locale-codes.js';

export type Locale = (typeof CODES)[number];

export const DEFAULT_LOCALE: Locale = DEFAULT;
export const LOCALES: readonly Locale[] = CODES;

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export type LocaleMeta = {
  /** The name of this locale, written in itself (endonym). */
  label: string;
  /** BCP 47 tag with conventional casing, for the `lang` attribute. */
  bcp47: string;
  dir: 'ltr' | 'rtl';
};

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  'en-001': { label: 'English', bcp47: 'en-001', dir: 'ltr' }
};

export const LOCALE_LABELS: Record<string, string> = Object.fromEntries(
  LOCALES.map((locale) => [locale, LOCALE_META[locale].label])
);

/** The locale a path belongs to: its first segment, or the default. */
export function localeOfPath(pathname: string): Locale {
  const first = pathname.split('/')[1] ?? '';
  return isLocale(first) ? first : DEFAULT_LOCALE;
}

/** A path inside a locale: localeHref('en-001', 'plan') is /en-001/plan/. */
export function localeHref(locale: Locale, slug = ''): string {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}
