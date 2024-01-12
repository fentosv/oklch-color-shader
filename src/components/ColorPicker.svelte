<script lang="ts">
  // Svelte somehow removes color on initial render
  // 👉🏽 https://github.com/sveltejs/kit/issues/10501

  import { type Oklch } from 'culori/fn';
  import OpacityShades from './OpacityShades.svelte';
  import ColorSelector from './dev/ColorSelector.svelte';

  import { formatOklchToString, convertToOklch, formatToHex } from 'utils/colors.ts';

  let color = '#ff7000';
  let colorHex = color;
  let colorOklch: Oklch;
  let colorOklchCss: string;

  // TODO handle errors
  let errorColor: true | null = null;

  $: {
    color;
    const oklchColor = convertToOklch(color);

    if (oklchColor) {
      colorOklch = oklchColor;
      colorOklchCss = formatOklchToString(oklchColor);
      colorHex = formatToHex(oklchColor);
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

  <input type="color" on:input={handleChange} bind:value={colorHex} name="color" />
  <input type="text" on:input={handleChange} bind:value={color} name="color" />

  <p>Selected color: {color}</p>

  <p class="colors" style={`background-color: ${color};`}>Original</p>
  <p class="colors" style={`background-color: ${colorOklchCss};`}>In Oklch</p>

  {#if colorOklch}
    <p>Your oklch color: <strong>{colorOklchCss}</strong></p>
    <OpacityShades color={colorOklch} />
  {/if}
  {#if errorColor}
    <h1>This color is not valid</h1>
  {/if}
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    gap: var(--size-spacing-1);
    align-items: center;
  }

  .colors {
    width: 250px;
  }
  /* 
   - L (lightness): 0-1. Black to white
   - C (chroma): 0-0.5.Saturation
   - Hue angle: 0-360
   - a (opacity): 0-1
  */
</style>
