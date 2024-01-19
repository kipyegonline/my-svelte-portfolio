<script lang="ts">
  import { Tabs, Divider, Chip } from "@svelteuidev/core";
  import MainCard from "../components/card/card.svelte";
  import Counter from "./Counter.svelte";
  import welcome from "$lib/images/svelte-welcome.webp";
  import welcome_fallback from "$lib/images/svelte-welcome.png";
  // import Icon from "@iconify/svelte";
  //<Icon icon="mdi-light:home" />
  import { Table, Grid } from "radix-icons-svelte";
  import { portfolio } from "../store/store";
  import Timeline from "../components/Timeline/Timeline.svelte";
  import Framework from "../components/frameworks/framework.svelte";
  let currentYear = new Date().getFullYear();
  let years = [...Array(currentYear - 2018)].map((y, i) => i);
  let frameworks = ["react", "svelte", "angular", "laravel"].map((item) => ({
    label: item,
    value: item,
  }));
  let active = 0;
  let logoClicked = false,
    clickedStack = "";

  const handleTabChange = (e: any) => {
    console.log(e);
    if (logoClicked) {
      logoClicked = false;
      clickedStack = "";
    }
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
  let checked = frameworks[0];

  const hanldeLogoClick = (text: string) => {
    clickedStack = text;
    if (logoClicked) {
      projects = $portfolio;
    } else {
      logoClicked = true;
    }
    let selected = projects.filter((project) => {
      let pr = project.frameworks.map((pro) => pro.toLowerCase());
      return pr.includes(text);
    });
    projects = selected;
  };
</script>

<svelte:head>
  <title>Home| Resume Vince {new Date().getFullYear()}</title>
  <meta
    name="description"
    content="Resume Portfolio site for Vincent Kipyegon Koech, Software Developer React Angular Svelte Laravel"
  />
</svelte:head>

<section class="border-green-400 border w-full">
  <h1>My Portfolio</h1>
  <!-- <Table />  <Grid />-->

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
        <div class="fle gap-4 justify-center hidden">
          {#each frameworks as frame}
            <Chip
              variant="filled"
              checked={checked === frame}
              on:on:click={() => (checked = frame)}>{frame.value}</Chip
            >
          {/each}
          {checked.value}
        </div>
        <section>
          <Framework onClick={hanldeLogoClick} />
          {#if clickedStack}
            <div class="py-2 text-2xl">
              <h3>
                {projects.length} projects in
                <span class="capitalize">{clickedStack}</span>
              </h3>
            </div>
          {/if}

          {#if projects.length > 0}
            <MainCard {projects} currentItem={cyear} />
          {:else}
            <div class="p-4 text-2xl">
              <p>
                There are no projects in <span class="capitalize"
                  >{clickedStack}</span
                >
              </p>
            </div>
          {/if}
        </section>
      </Tabs.Tab>
    {/each}

    <Tabs.Tab label={"All"}>
      {#if active === 6}
        <section class="relative">
          <Framework onClick={hanldeLogoClick} />
          {#if clickedStack}
            <div class="py-2">
              <h3>
                {projects.length} projects in
                <span class="capitalize">{clickedStack}</span>
              </h3>
            </div>
          {/if}
          {#if projects.length > 0}
            <MainCard {projects} currentItem={cyear} />
          {:else}
            <div class="p-4">
              <p>
                There are no projects <span class="capitalize"
                  >{clickedStack}</span
                >
              </p>
            </div>
          {/if}
        </section>
      {/if}</Tabs.Tab
    >
  </Tabs>
  Active year is {cyear} and {active}
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
