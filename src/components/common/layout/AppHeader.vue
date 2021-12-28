<template>
  <header class="app-header flex-h justify-space-between">
    <app-logo class="logo" :caption="false" light small vertical>
    </app-logo>
  </header>
</template>

<script>
import AppLogo from '../AppLogo';

export default {
  name: 'app-header',
  components: { AppLogo }
}
</script>

<style lang="scss" scoped>
.app-header {
  width: 100%;
  height: 8vh;
  position: fixed;
  top: 0;
  z-index: var(--z-header);
  background-color: var(--color-primary);

  .logo {
    padding-left: 0.5rem;
  }
}
</style>
