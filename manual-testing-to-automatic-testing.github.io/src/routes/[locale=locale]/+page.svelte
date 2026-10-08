<script lang="ts">
  import { localeHref } from '#lib/i18n/locales.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { data } = $props();

  type Messages = {
    heading: string;
    lede: string;
    start: string;
    startCta: string;
    assessCta: string;
    tracksHeading: string;
    tracksIntro: string;
  };

  const EN_001: Messages = {
    heading: 'Manual testing to automatic testing',
    lede:
      'A formal, gated training programme that upskills manual testers at Bands 3 to 7 into automatic testers, over 220 hours of protected learning time, while each person stays in the band and UK GDaD PCF role they already have.',
    start: 'Start with the programme specification: it is the single source of truth.',
    startCta: 'Read the programme',
    assessCta: 'Open the self-assessment',
    tracksHeading: 'Tracks',
    tracksIntro: 'Find the track for your band and UK GDaD PCF role.',
  };

  const MESSAGES: Record<Locale, Messages> = { 'en-001': EN_001 };
  const m = $derived(MESSAGES[data.locale as Locale]);

</script>

<div class="page-intro">
  <h1>{m.heading}</h1>
  <p class="page-lede">{m.lede}</p>
  <p>{m.start}</p>
  <p class="page-actions">
    <a class="button" href={data.docs.spec.href}>{m.startCta}</a>
    <a class="button" href={localeHref(data.locale as Locale, 'self-assessment')}>{m.assessCta}</a>
  </p>
</div>

<section class="section" aria-labelledby="tracks">
  <h2 id="tracks">{m.tracksHeading}</h2>
  <p>{m.tracksIntro}</p>
  <ul class="track-list">
    {#each data.tracks as track (track.id)}
      <li><a href={track.guide}>{track.title}</a></li>
    {/each}
  </ul>
</section>

