<script>
  import { support } from '../stores/colorSupport';
</script>

<section>
  <p class:on={$support.oklch}>
    oklch {$support.oklch ? 'is supported in this device' : 'is not supported in this device'}
  </p>
  <p class:on={$support.p3}>
    p3 {$support.p3 ? 'is supported in this device' : 'is not supported in this device'}
  </p>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
  }

  p {
    color: red;
  }

  .on {
    color: green;
  }
</style>
