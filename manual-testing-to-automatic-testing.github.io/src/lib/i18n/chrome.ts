// Interface strings: site chrome, navigation, pickers, and the
// self-assessment tool. One message object per locale. Document content comes
// from the monorepo's Markdown and is not translated here; see
// spec/locales/index.md.

import type { Locale } from './locales.js';

export type Chrome = {
  skipToMainContent: string;
  siteTagline: string;
  mainNavLabel: string;
  breadcrumbLabel: string;
  nav: {
    home: string;
    programme: string;
    curriculum: string;
    tracks: string;
    gates: string;
    selfAssessment: string;
    materials: string;
    about: string;
    github: string;
  };
  pickerLabels: {
    link: string;
    search: string;
    searchInput: string;
    searchSubmit: string;
    theme: string;
    locale: string;
    textSize: string;
    share: string;
  };
  pickerStatus: { theme: string; textSize: string };
  shareLabels: {
    email: string;
    linkedin: string;
    reddit: string;
    bluesky: string;
    mastodon: string;
    copyLink: string;
    copiedLabel: string;
    copyFailedLabel: string;
  };
  banner: { tag: string; text: string; link: string };
  footer: { lede: string; licence: string; source: string };
  doc: { viewSource: string; contents: string };
};

const EN_001: Chrome = {
  skipToMainContent: 'Skip to main content',
  siteTagline: 'A formal training programme for testers at Bands 3 to 7',
  mainNavLabel: 'Main',
  breadcrumbLabel: 'Breadcrumb',
  nav: {
    home: 'Home',
    programme: 'Programme',
    curriculum: 'Curriculum',
    tracks: 'Tracks',
    gates: 'Gates',
    selfAssessment: 'Self-assessment',
    materials: 'Materials',
    about: 'About',
    github: 'GitHub'
  },
  pickerLabels: {
    link: 'Pages',
    search: 'Search',
    searchInput: 'Search the programme',
    searchSubmit: 'Search',
    theme: 'Theme',
    locale: 'Language',
    textSize: 'Text size',
    share: 'Share'
  },
  pickerStatus: { theme: 'Theme: {name}', textSize: 'Text size: {name}' },
  shareLabels: {
    email: 'Email',
    linkedin: 'LinkedIn',
    reddit: 'Reddit',
    bluesky: 'Bluesky',
    mastodon: 'Mastodon',
    copyLink: 'Copy link',
    copiedLabel: 'Link copied',
    copyFailedLabel: 'Could not copy the link'
  },
  banner: {
    tag: 'Draft',
    text: 'This programme is a draft. Its Decisions 1 to 7 are still open:',
    link: 'see the decision log'
  },
  footer: {
    lede: 'Upskilling manual testers into automatic testers, in the band and role they already hold.',
    licence:
      'Contains public sector information from the UK Government Digital and Data Profession Capability Framework, licensed under the Open Government Licence v3.0. © Crown copyright.',
    source: 'Source on GitHub'
  },
  doc: { viewSource: 'View this document on GitHub', contents: 'Contents' }
};

const MESSAGES: Record<Locale, Chrome> = {
  'en-001': EN_001
};

export function chromeFor(locale: Locale): Chrome {
  return MESSAGES[locale];
}
