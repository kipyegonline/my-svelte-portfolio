<script lang="ts">
  import { Image } from "@svelteuidev/core";
  import JsImage from "../../lib/images/stack/javascript-programming-language-icon.svg";
  import TsImage from "../../lib/images/stack/typescript-programming-language-icon.svg";
  import PHPImage from "../../lib/images/stack/php-programming-language-icon.svg";
  import MysqlImage from "../../lib/images/stack/mysql-icon.svg";
  import AngularImage from "../../lib/images/stack/angular-icon.svg";
  import TailwindImage from "../../lib/images/stack/tailwind-css-icon.svg";
  import LaravelImage from "../../lib/images/stack/laravel-icon.svg";
  import ReactImage from "../../lib/images/stack/react-js-icon.svg";
  import SvelteImage from "../../lib/images/svelte-logo.svg";

  let logos = [
    [JsImage, "javascript"],
    [TsImage, "typescript"],
    [PHPImage, "php"],
    [MysqlImage, "mysql"],
    [ReactImage, "react"],
    [SvelteImage, "svelte"],
    [AngularImage, "angular"],
    [TailwindImage, "tailwind"],
    [LaravelImage, "laravel"],
  ];
  export let onClick = (text: string) => {};
</script>

<section
  class="flex flex-wrap gap-4 justify-start md:justify-center items-center"
>
  {#each logos as [logo, text]}
    <div>
      <Image
        alt=""
        on:click={() => onClick(text)}
        class="max-w-full   w-8 h-auto cursor-pointer "
        src={logo}
        title={text}
      />
    </div>
  {/each}
</section>
<hr />
