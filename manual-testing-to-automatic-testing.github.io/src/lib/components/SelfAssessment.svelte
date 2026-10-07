<script lang="ts">
  import ScrollRegion from '#lib/components/ScrollRegion.svelte';
  import { onMount } from 'svelte';
  import {
    Fieldset,
    Select,
    TextAreaInput,
    Meter,
    InformationCallout,
    WarningCallout
  } from '@lilydesignsystem/svelte-headless';
  import {
    EXPORT_COLUMNS,
    GATE_CONDITIONS,
    GATE_THRESHOLDS,
    SKILL_OPTIONS,
    STATUS_OPTIONS,
    capabilityIndex,
    factorLevels,
    kindOf,
    parseTsv,
    statusOf,
    tsvCell,
    type CapabilityIndex,
    type Item,
    type Part
  } from '#lib/capability.js';

  type TrackItem = Item & { track: string; band: string; role: string; role_level: string };
  type Entry = { self: string; manager: string; agreed: string; evidence: string; ilp: string; expected: string };

  let {
    track,
    file,
    items,
    blankHref
  }: { track: string; file: string; items: TrackItem[]; blankHref: string } = $props();

  const STORAGE_KEY = $derived(`manual-testing-to-automatic-testing:self-assessment:${track}`);
  const emptyEntry = (): Entry => ({ self: '', manager: '', agreed: '', evidence: '', ilp: '', expected: '' });

  type Who = 'self' | 'manager' | 'agreed';
  const WHO: [Who, string][] = [['self', 'Self'], ['manager', 'Manager'], ['agreed', 'Agreed']];

  // Every item has an entry from the start, so the template never writes state.
  const blank = (): Record<string, Entry> => Object.fromEntries(items.map((item) => [item.item_id, emptyEntry()]));
  let entries: Record<string, Entry> = $state(blank());
  let gate = $state('0');
  let loaded = $state(false);
  let message = $state('');

  onMount(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null');
      if (saved && typeof saved === 'object') {
        const merged = blank();
        for (const [id, value] of Object.entries(saved.entries ?? {})) {
          if (merged[id]) merged[id] = { ...emptyEntry(), ...(value as Partial<Entry>) };
        }
        entries = merged;
        gate = saved.gate ?? '0';
      }
    } catch {
      // Storage can be blocked or hold something unreadable; start empty.
    }
    loaded = true;
  });

  $effect(() => {
    const snapshot = JSON.stringify({ entries, gate });
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, snapshot);
    } catch {
      // Storage can be blocked; answers then last only for this visit.
    }
  });

  /** An item's expected level number, including a Band 3 level agreed at Gate 0. */
  function expectedOf(item: Item): string | undefined {
    return item.expected_level_number || entries[item.item_id]?.expected || undefined;
  }
  const needsExpected = (item: Item) => kindOf(item) === 'factor' && !item.expected_level_number;

  const rated = (who: 'self' | 'manager' | 'agreed'): CapabilityIndex =>
    capabilityIndex(items, (item) => entries[item.item_id]?.[who] ?? '', expectedOf);

  const indexes = $derived({ self: rated('self'), manager: rated('manager'), agreed: rated('agreed') });
  const threshold = $derived(GATE_THRESHOLDS[Number(gate)]);
  const belowThreshold = $derived(
    threshold === undefined
      ? []
      : (['A', 'B', 'C'] as Part[]).filter((p) => (indexes.agreed[p].percent ?? 0) < threshold)
  );
  const skillsFarBelow = $derived(
    items.filter((i) => i.part === 'C' && statusOf(i, entries[i.item_id]?.agreed ?? '', expectedOf(i)) === 'Not yet')
  );

  /** Items where self and manager differ by more than one level: discuss these first. */
  const STATUS_RANK: Record<string, number> = { 'Not yet': 0, Partly: 1, Meets: 2 };
  const calibrate = $derived(
    items.filter((item) => {
      const e = entries[item.item_id];
      if (!e?.self || !e?.manager) return false;
      const rank = (v: string) => (kindOf(item) === 'status' ? STATUS_RANK[v] : Number(v));
      return Math.abs(rank(e.self) - rank(e.manager)) > 1;
    })
  );

  function optionsFor(item: Item): { value: string; label: string }[] {
    const kind = kindOf(item);
    if (kind === 'status') return STATUS_OPTIONS.map((s) => ({ value: s, label: s }));
    if (kind === 'skill') return SKILL_OPTIONS.map((o) => ({ ...o }));
    return factorLevels(item).map((o) => ({ value: o.value, label: `Level ${o.value}` }));
  }

  const pct = (v: number | undefined) => (v === undefined ? '—' : `${Math.round(v)}%`);
  const PARTS: { id: Part; heading: string; intro: string }[] = [
    { id: 'A', heading: 'Part A: band', intro: 'The 5 band outline dimensions, and the 16 job evaluation factors rated as the level you work at regularly.' },
    { id: 'B', heading: 'Part B: PCF role aspects', intro: 'Every PCF role statement (B1), role level statement (B2), and reference responsibility (B3).' },
    { id: 'C', heading: 'Part C: skills', intro: 'Every skill in the reference role level, rated 0 to 4.' }
  ];

  function exportTsv(): void {
    const rows = items.map((item) => {
      const e = entries[item.item_id] ?? emptyEntry();
      const expected = expectedOf(item) ?? '';
      const record: Record<string, string> = {
        ...item,
        expected_level: needsExpected(item) ? expected : item.expected_level,
        expected_level_number: needsExpected(item) ? expected : item.expected_level_number,
        self_rating: e.self,
        manager_rating: e.manager,
        agreed_rating: e.agreed,
        status: statusOf(item, e.agreed, expected) ?? '',
        evidence: e.evidence,
        ilp_action: e.ilp
      };
      return EXPORT_COLUMNS.map((c) => tsvCell(record[c] ?? '')).join('\t');
    });
    const text = [EXPORT_COLUMNS.join('\t'), ...rows].join('\n') + '\n';
    const url = URL.createObjectURL(new Blob([text], { type: 'text/tab-separated-values' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = `${file}--gate-${gate}.tsv`;
    a.click();
    URL.revokeObjectURL(url);
    message = `Downloaded ${a.download}. It is a personal record: keep it in your organisation's HR or learning system.`;
  }

  async function importTsv(event: Event): Promise<void> {
    const input = event.currentTarget as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const rows = parseTsv(await file.text());
    const wrongTrack = rows.find((r) => r.track && r.track !== track);
    if (wrongTrack) {
      message = `That file is for track ${wrongTrack.track}, not ${track}. Nothing was imported.`;
      input.value = '';
      return;
    }
    let count = 0;
    for (const row of rows) {
      const item = items.find((i) => i.item_id === row.item_id);
      if (!item) continue;
      entries[item.item_id] = {
        self: row.self_rating ?? '',
        manager: row.manager_rating ?? '',
        agreed: row.agreed_rating ?? '',
        evidence: row.evidence ?? '',
        ilp: row.ilp_action ?? '',
        expected: needsExpected(item) ? (row.expected_level_number ?? '') : ''
      };
      count++;
    }
    message = `Imported ${count} items from ${file.name}.`;
    input.value = '';
  }

  function clearAll(): void {
    if (!confirm('Clear every rating and note for this track in this browser? Export first if you need a copy.')) return;
    entries = blank();
    message = 'Cleared.';
  }
</script>

{#snippet rater(item: TrackItem, who: Who, whoLabel: string)}
  <div class="rating">
    <label for="{item.item_id}-{who}">{whoLabel}</label>
    <Select id="{item.item_id}-{who}" label="{whoLabel} rating for {item.item_id} {item.dimension}" bind:value={entries[item.item_id][who]}>
      <option value="">Not rated</option>
      {#each optionsFor(item) as o (o.value)}<option value={o.value}>{o.label}</option>{/each}
    </Select>
  </div>
{/snippet}

<InformationCallout label="Your answers stay in this browser">
  <p>
    Answers are saved only in this browser's local storage, and are never sent anywhere. Export them as a TSV file for
    your gate review. A completed self-assessment is a personal record: keep it in your organisation's HR or learning
    system, not in a shared folder or a repository.
  </p>
</InformationCallout>

<section class="section assessment-summary" aria-labelledby="summary">
  <h2 id="summary">Capability index</h2>
  <div class="assessment-controls">
    <label for="gate" class="assessment-controls-label">Gate</label>
    <Select label="Gate" bind:value={gate} id="gate">
      {#each [0, 1, 2, 3, 4, 5] as g (g)}
        <option value={String(g)}>Gate {g}</option>
      {/each}
    </Select>
  </div>

  <ScrollRegion labelledby="summary">
    <table class="index-table">
      <thead>
        <tr>
          <th scope="col">Rating</th>
          <th scope="col">Part A</th>
          <th scope="col">Part B</th>
          <th scope="col">Part C</th>
          <th scope="col">Overall</th>
        </tr>
      </thead>
      <tbody>
        {#each [['Self', indexes.self], ['Manager', indexes.manager], ['Agreed (counts)', indexes.agreed]] as [label, index] (label)}
          {@const ix = index as CapabilityIndex}
          <tr>
            <th scope="row">{label}</th>
            {#each ['A', 'B', 'C'] as part (part)}
              <td>{pct(ix[part as Part].percent)} <span class="muted">({ix[part as Part].rated}/{ix[part as Part].total})</span></td>
            {/each}
            <td><strong>{pct(ix.overall)}</strong></td>
          </tr>
        {/each}
      </tbody>
    </table>
  </ScrollRegion>

  {#if indexes.agreed.overall !== undefined}
    <p class="meter-row">
      <Meter value={Math.round(indexes.agreed.overall)} min={0} max={100} low={60} high={90} optimum={100} label="Agreed overall capability index" />
      <span>{pct(indexes.agreed.overall)} agreed overall</span>
    </p>
  {/if}

  <div aria-live="polite">
    {#if threshold === undefined}
      <p>Gate 0 is the baseline, with no threshold. {GATE_CONDITIONS[0]}</p>
    {:else if indexes.agreed.A.rated + indexes.agreed.B.rated + indexes.agreed.C.rated === 0}
      <p>Gate {gate} needs each of Parts A, B, and C at {threshold}% or more, using agreed ratings. No agreed ratings yet.</p>
    {:else if belowThreshold.length === 0}
      <p class="result-pass">Gate {gate} threshold met: each of Parts A, B, and C is at {threshold}% or more.</p>
    {:else}
      <WarningCallout label="Below threshold">
        <p>Gate {gate} needs each of Parts A, B, and C at {threshold}% or more. Below threshold: Part {belowThreshold.join(', Part ')}.</p>
      </WarningCallout>
    {/if}
    {#if Number(gate) >= 4 && skillsFarBelow.length > 0}
      <p>Skills more than one level below expected: {skillsFarBelow.map((i) => i.dimension.replace('Skill: ', '')).join(', ')}.</p>
    {/if}
    {#if threshold !== undefined}
      <p class="muted">Also check by hand: {GATE_CONDITIONS[Number(gate)]}</p>
    {/if}
  </div>

  {#if calibrate.length > 0}
    <h3>Discuss first</h3>
    <p>Self and manager ratings differ by more than one level on these items. Agree them using the evidence.</p>
    <ul>
      {#each calibrate as item (item.item_id)}
        <li><a href="#item-{item.item_id}">{item.item_id} {item.dimension}</a></li>
      {/each}
    </ul>
  {/if}

  <div class="assessment-actions">
    <button type="button" class="button" onclick={exportTsv}>Export TSV</button>
    <label class="button file-button">
      Import TSV
      <input type="file" accept=".tsv,text/tab-separated-values" onchange={importTsv} class="visually-hidden" />
    </label>
    <a class="button" href={blankHref} download>Blank instrument</a>
    <button type="button" class="button button-danger" onclick={clearAll}>Clear</button>
  </div>
  <p aria-live="polite" class="assessment-message">{message}</p>
</section>

{#each PARTS as part (part.id)}
  <section class="section" aria-labelledby="part-{part.id}">
    <h2 id="part-{part.id}">{part.heading}</h2>
    <p>{part.intro}</p>
    {#each items.filter((i) => i.part === part.id) as item (item.item_id)}
      {@const status = statusOf(item, entries[item.item_id].agreed, expectedOf(item))}
      <div class="assessment-item" id="item-{item.item_id}">
        <Fieldset legend="{item.item_id} {item.dimension}">
          <p class="assessment-statement">{item.statement}</p>
          {#if kindOf(item) === 'status'}
            {#if item.part === 'A'}
              <p class="muted">Rate against: {item.expected_level_description}</p>
            {/if}
          {:else}
            <details>
              <summary>Expected: {expectedOf(item) ? (kindOf(item) === 'skill' ? item.expected_level : `level ${expectedOf(item)}`) : 'agree at Gate 0'}</summary>
              {#if kindOf(item) === 'factor'}
                <ul>
                  {#each factorLevels(item) as level (level.value)}
                    <li>{level.label}</li>
                  {/each}
                </ul>
              {:else}
                <p>{item.expected_level_description}</p>
                {#if item.next_level_description}
                  <p class="muted">Next level, {item.next_level_description}</p>
                {/if}
              {/if}
            </details>
          {/if}

          <div class="rating-row">
            {#if needsExpected(item)}
              <div class="rating">
                <label for="{item.item_id}-expected">Expected (Gate 0)</label>
                <Select id="{item.item_id}-expected" label="Expected (Gate 0) for {item.item_id} {item.dimension}" bind:value={entries[item.item_id].expected}>
                  <option value="">Not agreed</option>
                  {#each optionsFor(item) as o (o.value)}<option value={o.value}>{o.label}</option>{/each}
                </Select>
              </div>
            {/if}
            {#each WHO as [who, whoLabel] (who)}
              {@render rater(item, who, whoLabel)}
            {/each}
            <p class="rating-status" aria-live="polite">
              {#if status}<span class="status status-{status.toLowerCase().replace(' ', '-')}">{status}</span>{/if}
            </p>
          </div>

          <div class="note-row">
            <div>
              <label for="{item.item_id}-evidence">Evidence</label>
              <TextAreaInput id="{item.item_id}-evidence" label="Evidence for {item.item_id}" rows={2} bind:value={entries[item.item_id].evidence} />
            </div>
            <div>
              <label for="{item.item_id}-ilp">Development action</label>
              <TextAreaInput id="{item.item_id}-ilp" label="Development action for {item.item_id}" rows={2} bind:value={entries[item.item_id].ilp} />
            </div>
          </div>
        </Fieldset>
      </div>
    {/each}
  </section>
{/each}
