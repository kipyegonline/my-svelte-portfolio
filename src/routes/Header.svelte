<script>
  import { Image, IconRenderer, Divider } from "@svelteuidev/core";
  import { MessageCircleMore } from "lucide-svelte";
  import { page } from "$app/stores";
  import logo from "$lib/images/svelte-logo.svg";
  import github from "$lib/images/github-icon.svg";
  import twitter from "$lib/images/x-social-media-black-icon.svg";
  import linkedin from "$lib/images/linkedin-square-icon.svg";
  import Framework from "../components/frameworks/framework.svelte";
  import Contact from "../components/Contact/Contact.svelte";

  let socials = [
    { link: "https://github.com/kipyegonline", icon: github },
    { link: "https://twitter.com/kipyegonline", icon: twitter },
    { link: "https://linkedin.com/in/kipyegonline", icon: linkedin },
  ];
  let roles = ["Software developer", "Freelance Journalist"];
  let dm = false;
</script>

<header class="overflow-y-scroll">
  <Contact open={dm} closeModal={() => (dm = false)} />
  <div>
    <Image src="/at_vince.png" class="w-full h-auto" alt="my pic" />
  </div>
  <div class="p-4 text-xl font-medium flex flex-col items-start">
    <p class="hidden">Vincent Kipyegon</p>
    <p class="italic text-base pb-2">Web developer based in Nairobi,Kenya.</p>
    <p class="italic text-base py-0">
      Technical writer at <a
        class="text-blue-800 hover:text-blue-800"
        href="https://dev.to/kipyegonline"
        target="_blank">Dev.to</a
      >
    </p>
    <p class="italic text-base py-0">Freelance Journalist</p>
    <p class="italic text-base py-0 hidden">
      Email: <a
        class="text-blue-800 hover:text-blue-800 inline-block"
        href="mailto:vince.kipyegon11@gmail.com"
        target="_blank">vince.kipyegon11@gmail.com</a
      >
      <br />
    </p>

    <p class="text-base">
      <button
        class="cursor-pointer text-blue-800 hover:text-blue-800"
        on:click={() => (dm = true)}
      >
        Send direct message <MessageCircleMore
          size={20}
          class="inline-block ml-1"
        />
      </button>
    </p>
  </div>
  <Divider />

  <div class="mb-2">
    <p class="text-center font-bold text-underline">Skills</p>
    <div class="p-4">
      <code>Javascript/Typescript, HTML, CSS</code>
      <code> React,React Native,Angular,Svelte </code>
    </div>
    <hr class="mb-2" />
    <p class="text-center font-bold text-underline">Other Skills</p>
    <div class="p-4">
      <code> Public relations</code>
      <code> Freelance journalism</code>
      <code> Photography</code>
    </div>
  </div>
  <div class="p-2 flex gap-4 justify-evenly">
    {#each socials as social (social.link)}
      <div>
        <a href={social.link} target="_blank"
          ><img src={social.icon} class="h-6 w-6" alt="" /></a
        >
      </div>
    {/each}
  </div>
  <Divider />
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
  }

  .corner {
    width: 3em;
    height: 3em;
  }

  .corner a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .corner img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgba(255, 255, 255, 0.7);
  }

  svg {
    width: 2em;
    height: 3em;
    display: block;
  }

  path {
    fill: var(--background);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li[aria-current="page"]::before {
    --size: 6px;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--color-theme-1);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-text);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-theme-1);
  }
</style>
