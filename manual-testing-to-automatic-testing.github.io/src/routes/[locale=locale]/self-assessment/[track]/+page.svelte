<script lang="ts">
  import Breadcrumbs from '#lib/components/Breadcrumbs.svelte';
  import SelfAssessment from '#lib/components/SelfAssessment.svelte';

  let { data } = $props();
</script>

<Breadcrumbs crumbs={data.crumbs} current={data.track.id} label="Breadcrumb" />

<div class="page-intro">
  <h1>{data.track.id} self-assessment</h1>
  <p class="page-lede">
    Band {data.track.band}, {data.track.roleLevel} ({data.track.role}). {data.track.counts.total} items: {data.track.counts.A}
    in Part A, {data.track.counts.B} in Part B, and {data.track.counts.C} in Part C. Part D, the automation practical, is
    assessed at the gate.
  </p>
  <p><a href={data.guide}>Read the {data.track.id} track guide</a></p>
</div>

<SelfAssessment track={data.track.id} items={data.items} blankHref={data.blank} />
