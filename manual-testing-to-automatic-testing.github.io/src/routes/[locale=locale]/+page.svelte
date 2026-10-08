<script lang="ts">
  import type { Locale } from '#lib/i18n/locales.js';

  let { data } = $props();

  type Messages = {
    heading: string;
    lede: string;
    tracksCta: string;
    startCta: string;
    contentsHeading: string;
    /** The home page's contents: a label for each linked page, by slug, in order. */
    contents: [string, string][];
  };

  const EN_001: Messages = {
    heading: 'Manual testing to automatic testing',
    lede:
      'A formal training programme that upskills manual testers at Bands 3 to 7 into automatic testers. You continue in your current band and UK GDaD PCF role.',
    tracksCta: 'Find your track',
    startCta: 'Read the programme',
    contentsHeading: 'Contents',
    contents: [
      ['tracks', 'Tracks'],
      ['curriculum', 'Curriculum'],
      ['mentor', 'Mentor'],
      ['manager', 'Line manager'],
      ['spec', 'Programme specification'],
      ['modules', 'Modules'],
      ['gates', 'Gates'],
      ['calibration-guide', 'Calibration guide'],
      ['instruments', 'Self-assessment instruments'],
      ['planning', 'Planning pack'],
      ['reading-list', 'Reading list'],
      ['practice-repository', 'Practice repository'],
      ['plan', 'Plan'],
      ['tasks', 'Tasks'],
      ['about', 'About']
    ]
  };

  const MESSAGES: Record<Locale, Messages> = { 'en-001': EN_001 };
  const m = $derived(MESSAGES[data.locale as Locale]);
</script>

<div class="page-intro">
  <h1>{m.heading}</h1>
  <p class="page-lede">{m.lede}</p>
  <p class="page-actions">
    <a class="button" href={data.docs.tracks.href}>{m.tracksCta}</a>
    <a class="button" href={data.docs.spec.href}>{m.startCta}</a>
  </p>
</div>

<section class="section" aria-labelledby="contents">
  <h2 id="contents">{m.contentsHeading}</h2>
  <ul class="home-contents">
    {#each m.contents as [slug, label] (slug)}
      <li><a href={data.docs[slug].href}>{label}</a></li>
    {/each}
  </ul>
</section>
