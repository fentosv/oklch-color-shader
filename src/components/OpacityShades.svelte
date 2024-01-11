<script lang="ts">
  import { type Oklch } from 'culori/fn';
  import { getOpacityShades } from 'utils/colors';

  export let color: Oklch;
  let colorArray: string[] = [];

  getOpacityShades(color);
</script>

<article>
  Color: {color}

  {#if colorArray.length > 0}
    {#each colorArray as genColor}
      <div style={`background-color: ${genColor};`}>Result</div>
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
