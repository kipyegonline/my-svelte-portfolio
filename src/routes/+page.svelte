<script lang="ts">
  import { Tabs, Divider } from "@svelteuidev/core";
  import MainCard from "../components/card/card.svelte";
  import Counter from "./Counter.svelte";
  import welcome from "$lib/images/svelte-welcome.webp";
  import welcome_fallback from "$lib/images/svelte-welcome.png";
  // import Icon from "@iconify/svelte";
  //<Icon icon="mdi-light:home" />
  import { portfolio } from "../store/store";
  let currentYear = new Date().getFullYear();
  let years = [...Array(currentYear - 2018)].map((y, i) => i);
  let active = 0;
  const handleTabChange = (e: any) => {
    console.log(e);
    const {
      detail: { index },
    } = e;
    active = index;
  };
  $: cyear = currentYear - active;
  $: projects =
    cyear === 2018
      ? $portfolio
      : $portfolio.filter((port) => port.year === cyear);
</script>

<svelte:head>
  <title>Home| Resume Vince {new Date().getFullYear()}</title>
  <meta name="description" content="Resume for Vincent Kipyegon Koech" />
</svelte:head>

<section class="border-red-400 border">
  <h1>The Paras {$portfolio.length}</h1>
  <Tabs
    bind:active
    on:change={handleTabChange}
    grow
    position="apart"
    class="border border-red-400 w-full py-2"
    variant="pills"
  >
    {#each years as year}
      <Tabs.Tab label={currentYear - year}>
        <MainCard {projects} />
      </Tabs.Tab>
    {/each}
    <Tabs.Tab label={"all"}>
      {#if active === 6}
        <MainCard {projects} />
      {/if}</Tabs.Tab
    >
  </Tabs>
  Active year is {cyear}
  active items are {cyear === 2018
    ? $portfolio.length
    : $portfolio.filter((port) => port.year === cyear).length}
  active projects are {projects.length}
  <Divider />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    width: 100%;
  }

  .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
