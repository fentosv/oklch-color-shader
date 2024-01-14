<script lang="ts">
  import { type Oklch } from 'culori/fn';
  import ColorCard from './ColorCard.svelte';
  import OpacityShades from './OpacityShades.svelte';

  export let color: Oklch;
</script>

<article>
  <h2>Shades layout component</h2>
  <p>Original color in Oklch</p>
  <ColorCard color={color} />
  <OpacityShades color={color} />
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
