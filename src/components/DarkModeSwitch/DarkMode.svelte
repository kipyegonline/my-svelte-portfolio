<script lang="ts">
  import { colorScheme } from "@svelteuidev/core";
  import { Sun, Moon } from "lucide-svelte";
  import { onMount } from "svelte";
  function toggleTheme() {
    colorScheme.update((v) => (v === "light" ? "dark" : "light"));
    $colorScheme === "dark"
      ? document.body.setAttribute("data-mode", "dark")
      : document.body.removeAttribute("data-mode");
  }
  let size = 26;
  let bounce = false;
  onMount(() => {
    setTimeout(() => {
      bounce = true;
    }, 5000);
    setTimeout(() => {
      bounce = false;
    }, 15000);
  });
</script>

<div class="absolute right-0 mr-2 z-30">
  {#if $colorScheme === "light"}
    <span tabindex="0" on:click={toggleTheme} role="button">
      <Moon {size} class={bounce ? "animate-bounce" : "animate-none"} /></span
    >
  {:else}
    <span tabindex="0" on:click={toggleTheme} role="button"
      ><Sun {size} class={bounce ? "animate-bounce" : "animate-none"} /></span
    >
  {/if}
</div>
