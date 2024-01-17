<script>
  import { Badge, Box, Image } from "@svelteuidev/core";
  import { Github } from "lucide-svelte/icons";
  import github from "../../lib/images/github-icon.svg";
  import link from "../../lib/images/external-link-icon.svg";
  export let githublink = "",
    weblinklink = "",
    isOpenSource = false;
</script>

<Box
  class="flex gap-4 justify-center py-2 items-center  absolute bottom-2 left-0 right-0 "
>
  {#if githublink}
    <Box
      ><a href={githublink} target="_blank" title="github"
        ><Image src={github} alt="" class="h-5 w-5" /></a
      ></Box
    >
  {:else if isOpenSource}
    <Badge color="orange" size="md" radius="md">Open Source</Badge>
  {:else}
    <Badge size="md" radius="md" variant="gradient">Private repo</Badge>
  {/if}

  {#if weblinklink}
    <Box>
      <a href={weblinklink} target="_blank" title="link"
        ><Image src={link} alt="" class="h-5 w-5" /></a
      >
    </Box>
  {/if}
</Box>
