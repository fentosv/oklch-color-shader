<script lang="ts">
  import { type Oklch } from 'culori/fn';
  import { getOpacityShades } from 'utils/colors';

  export let color: Oklch;
  let colorArray: string[] = [];

  getOpacityShades(color);
</script>

<article>
  {#if colorArray.length > 0}
    {#each colorArray as genColor}
      <p style={`background-color: ${genColor};`}>Result</p>
    {/each}
  {/if}
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
