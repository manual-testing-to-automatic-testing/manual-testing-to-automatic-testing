<script lang="ts">
  import { page } from '$app/state';
  import { goto } from '$app/navigation';
  import { SkipLink, PhaseBanner, Tag } from '@lilydesignsystem/svelte-headless';
  import { themeName } from '@lilydesignsystem/svelte-theme-picker';
  import { sizeName } from '@lilydesignsystem/svelte-text-size-picker';
  import type { ShareTarget } from '@lilydesignsystem/svelte-share-picker';
  import PickerBar from '@lilydesignsystem/svelte-picker-bar';
  import { SITE_NAME, SOURCE_REPO, THEMES } from '#lib/site.js';
  import { LOCALES, LOCALE_LABELS, isLocale, localeHref, localeOfPath, type Locale } from '#lib/i18n/locales.js';
  import { chromeFor } from '#lib/i18n/chrome.js';

  let { children } = $props();

  // The URL is the source of the locale.
  const locale: Locale = $derived(localeOfPath(page.url.pathname));
  const chrome = $derived(chromeFor(locale));

  // LocalePicker reports its value on mount and after each navigation; only a
  // real change navigates, to the same page's home in the new locale.
  function switchLocale(code: string): void {
    if (!isLocale(code) || code === locale) return;
    void goto(localeHref(code));
  }

  // LocalePicker writes its raw code to its target's lang attribute. Give it a
  // detached element; hooks.server.ts sets <html lang> from the BCP 47 tag.
  const pickerTarget = typeof document === 'undefined' ? null : document.createElement('span');

  type NavLink = { href: string; label: string };
  const navLinks: NavLink[] = $derived([
    { href: localeHref(locale), label: chrome.nav.home },
    { href: localeHref(locale, 'spec'), label: chrome.nav.programme },
    { href: localeHref(locale, 'curriculum'), label: chrome.nav.curriculum },
    { href: localeHref(locale, 'materials/tracks'), label: chrome.nav.tracks },
    { href: localeHref(locale, 'materials/gates'), label: chrome.nav.gates },
    { href: localeHref(locale, 'self-assessment'), label: chrome.nav.selfAssessment },
    { href: localeHref(locale, 'materials/modules'), label: chrome.nav.materials }
  ]);

  // The same pages for the link picker: a home icon, first in the PickerBar,
  // so the main pages are one tap away on every screen size.
  const pageLinks = $derived([
    ...navLinks.map((link) => ({ id: link.href, label: link.label, href: link.href, current: isCurrent(link.href) })),
    { id: 'github', label: chrome.nav.github, href: SOURCE_REPO }
  ]);

  function isCurrent(href: string): boolean {
    const path = decodeURI(page.url.pathname);
    return href === localeHref(locale) ? path === href : path.startsWith(href);
  }

  // This site owns the share destinations; the share picker ships none.
  const shareTargets: ShareTarget[] = $derived([
    {
      id: 'email',
      label: chrome.shareLabels.email,
      href: (url: string, title: string) =>
        `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
      newTab: false
    },
    {
      id: 'linkedin',
      label: chrome.shareLabels.linkedin,
      href: (url: string) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    },
    {
      id: 'reddit',
      label: chrome.shareLabels.reddit,
      href: (url: string, title: string) =>
        `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
    },
    {
      id: 'bluesky',
      label: chrome.shareLabels.bluesky,
      href: (url: string, title: string) =>
        `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title}\n${url}`)}`
    },
    {
      id: 'mastodon',
      label: chrome.shareLabels.mastodon,
      href: (url: string, title: string) =>
        `https://mastodonshare.com/?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    }
  ]);

  let themeStatus = $state('');
  let sizeStatus = $state('');

  // Every route's load function sets `title` to its full <title> text.
  const shareTitle = $derived(page.data.title ?? SITE_NAME);
</script>

