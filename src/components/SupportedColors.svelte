<script>
  import { support } from '../stores/colorSupport';
</script>

<section>
  <p>oklch {$support.oklch ? 'is supported in this device' : 'is not supported in this device'}</p>
  <p>p3 {$support.p3 ? 'is supported in this device' : 'is not supported in this device'}</p>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
  }
</style>
