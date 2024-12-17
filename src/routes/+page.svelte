<script lang="ts">
  import { Tabs, Divider, Chip, colorScheme } from "@svelteuidev/core";
  //import { typewriter } from "@svelteuidev/motion";
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
  let skills = [
    " HTML5, CSS3, JavaScript (ES6+), Typescript",
    " React, React Native, Angular,Next JS, Svelte,Redwood js,Svelte Kit",
    "Generative AI tools (Claude AI,Google Gemini,Chat GPT)",
    " PHP/MYSQL/Laravel",
    " Tailwind CSS,Material UI,Bootstrap, Ant design",
    " Responsive/mobile web design & Accessible web design",
    " Cross-browser compatibility ",

    " Git, GitHub, CI/CD tools, Github actions",
    " AWS - Dynamo DB, Cognito, AWS Lambda, Amplify & Elastic Beanstalk",
  ];

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
  $: isDark = $colorScheme === "dark";
</script>

<svelte:head>
  <title>Home| Resume Vince {new Date().getFullYear()}</title>
  <meta
    name="description"
    content="Resume Portfolio site for Vincent Kipyegon Koech, Software Developer React Angular Svelte Laravel"
  />
</svelte:head>

<section class="dark:bg-black dark:text-white w-full">
  <div class="py-2 mb-2">
    <h1
      class={` hidden sm:block  bg-anotherBlue text-white rounded-md mb-2 text-4xl py-2 `}
    >
      Vincent Kipyegon Koech
    </h1>
    <p class="py-2 px-2 text-justify">
      I am a web developer with over 5 years of experience designing,
      developing, maintaining responsive websites and end to end web
      applications for <b>production</b>.
    </p>
    <p>
      I am skilled in HTML, CSS, JavaScript, TypeScript, React (React18 & Next
      Js),React Native, Angular, and Svelte js (Svelte Kit). I am also
      proficient in Node.js. I am passionate about perfomant and user-friendly
      interface design. I am proficient in developing RESTful applications using
      express js and PHP laravel framework. I am certified AWS cloud
      practitioner.
    </p>
    <div class="py-2 px-4 md:px-2 flex flex-col items-center justify-center">
      <h3 class="text-lg font-bold underline">Skills assessment</h3>
      <ul>
        {#each skills as skill, i}
          <li class="list-disc">{skill}</li>
        {/each}
      </ul>
    </div>
  </div>
  <!-- <Table />  <Grid />-->
  <h3 class="text-xl font-bold underline" id="porfolio">Portfolio</h3>
  <hr />

  <Tabs
    on:change={handleTabChange}
    grow
    position="apart"
    class=" w-full py-2"
    variant="pills"
    color="red"
  >
    <!--All the projects-->

    <Tabs.Tab label={"All"} tabKey="-1">
      {#if active === -1}
        <hr class="mb-2" />
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
        <hr class="mb-2" />
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
