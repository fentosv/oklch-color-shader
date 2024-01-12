<script lang="ts">
  const colorsToParse = [
    'red',
    '#892987',
    'hsl(60 50% 10% / 100%)',
    'lab(52.2345% 40.1645 59.9971)',
    'oklch(70% 0.1 159)',
  ];

  export let color;

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    color = target.value;
  }
</script>

<article>
  {#each colorsToParse as colorToParse}
    <label>
      <input type="radio" on:input={handleChange} value={colorToParse} name="listColor" />
      {colorToParse}
    </label>
  {/each}
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
  }
</style>
