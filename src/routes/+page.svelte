<script lang="ts">
  import { Tabs, Divider, Chip } from "@svelteuidev/core";
  import MainCard from "../components/card/card.svelte";

  // import Icon from "@iconify/svelte";
  //<Icon icon="mdi-light:home" />
  import { Table, Grid } from "radix-icons-svelte";
  import { portfolio } from "../store/store";
  import Timeline from "../components/Timeline/Timeline.svelte";
  import Framework from "../components/frameworks/framework.svelte";
  let currentYear = new Date().getFullYear();
  let defaultYear = 2018;
  let years = [...Array(currentYear - defaultYear)].map((y, i) => i);
  let frameworks = ["react", "svelte", "angular", "laravel"].map((item) => ({
    label: item,
    value: item,
  }));
  let active = -1;

  let logoClicked = false,
    clickedStack = "";
  $: cyear = currentYear - active;
  $: projects =
    active === -1
      ? $portfolio
      : $portfolio.filter((port) => port.year === active);
  let checked = frameworks[0];

  const handleTabChange = (e: any) => {
    clickedStack = "";
    console.log(e.detail);
    const {
      detail: { index, key },
    } = e;
    active = +key;
  };

  const hanldeLogoClick = (text: string) => {
    clickedStack = text;
    if (active === -1) {
      projects = $portfolio;
    } else {
      projects = $portfolio.filter((pro) => pro.year === active);
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
  <div class="py-2 mb-2">
    <h1>My Portfolio</h1>
    <p class="py-1">
      A passionate and flexible software developer building seamless and
      scalable web applications for <b>Production</b>.
    </p>
    <p class="py-0">
      I am proficient in Typescript, Javascript,HTML/CSS, node.js, PHP and
      MySQL.
    </p>
  </div>
  <!-- <Table />  <Grid />-->

  <Tabs
    on:change={handleTabChange}
    grow
    position="apart"
    class="border border-red-400 w-full py-2"
    variant="pills"
    color="red"
  >
    <!--All the projects-->

    <Tabs.Tab label={"All"} tabKey="-1">
      {#if active === -1}
        <section class="relative">
          <Framework onClick={hanldeLogoClick} />
          {#if clickedStack}
            <div class="py-2 text-2xl">
              <h3>
                {projects.length} <span class="capitalize">{clickedStack}</span>
                projects.
              </h3>
            </div>
          {/if}
          {#if projects.length > 0}
            <MainCard {projects} currentItem={cyear} />
          {:else}
            <div class="py-4 md:py-10">
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

    <!---the rest of the year-->
    {#each years as year, i}
      <Tabs.Tab label={currentYear - year} tabKey={currentYear - year + ""}>
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
          {#if clickedStack && projects.length > 0}
            <div class="py-2 text-2xl">
              <h3>
                {projects.length}
                {projects.length === 1 ? "project" : "projects"} in
                <span class="capitalize">{clickedStack}</span>
                - {active}
              </h3>
            </div>
          {/if}

          {#if projects.length > 0}
            <MainCard {projects} currentItem={cyear} />
          {:else}
            <div class="px-4 py-4 md:py-10 text-2xl">
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
  </Tabs>
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
