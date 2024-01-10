<script>
  import colors from 'utils/colors.ts';

  const colorsToParse = [
    'red',
    '#892987',
    'hsl(60 50% 10% / 100%)',
    'lab(52.2345% 40.1645 59.9971)',
    'oklch(70% 0.1 159)',
  ];

  let colorHex = '#ffffff';
  let color = '#ffffff';
  let colorOklch = null;
  let colorArray = [];
  let errorColor = null;

  function handleChange(e) {
    const ogColor = e.target.value;
    const { oklchColor, hexColor, cssOklchColor } = colors(ogColor);
    color = ogColor;
    colorHex = hexColor;
    colorOklch = cssOklchColor;
  }
</script>

<article>
  Color: {color}
  <input type="color" on:input={handleChange} bind:value={colorHex} name="color" />

  <div class="colors" style={`background-color: ${color};`}>Original</div>
  <div class="colors" style={`background-color: ${colorOklch};`}>Result</div>

  {#each colorArray as genColor}
    <div style={`background-color: ${genColor};`}>Result</div>
  {/each}

  <div style="display: flex; flex-direction: column;">
    {#each colorsToParse as colorToParse}
      <label>
        <input type="radio" on:input={handleChange} value={colorToParse} name="listColor" />
        {colorToParse}
      </label>
    {/each}
  </div>

  {#if colorOklch}
    <p>Your oklch color: <strong>{colorOklch}</strong></p>
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
