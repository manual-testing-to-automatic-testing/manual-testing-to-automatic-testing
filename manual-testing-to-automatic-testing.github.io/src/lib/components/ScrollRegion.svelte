<script lang="ts">
  import type { Snippet } from 'svelte';

  let { labelledby, children }: { labelledby: string; children: Snippet } = $props();
</script>

<!-- A wide table scrolls inside this region. It must be focusable, so that
     keyboard users can scroll it (WCAG 2.1.1; axe rule
     scrollable-region-focusable), and it is a labelled region so screen
     readers announce what it holds. -->
<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div class="table-scroll" tabindex="0" role="region" aria-labelledby={labelledby}>
  {@render children()}
</div>
