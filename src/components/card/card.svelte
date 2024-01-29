<script lang="ts">
  import {
    Badge,
    Button,
    Card,
    Group,
    Image,
    Text,
    Collapse,
    Box,
    Divider,
  } from "@svelteuidev/core";
  import Socials from "../Socials/Socials.svelte";
  export let projects: any = [];
  export let currentItem = -1;

  let clicked = 0;
  const handleButtonClick = (id: number) => {
    if (id === clicked) clicked = -1;
    else clicked = id;
  };
</script>

<section class="flex flex-wrap gap-4 p-4">
  {#each projects as project, i (project.id)}
    <Card
      shadow="sm"
      padding="lg"
      class={`w-full lg:w-96 my-2 relative  box-border min-h-60 ${
        clicked === project.id ? "h-auto" : "h-60"
      }} `}
    >
      <Group position="apart">
        <Text weight={700} size="lg" className="py-1 font-bold"
          >{i + 1}. {" "}{project.name}</Text
        >
        <Divider />
      </Group>
      <Box class="py-4">
        <p>
          {project.short_des}
        </p>
      </Box>

      <Button
        variant="light"
        on:click={() => handleButtonClick(project.id)}
        color="blue"
        fullSize
        class="!absolute bottom-12 left-0 right-0"
        style="display:{clicked === project.id ? 'none' : 'block'}"
      >
        {clicked === project.id ? "see less" : "Read More"}
      </Button>

      <Collapse open={clicked === project.id} transitionDuration={500}>
        <div class="p-4">
          <p>{project.long_des}</p>
        </div>
      </Collapse>
      <Button
        variant="light"
        on:click={() => handleButtonClick(project.id)}
        color="blue"
        fullSize
        style="display:{clicked === project.id ? 'block' : 'none'}"
      >
        {clicked === project.id ? "see Less" : "See More"}
      </Button>
      <section class=" my-4 py-4">
        <Socials
          weblinklink={project.link}
          githublink={project.repo}
          isOpenSource={project.openSource}
        />
      </section>
    </Card>
  {/each}
</section>
