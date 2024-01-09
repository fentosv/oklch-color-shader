<script>
  import colors from 'utils/colors.ts';

  let color = '#ffffff';
  let okColor = color;
  let colorArray = [];

  function formatNum(num) {
    return num.toFixed(4);
  }

  function stringNum(L, C, H) {
    return `oklch( ${L} ${C} ${H})`;
  }

  function handleChange(e) {
    const ogColor = e.target.value;
    colors(ogColor);
  }
</script>

<article>
  Count: {color}
  <input type="color" on:input={handleChange} bind:value={color} name="color" />

  <div style={`background-color: ${color};`}>Original</div>
  <div style={`background-color: ${okColor};`}>Result</div>
  {#each colorArray as genColor}
    <div style={`background-color: ${genColor};`}>Result</div>
  {/each}
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    gap: var(--size-spacing-1);
    align-items: center;
  }

  div {
    width: 200px;
  }

  /* 
   - L (lightness): 0-1. Black to white
   - C (chroma): 0-0.5.Saturation
   - Hue angle: 0-360
   - a (opacity): 0-1
  */
</style>
