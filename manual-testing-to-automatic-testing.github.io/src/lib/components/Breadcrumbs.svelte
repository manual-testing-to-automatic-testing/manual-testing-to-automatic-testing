<script lang="ts">
  import { BreadcrumbNav, BreadcrumbList, BreadcrumbListItem, BreadcrumbLink } from '@lilydesignsystem/svelte-headless';

  let {
    crumbs,
    current,
    label
  }: { crumbs: { href: string; label: string }[]; current: string; label: string } = $props();
</script>

<BreadcrumbNav {label} class="breadcrumbs">
  <BreadcrumbList>
    {#each crumbs as crumb (crumb.href)}
      <BreadcrumbListItem>
        <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
      </BreadcrumbListItem>
    {/each}
    <BreadcrumbListItem current>
      <span aria-current="page">{current}</span>
    </BreadcrumbListItem>
  </BreadcrumbList>
</BreadcrumbNav>
