<script lang="ts">
  import type { Locale } from '#lib/i18n/locales.js';

  let { data } = $props();

  type Messages = {
    heading: string;
    lede: string;
    tracksCta: string;
    startCta: string;
  };

  const EN_001: Messages = {
    heading: 'Manual testing to automatic testing',
    lede:
      'A formal, gated training programme that upskills manual testers at Bands 3 to 7 into automatic testers. Each person continues in their current band and UK GDaD PCF role.',
    tracksCta: 'Find your track',
    startCta: 'Read the programme'
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
