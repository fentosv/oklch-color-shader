<script lang="ts">
  import { type Oklch } from 'culori/fn';
  import { formatOklchToCss, getOpacityShades } from '../utils/colors';

  export let color: Oklch;
  let colorArray: string[] = [];

  getOpacityShades(color);
</script>

<article>
  <p style={`background-color: ${formatOklchToCss(color)};`}>Oklch selected color</p>

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
    border: 2px solid #5f5f5f;
    padding: 1rem;
  }
</style>
