<script lang="ts">
  import ScrollRegion from '#lib/components/ScrollRegion.svelte';
  import { Card } from '@lilydesignsystem/svelte-headless';
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
    trackCol: string;
    bandCol: string;
    roleCol: string;
    guideCol: string;
    assessCol: string;
    guide: string;
    assess: string;
    participantsHeading: string;
    gatesHeading: string;
    organisersHeading: string;
    practiceHeading: string;
  };

  const EN_001: Messages = {
    heading: 'Manual testing to automatic testing',
    lede:
      'A formal, gated training programme that upskills manual testers at Bands 3 to 7 into automatic testers, over 24 training days of 7.5 hours each, one a week, while each person stays in the band and UK GDaD PCF role they already hold.',
    start: 'Start with the programme specification: it is the single source of truth.',
    startCta: 'Read the programme',
    assessCta: 'Open the self-assessment',
    tracksHeading: 'Tracks',
    tracksIntro: 'Find the track for your band and assigned PCF role.',
    trackCol: 'Track',
    bandCol: 'Band',
    roleCol: 'Reference role level',
    guideCol: 'Track guide',
    assessCol: 'Self-assessment',
    guide: 'Guide',
    assess: 'Assess',
    participantsHeading: 'For participants',
    gatesHeading: 'For gates',
    organisersHeading: 'For organisers',
    practiceHeading: 'Practice'
  };

  const MESSAGES: Record<Locale, Messages> = { 'en-001': EN_001 };
  const m = $derived(MESSAGES[data.locale as Locale]);

  const groups = $derived([
    { heading: m.participantsHeading, slugs: ['materials/tracks', 'materials/modules', 'materials/reading-list', 'instruments'] },
    { heading: m.gatesHeading, slugs: ['materials/gates', 'materials/gates/calibration-guide', 'materials/gates/part-d-practicals', 'materials/gates/gate-review-form'] },
    { heading: m.organisersHeading, slugs: ['plan', 'tasks', 'materials/planning', 'materials/planning/sponsor-brief', 'materials/planning/hr-briefing', 'materials/planning/decision-log'] },
    { heading: m.practiceHeading, slugs: ['practice-repo', 'practice-repo/fhir-sandbox'] }
  ]);
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
  <ScrollRegion labelledby="tracks">
    <table>
      <thead>
        <tr>
          <th scope="col">{m.trackCol}</th>
          <th scope="col">{m.bandCol}</th>
          <th scope="col">{m.roleCol}</th>
          <th scope="col">{m.guideCol}</th>
          <th scope="col">{m.assessCol}</th>
        </tr>
      </thead>
      <tbody>
        {#each data.tracks as track (track.id)}
          <tr>
            <th scope="row">{track.id}</th>
            <td>{track.band}</td>
            <td>{track.roleLevel}</td>
            <td><a href={track.guide}>{m.guide}<span class="visually-hidden"> {track.id}</span></a></td>
            <td><a href={track.assessment}>{m.assess}<span class="visually-hidden"> {track.id}</span></a></td>
          </tr>
        {/each}
      </tbody>
    </table>
  </ScrollRegion>
</section>

{#each groups as group (group.heading)}
  <section class="section" aria-label={group.heading}>
    <h2>{group.heading}</h2>
    <div class="card-grid">
      {#each group.slugs as slug (slug)}
        <Card class="doc-card">
          <h3><a href={data.docs[slug].href}>{data.docs[slug].title}</a></h3>
          {#if data.docs[slug].description}
            <p>{data.docs[slug].description}</p>
          {/if}
        </Card>
      {/each}
    </div>
  </section>
{/each}
