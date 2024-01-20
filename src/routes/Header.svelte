<script>
  import { Image, IconRenderer, Divider } from "@svelteuidev/core";
  import { page } from "$app/stores";
  import logo from "$lib/images/svelte-logo.svg";
  import github from "$lib/images/github-icon.svg";
  import twitter from "$lib/images/x-social-media-black-icon.svg";
  import linkedin from "$lib/images/linkedin-square-icon.svg";
  import Framework from "../components/frameworks/framework.svelte";

  let socials = [
    { link: "https://github.com/kipyegonline", icon: github },
    { link: "https://twitter.com/kipyegonline", icon: twitter },
    { link: "https://linkedin.com/in/kipyegonline", icon: linkedin },
  ];
  let roles = ["Software developer", "Freelance Journalist"];
</script>

<header class="overflow-y-scroll">
  <div>
    <Image src="at_vince.png" class="w-full h-auto" alt="my pic" />
  </div>
  <div class="p-4 text-xl font-medium flex flex-col items-center">
    <p>Vincent Kipyegon</p>
    <p class="italic text-base">Software developer</p>
    <p class="italic text-base py-2">
      Technical writer at <a
        class="text-blue-800 hover:text-blue-800"
        href="https://dev.to/kipyegonline"
        target="_blank">Dev.to</a
      >
    </p>
    <p class="italic text-base py-2">
      Email: <a
        class="text-blue-800 hover:text-blue-800 inline-block"
        href="mailto:vince.kipyegon11@gmail.com"
        target="_blank">vince.kipyegon11@gmail.com</a
      >
    </p>
  </div>
  <Divider />
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

  <div>
    <p class="italic text-base">Freelance Journalist.</p>
  </div>
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
