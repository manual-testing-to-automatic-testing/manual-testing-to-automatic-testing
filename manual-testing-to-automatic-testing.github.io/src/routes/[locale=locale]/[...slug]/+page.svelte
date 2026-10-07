<script lang="ts">
  import Breadcrumbs from '#lib/components/Breadcrumbs.svelte';
  import { chromeFor } from '#lib/i18n/chrome.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { data } = $props();
  const chrome = $derived(chromeFor(data.locale as Locale));
  // The document's own h1 is rendered from its Markdown.
</script>

<Breadcrumbs crumbs={data.crumbs} current={data.heading} label={chrome.breadcrumbLabel} />

<div class="doc-layout">
  {#if data.headings.length > 2}
    <nav class="doc-contents" aria-label={chrome.doc.contents}>
      <h2 class="doc-contents-heading">{chrome.doc.contents}</h2>
      <ul>
        {#each data.headings as heading (heading.id)}
          <li><a href="#{heading.id}">{heading.text}</a></li>
        {/each}
      </ul>
    </nav>
  {/if}
  <article class="doc prose">
    {@html data.html}
    <p class="doc-source"><a href={data.source}>{chrome.doc.viewSource}</a> <code>{data.path}</code></p>
  </article>
</div>
