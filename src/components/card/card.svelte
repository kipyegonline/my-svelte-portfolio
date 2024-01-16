<script lang="ts">
  import { Badge, Button, Card, Group, Image, Text } from "@svelteuidev/core";
  export let projects: any = [];
</script>

<section class="flex flex-wrap gap-4 p-4">
  {#each projects as project, i (project.id)}
    <Card shadow="sm" padding="lg" class="w-full md:w-96 my-2">
      <Group position="apart">
        <Text weight={500} className="py-2">{i + 1}. {" "}{project.name}</Text>
        <Badge color="green" variant="light">On Sale</Badge>
      </Group>

      <Text size="sm">
        With Portugal Porto Adventures you can explore more of the beautiful
        portuguese cities, by walking on food, meeting the locals and eat
        excellent food and wine
      </Text>

      <Button variant="light" color="blue" fullSize
        >Book classic tour now</Button
      >
    </Card>
  {/each}
</section>
