<script lang="ts">
  import ScrollRegion from '#lib/components/ScrollRegion.svelte';
  import Breadcrumbs from '#lib/components/Breadcrumbs.svelte';

  let { data } = $props();
</script>

<Breadcrumbs crumbs={[{ href: data.home, label: 'Home' }]} current="Self-assessment" label="Breadcrumb" />

<div class="page-intro">
  <h1>Self-assessment</h1>
  <p class="page-lede">
    The capability self-assessment that every gate repeats. Choose the track for your band and assigned PCF role.
  </p>
</div>

<section class="section prose" aria-labelledby="how">
  <h2 id="how">How to use it</h2>
  <ol>
    <li>In the week before the gate, rate yourself on every item and write evidence. Rate what you do regularly.</li>
    <li>Your line manager rates you separately, in their own browser or on the exported file.</li>
    <li>Meet, agree each rating using the evidence, and record the agreed rating. Only agreed ratings count.</li>
    <li>Export the TSV for your gate review. Your mentor or training lead can also score it with <code>scripts/capability_index.py</code>.</li>
  </ol>
  <p>Read the <a href={data.calibration}>calibration guide</a> first, and see the <a href={data.instruments}>instruments</a> for the scoring rules.</p>
</section>

<section class="section" aria-labelledby="tracks">
  <h2 id="tracks">Tracks</h2>
  <ScrollRegion labelledby="tracks">
    <table>
      <thead>
        <tr>
          <th scope="col">Track</th>
          <th scope="col">Band</th>
          <th scope="col">Reference role level</th>
          <th scope="col">Items (A + B + C)</th>
          <th scope="col">Guide</th>
          <th scope="col">Blank TSV</th>
        </tr>
      </thead>
      <tbody>
        {#each data.tracks as track (track.id)}
          <tr>
            <th scope="row"><a href={track.href}>{track.id}</a></th>
            <td>{track.band}</td>
            <td>{track.roleLevel}</td>
            <td>{track.counts.A} + {track.counts.B} + {track.counts.C} = {track.counts.total}</td>
            <td><a href={track.guide}>Guide<span class="visually-hidden"> for {track.id}</span></a></td>
            <td><a href={track.blank} download>{track.file}</a></td>
          </tr>
        {/each}
      </tbody>
    </table>
  </ScrollRegion>
</section>
