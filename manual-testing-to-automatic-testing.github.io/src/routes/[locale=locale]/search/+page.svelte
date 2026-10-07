<script lang="ts">
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';
  import Breadcrumbs from '#lib/components/Breadcrumbs.svelte';

  let { data } = $props();

  type Entry = { title: string; href: string; description: string; text: string };
  let index: Entry[] = $state([]);
  let loaded = $state(false);

  // The search picker navigates to /<locale>/search/?<query>: the whole query
  // string is the search text. The page is prerendered, so it reads the query
  // in the browser, on load and after each new search from this page.
  let query = $state('');
  function readQuery(): void {
    try {
      query = decodeURIComponent(location.search.replace(/^\?/, '').replace(/\+/g, ' ')).trim();
    } catch {
      query = location.search.replace(/^\?/, '').trim();
    }
  }
  afterNavigate(readQuery);

  onMount(async () => {
    readQuery();
    index = await (await fetch(data.index)).json();
    loaded = true;
  });

  const results = $derived.by(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return index
      .map((doc) => {
        const title = doc.title.toLowerCase();
        const text = doc.text.toLowerCase();
        if (!words.every((w) => title.includes(w) || text.includes(w))) return undefined;
        const score = words.reduce((s, w) => s + (title.includes(w) ? 10 : 0) + text.split(w).length - 1, 0);
        const at = text.indexOf(words[0]);
        const snippet = at >= 0 ? doc.text.slice(Math.max(0, at - 80), at + 160) : doc.description;
        return { doc, score, snippet };
      })
      .filter((r) => r !== undefined)
      .sort((a, b) => b.score - a.score);
  });
</script>

<Breadcrumbs crumbs={[{ href: data.home, label: 'Home' }]} current="Search" label="Breadcrumb" />

<div class="page-intro">
  <h1>Search</h1>
  {#if query}
    <p class="page-lede">Results for “{query}”</p>
  {:else}
    <p class="page-lede">Use the search button in the header to search every document in the programme.</p>
  {/if}
</div>

<section class="section" aria-live="polite">
  {#if query && loaded}
    <p>{results.length} {results.length === 1 ? 'document' : 'documents'} found.</p>
    <ol class="search-results">
      {#each results as result (result.doc.href)}
        <li>
          <h2><a href={result.doc.href}>{result.doc.title}</a></h2>
          <p>…{result.snippet}…</p>
        </li>
      {/each}
    </ol>
  {:else if query}
    <p>Searching…</p>
  {/if}
</section>
