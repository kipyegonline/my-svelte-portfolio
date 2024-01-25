<script>
  import { SvelteUIProvider } from "@svelteuidev/core";
  import {
    fns,
    AppShell,
    Navbar,
    Header,
    Title,
    Divider,
  } from "@svelteuidev/core";

  import CustomHeader from "./Header.svelte";
  import "./styles.css";
  let isMobile = globalThis?.window?.matchMedia("(min-width:481px").matches;
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
  <div class="block sm:hidden w-full mx-auto">
    <h1
      class="bg-blue-600 text-white rounded-md mb-0 md:mb-2 text-xl py-4 w-full"
    >
      Vincent Kipyegon Koech
    </h1>
    <CustomHeader />
  </div>

  <main class="">
    <SvelteUIProvider withNormalizeCSS withGlobalStyles
      ><slot /></SvelteUIProvider
    >
  </main>
</AppShell>
<footer class="p-4 text-xl flex flex-col items-center">
  All Rights Reserved &copy; {new Date().getFullYear()}
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
