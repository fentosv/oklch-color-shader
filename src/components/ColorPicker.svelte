<script lang="ts">
  // Svelte somehow removes color on initial render
  // 👉🏽 https://github.com/sveltejs/kit/issues/10501

  import { type Oklch } from 'culori/fn';
  import OpacityShades from './OpacityShades.svelte';
  import ColorSelector from './dev/ColorSelector.svelte';

  import { convertToOklch, formatToHex } from '../utils/colors.ts';

  const isNotHex4Char = (c: string) => c.startsWith('#') && c.length !== 5;

  let color = '#ff7000';
  let colorHex = color;
  let colorOklch: Oklch;

  // TODO handle errors
  let errorColor: boolean = false;

  $: {
    color;

    const oklchColor = convertToOklch(color);

    if (oklchColor && isNotHex4Char(color)) {
      colorOklch = oklchColor;
      colorHex = formatToHex(oklchColor);
      errorColor = false;
    } else {
      errorColor = true;
    }
  }

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const ogColor = target.value;
    color = ogColor;
  }
</script>

<article>
  <ColorSelector bind:color={color}></ColorSelector>

  <form action="">
    <label>
      Pick your color
      <input type="color" on:input={handleChange} bind:value={colorHex} />
    </label>

    <label>
      ... or write it
      <input class="text-input" type="text" on:input={handleChange} bind:value={color} />
    </label>
  </form>

  {#if !errorColor}
    <p style={`background-color: ${color};`}>Original</p>
  {/if}

  {#if errorColor}
    <h1>This color is not valid</h1>
  {/if}

  {#if colorOklch}
    <OpacityShades color={colorOklch} />
  {/if}
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    gap: var(--size-spacing-1);
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    border: 2px solid #5f5f5f;
    padding: 1rem;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .text-input {
    width: 100px;
  }

  /* 
   - L (lightness): 0-1. Black to white
   - C (chroma): 0-0.5.Saturation
   - Hue angle: 0-360
   - a (opacity): 0-1
  */
</style>
