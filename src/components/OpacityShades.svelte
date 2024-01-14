<script lang="ts">
  import { type Oklch } from 'culori/fn';
  import { getOpacityShades } from '../utils/colors';
  import ColorCard from './ColorCard.svelte';

  export let color: Oklch;

  let colorArray: Oklch[] = [];

  getOpacityShades(color);
</script>

<article>
  {#if colorArray.length > 0}
    {#each colorArray as genColor}
      <ColorCard color={genColor} />
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
