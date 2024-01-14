<script lang="ts">
  import { type Oklch } from 'culori/fn';
  import OpacityShades from './OpacityShades.svelte';

  export let color: Oklch;
</script>

<article>
  <h2>Shades layout component</h2>
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
