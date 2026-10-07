<script lang="ts">
  import Breadcrumbs from '#lib/components/Breadcrumbs.svelte';
  import { chromeFor } from '#lib/i18n/chrome.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { data } = $props();
  const chrome = $derived(chromeFor(data.locale as Locale));

  // Single column, no sidebars: the document's own h1 (rendered from its
  // Markdown) comes first, then the contents list, then the rest.
  const split = $derived.by(() => {
    const end = data.html.indexOf('</h1>');
    return end === -1
      ? { head: '', body: data.html }
      : { head: data.html.slice(0, end + 5), body: data.html.slice(end + 5) };
  });
</script>

<Breadcrumbs crumbs={data.crumbs} current={data.heading} label={chrome.breadcrumbLabel} />

<article class="doc prose">
  {@html split.head}
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
  {@html split.body}
  <p class="doc-source"><a href={data.source}>{chrome.doc.viewSource}</a> <code>{data.path}</code></p>
</article>
