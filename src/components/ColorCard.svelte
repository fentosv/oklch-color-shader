<script lang="ts">
  import { type Oklch } from 'culori/fn';
  import { formatOklchToCss, invertColor } from '../utils/colors';

  export let color: Oklch;
  let cssColor: string;
  let cssInvertColor: string;

  $: {
    color;
    cssColor = formatOklchToCss(color);
    cssInvertColor = invertColor(color);
  }
</script>

<button type="button" style:--color={cssColor} style:--color-inverted={cssInvertColor}>
  <span class="text"> {cssColor}</span>
  <span class="color"></span>
</button>

<style>
  button {
    --size: 200px;
    --outline-width: 2px;

    display: flex;
    flex-direction: column;
    margin: var(--outline-width);
    gap: var(--size-spacing-1);
    align-items: center;
    border: 1px solid;
    border-color: var(--color);
    border-radius: var(--border-radius);
    width: var(--size);
    height: var(--size);
    content-visibility: auto;
    contain-intrinsic-size: auto var(--size);
    background-color: transparent;
    color: var(--color-inverted);
  }

  @media (hover: hover) {
    button:focus-visible {
      outline: var(--outline-width) solid red;
    }

    button:hover {
      outline: var(--outline-width) solid red;
    }
  }

  .text {
    padding-block: 0.5rem;
    text-align: center;
  }

  .color {
    display: flex;
    flex: 1;
    align-self: stretch;
    background-color: var(--color);
  }
</style>
