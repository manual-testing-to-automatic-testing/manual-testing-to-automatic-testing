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
    /** Tile text for documents whose own title or first paragraph reads badly on a tile. */
    tiles: Record<string, { title?: string; description?: string }>;
  };

  const EN_001: Messages = {
    heading: 'Manual testing to automatic testing',
    lede:
      'A formal, gated training programme that upskills manual testers at Bands 3 to 7 into automatic testers, over 220 hours of protected learning time, by default 7.5 hours a week, ending with a Lean Six Sigma Green Belt with a lifetime certification, while each person stays in the band and UK GDaD PCF role they already hold.',
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
    practiceHeading: 'Practice',
    tiles: {
      'materials/tracks': {
        description:
          'Eight tuned tracks, one for each band and assigned PCF role. Find yours: its expected levels, automation target, modules, and capstone.'
      },
      'materials/modules': {
        description:
          'The core modules M0 to M11: session plans, exercises, templates, capstone briefs, and the hour budget that totals 220 hours.'
      },
      instruments: {
        title: 'Self-assessment instruments',
        description:
          'The capability self-assessment for each track, as a TSV file: Part A band, Part B PCF role aspects, and Part C skills, with the scoring rules.'
      },
      'materials/gates': {
        description:
          'What happens at every gate, the thresholds and conditions, what happens if a gate is not met, and how the programme is completed.'
      },
      'materials/gates/gate-review-form': {
        description:
          'One form per person per gate: the capability index by part, the Part D result, thresholds and conditions, the decision, and the ILP update.'
      },
      tasks: {
        description:
          'The work to build, run, evaluate, and maintain the programme, phase by phase, with what is done and what is still open.'
      },
      'practice-repo/fhir-sandbox': {
        description:
          'A small, local FHIR R4 server in plain JavaScript, loaded with synthetic patients and observations, for the M6 API tests. No Docker.'
      },
      'practice-repo/tests/katas': {
        description:
          'Small JavaScript programming exercises with Mocha unit tests, and which set of katas each track does. Run them with npm run test:katas.'
      },
      'practice-repo/spec': {
        title: 'Suite spec template',
        description:
          'The template for each test suite’s spec: what it tests, its selectors and data, and when it passes. Write it before the code.'
      }
    }
  };

  const MESSAGES: Record<Locale, Messages> = { 'en-001': EN_001 };
  const m = $derived(MESSAGES[data.locale as Locale]);

  // Each area holds exactly six tiles (tests/site.spec.ts checks it).
  const groups = $derived([
    {
      heading: m.participantsHeading,
      slugs: [
        'materials/tracks',
        'materials/modules',
        'materials/tracks/r1-role-foundations',
        'materials/modules/m11-lean-six-sigma-green-belt',
        'materials/reading-list',
        'instruments'
      ]
    },
    {
      heading: m.gatesHeading,
      slugs: [
        'materials/gates',
        'materials/gates/calibration-guide',
        'materials/gates/part-d-practicals',
        'materials/gates/gate-review-form',
        'materials/gates/ilp-template',
        'materials/gates/gate-4-panel-guide'
      ]
    },
    {
      heading: m.organisersHeading,
      slugs: [
        'plan',
        'tasks',
        'materials/planning',
        'materials/planning/sponsor-brief',
        'materials/planning/hr-briefing',
        'materials/planning/decision-log'
      ]
    },
    {
      heading: m.practiceHeading,
      slugs: [
        'practice-repo',
        'practice-repo/fhir-sandbox',
        'practice-repo/tests/katas',
        'practice-repo/tests/flaky',
        'practice-repo/spec',
        'practice-repo/CONTRIBUTING'
      ]
    }
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
    <div class="card-grid card-grid-six">
      {#each group.slugs as slug (slug)}
        <Card class="doc-card">
          <h3><a href={data.docs[slug].href}>{m.tiles[slug]?.title ?? data.docs[slug].title}</a></h3>
          {#if m.tiles[slug]?.description ?? data.docs[slug].description}
            <p>{m.tiles[slug]?.description ?? data.docs[slug].description}</p>
          {/if}
        </Card>
      {/each}
    </div>
  </section>
{/each}
