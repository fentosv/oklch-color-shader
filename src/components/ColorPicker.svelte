<script lang="ts">
  // Svelte somehow removes color on initial render
  // 👉🏽 https://github.com/sveltejs/kit/issues/10501

  import { type Oklch } from 'culori/fn';
  import OpacityShades from './OpacityShades.svelte';

  import { formatOklchToString, convertToOklch, formatToHex } from 'utils/colors.ts';

  const colorsToParse = [
    'red',
    '#892987',
    'hsl(60 50% 10% / 100%)',
    'lab(52.2345% 40.1645 59.9971)',
    'oklch(70% 0.1 159)',
  ];

  let color = '#ff7000';
  let colorHex = color;
  let colorOklch: Oklch;
  let colorOklchCss: string;

  // TODO handle errors
  let errorColor = '';

  $: {
    color;
    const oklchColor = convertToOklch(color);

    if (oklchColor) {
      colorOklch = oklchColor;
      colorOklchCss = formatOklchToString(oklchColor);
      colorHex = formatToHex(oklchColor);
    }
  }

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const ogColor = target.value;
    color = ogColor;
  }
</script>

<article>
  Color: {color}

  <input type="color" on:input={handleChange} bind:value={colorHex} name="color" />

  <div class="colors" style={`background-color: ${color};`}>Original</div>
  <div class="colors" style={`background-color: ${colorOklchCss};`}>In Oklch</div>

  <div style="display: flex; flex-direction: column;">
    {#each colorsToParse as colorToParse}
      <label>
        <input type="radio" on:input={handleChange} value={colorToParse} name="listColor" />
        {colorToParse}
      </label>
    {/each}
  </div>

  {#if colorOklch}
    <p>Your oklch color: <strong>{colorOklchCss}</strong></p>
    <OpacityShades color={colorOklch}></OpacityShades>
  {/if}
  {#if errorColor}
    <p>Color error: <strong>{errorColor}</strong></p>
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
