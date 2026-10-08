<script lang="ts">
  import type { Locale } from '#lib/i18n/locales.js';

  let { data } = $props();

  type Messages = {
    heading: string;
    lede: string;
    startCta: string;
    tracksHeading: string;
    tracksIntro: string;
  };

  const EN_001: Messages = {
    heading: 'Manual testing to automatic testing',
    lede:
      'A formal, gated training programme that upskills manual testers at Bands 3 to 7 into automatic testers. Each person continues in their current band and UK GDaD PCF role.',
    startCta: 'Read the programme',
    tracksHeading: 'Tracks',
    tracksIntro: 'Find the track for your band and UK GDaD PCF role. Each track’s page has its guide and its self-assessment.',
  };

  const MESSAGES: Record<Locale, Messages> = { 'en-001': EN_001 };
  const m = $derived(MESSAGES[data.locale as Locale]);

</script>

<div class="page-intro">
  <h1>{m.heading}</h1>
  <p class="page-lede">{m.lede}</p>
  <p class="page-actions">
    <a class="button" href={data.docs.spec.href}>{m.startCta}</a>
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