<svelte:head>
  {#if page.data.title}
    <title>{page.data.title}</title>
  {/if}
  {#if page.data.description}
    <meta name="description" content={page.data.description} />
  {/if}
</svelte:head>

<SkipLink href="#main" label={chrome.skipToMainContent} />

<header class="site-header">
  <div class="site-header-inner">
    <a class="site-brand" href={localeHref(locale)}>
      <img class="site-brand-mark" src="/assets/favicon.svg" alt="" aria-hidden="true" />
      <span class="site-brand-text">
        <span class="site-brand-name">{SITE_NAME}</span>
        <span class="site-brand-tagline">{chrome.siteTagline}</span>
      </span>
    </a>
    <nav class="site-nav" aria-label={chrome.mainNavLabel}>
      {#each navLinks as link (link.href)}
        <a href={link.href} aria-current={isCurrent(link.href) ? 'page' : undefined}>{link.label}</a>
      {/each}
      <a href={SOURCE_REPO}>{chrome.nav.github}</a>
    </nav>
    <PickerBar
      class="site-tools"
      links={pageLinks}
      linkProps={{ navigate: (href: string) => void goto(href) }}
      labels={{
        link: chrome.pickerLabels.link,
        search: chrome.pickerLabels.search,
        searchInput: chrome.pickerLabels.searchInput,
        searchSubmit: chrome.pickerLabels.searchSubmit,
        theme: chrome.pickerLabels.theme,
        locale: chrome.pickerLabels.locale,
        textSize: chrome.pickerLabels.textSize,
        share: chrome.pickerLabels.share
      }}
      searchProps={{
        action: localeHref(locale, 'search'),
        navigate: (href: string) => void goto(href)
      }}
      themesUrl="/assets/themes/"
      themes={THEMES}
      themeProps={{
        storageKey: 'manual-testing-to-automatic-testing:theme',
        defaultValue: 'corporate',
        onChange: (theme: string) => (themeStatus = chrome.pickerStatus.theme.replace('{name}', themeName(theme)))
      }}
      locales={[...LOCALES]}
      localeProps={{
        value: locale,
        localeLabels: LOCALE_LABELS,
        target: pickerTarget,
        onChange: switchLocale
      }}
      sizes={['small', 'medium', 'large', 'x-large']}
      textSizeProps={{
        defaultValue: 'medium',
        storageKey: 'manual-testing-to-automatic-testing:text-size',
        onChange: (size: string) => (sizeStatus = chrome.pickerStatus.textSize.replace('{name}', sizeName(size)))
      }}
      {shareTargets}
      shareProps={{
        title: shareTitle,
        copyLabel: chrome.shareLabels.copyLink,
        copiedLabel: chrome.shareLabels.copiedLabel,
        copyFailedLabel: chrome.shareLabels.copyFailedLabel
      }}
    />
    <p class="visually-hidden" aria-live="polite">{themeStatus}</p>
    <p class="visually-hidden" aria-live="polite">{sizeStatus}</p>
  </div>
</header>

<PhaseBanner class="site-phase-banner">
  <Tag label={chrome.banner.tag}>{chrome.banner.tag}</Tag>
  <span>
    {chrome.banner.text}
    <a href={localeHref(locale, 'materials/planning/decision-log')}>{chrome.banner.link}</a>
  </span>
</PhaseBanner>

<main id="main" class="site-main" tabindex="-1">
  {@render children()}
</main>

<footer class="site-footer">
  <div class="site-footer-inner">
    <div>
      <p>{chrome.footer.lede}</p>
      <p class="site-footer-fine">{chrome.footer.licence}</p>
    </div>
    <div class="site-footer-links">
      <a href={localeHref(locale, 'spec')}>{chrome.nav.programme}</a>
      <a href={localeHref(locale, 'self-assessment')}>{chrome.nav.selfAssessment}</a>
      <a href={localeHref(locale, 'about')}>{chrome.nav.about}</a>
      <a href={SOURCE_REPO}>{chrome.footer.source}</a>
    </div>
  </div>
</footer>
