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
</script>

<AppShell>
  <Navbar
    hidden={!false}
    width={{ lg: 300, base: 100 }}
    fixed
    class="p-4"
    position={{ top: 0, left: 0 }}
  >
    <CustomHeader />
  </Navbar>

  <main>
    <SvelteUIProvider withNormalizeCSS withGlobalStyles
      ><slot /></SvelteUIProvider
    >
  </main>
</AppShell>
<footer>
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
    width: 100%;
    max-width: 64rem;
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
