<script lang="ts">
  import { Timeline } from "@svelteuidev/core";
  let currentYear = new Date().getFullYear();
  export let years: number[] = [],
    active = 0;
  $: activeDot = active === 6 ? 0 : active;
</script>

<div class="absoluted fixed right-6 top-12 hidden md:block">
  <Timeline
    active={activeDot}
    lineWidth={4}
    bulletSize={20}
    on:click={() => alert("cliked")}
    on:change={() => alert("cliked")}
  >
    {#each years as year}
      <Timeline.Item
        title={currentYear - year + ""}
        on:click={() => alert("clicked")}
        on:change={() => alert("cliked")}>{year}</Timeline.Item
      >
    {/each}
  </Timeline>
</div>
