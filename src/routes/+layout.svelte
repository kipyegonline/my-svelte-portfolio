<script>
  import { onMount } from "svelte";
  import { SvelteUIProvider } from "@svelteuidev/core";
  import {
    fns,
    AppShell,
    Navbar,
    Header,
    Title,
    Divider,
    Switch,
    colorScheme,
  } from "@svelteuidev/core";
  import { Sun, Moon } from "lucide-svelte";
  import CustomHeader from "./Header.svelte";
  //import { colorScheme } from "../store/store";
  import "./styles.css";
  import DarkMode from "../components/DarkModeSwitch/DarkMode.svelte";
  let isMobile = globalThis?.window?.matchMedia("(min-width:481px").matches;

  $: isDark = $colorScheme === "dark";
 
</script>

<AppShell>
  <Navbar
    hidden={!false}
    width={{ lg: 300, base: "100%" }}
    fixed={isMobile}
    class=" p-0 sm:p-4 "
    position={{ top: 0, left: 0 }}
  >
    <CustomHeader />
  </Navbar>
  <!--<Switch on:change={toggleTheme} class="absolute right-0 mr-2 hidden" />-->
  <DarkMode />

  <div class="block sm:hidden w-full mx-auto">
    <h1
      class={` bg-blue-600 text-white rounded-md mb-0 md:mb-2 text-xl py-4 w-full`}
    >
      Vincent Kipyegon Koech
    </h1>
    <CustomHeader />
  </div>

  <main class="">
    <SvelteUIProvider
      withNormalizeCSS
      withGlobalStyles
      themeObserver={$colorScheme}><slot /></SvelteUIProvider
    >
  </main>
</AppShell>
<hr class="border" />
<footer
  class={`p-4 text-xl flex flex-col items-center ${
    isDark ? "bg-gray-900" : "bg-gray-300"
  }`}
>
  <DarkMode />
  &copy; {new Date().getFullYear()} | All Rights Reserved
</footer>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    max-width: 100%;
    /*max-width: 64rem;
     max-width: 100%;*/

    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
