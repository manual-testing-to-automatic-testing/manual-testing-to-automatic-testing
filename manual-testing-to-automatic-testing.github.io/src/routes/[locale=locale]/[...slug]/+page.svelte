<script lang="ts">
  import Breadcrumbs from '#lib/components/Breadcrumbs.svelte';
  import SelfAssessment from '#lib/components/SelfAssessment.svelte';
  import { chromeFor } from '#lib/i18n/chrome.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { data } = $props();
  const chrome = $derived(chromeFor(data.locale as Locale));

  // Single column, no sidebars: the document's own h1 (rendered from its
  // Markdown) comes first, then the contents list, then the rest.
  const split = $derived.by(() => {
    if (!data.html) return { head: '', body: '' };
    const end = data.html.indexOf('</h1>');
    return end === -1
      ? { head: '', body: data.html }
      : { head: data.html.slice(0, end + 5), body: data.html.slice(end + 5) };
  });
</script>

<svelte:head>
  {#if data.redirect}
    <meta http-equiv="refresh" content="0; url={data.redirect}" />
    <link rel="canonical" href={data.redirect} />
    <meta name="robots" content="noindex" />
  {/if}
</svelte:head>

{#if data.redirect}
  <h1>Moved</h1>
  <p>This page has moved to <a href={data.redirect}>{data.redirect}</a>.</p>
{:else}
<Breadcrumbs crumbs={data.crumbs ?? []} current={data.heading} label={chrome.breadcrumbLabel} />

<article class="doc prose">
  {@html split.head}
  {#if (data.headings?.length ?? 0) > 2}
    <nav class="doc-contents" aria-label={chrome.doc.contents}>
      <h2 class="doc-contents-heading">{chrome.doc.contents}</h2>
      <ul>
        {#each data.headings ?? [] as heading (heading.id)}
          <li><a href="#{heading.id}">{heading.text}</a></li>
        {/each}
      </ul>
    </nav>
  {/if}
  {@html split.body}
  {#if data.assessment}
    <section class="section" aria-labelledby="self-assessment">
      <h2 id="self-assessment">Self-assessment</h2>
      <p>
        The capability self-assessment for this track, which every gate repeats: {data.assessment.track.counts.total} items,
        {data.assessment.track.counts.A} in Part A, {data.assessment.track.counts.B} in Part B, and
        {data.assessment.track.counts.C} in Part C. Part D, the automation practical, is assessed at the gate.
      </p>
      <ol>
        <li>Before the gate, rate yourself on every item and write evidence. Rate what you do regularly.</li>
        <li>Your line manager rates you separately, in their own browser or on the exported file.</li>
        <li>Meet, agree each rating using the evidence, and record the agreed rating. Only agreed ratings count.</li>
        <li>Export the TSV for your gate review. Your mentor or training lead can also score it with <code>scripts/capability_index.py</code>.</li>
      </ol>
      <p>
        Read the <a href={data.assessment.calibration}>calibration guide</a> first, and see the
        <a href={data.assessment.instruments}>instruments</a> for the scoring rules. Your answers stay in this browser.
      </p>
    </section>
    <SelfAssessment
      track={data.assessment.track.id}
      file={data.assessment.file}
      items={data.assessment.items}
      blankHref={data.assessment.blank}
    />
  {/if}
  <p class="doc-source"><a href={data.source}>{chrome.doc.viewSource}</a> <code>{data.path}</code></p>
</article>
{/if}
