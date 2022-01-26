<template>
  <header class="app-header flex-h justify-space-between">
    <app-logo class="logo" :caption="false" light small vertical>
    </app-logo>
    <app-nav></app-nav>
  </header>
</template>

<script>
import AppLogo from '../AppLogo';
import AppNav from './AppNav';

export default {
  name: 'app-header',
  components: { AppLogo, AppNav }
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
    padding-left: 2rem;
  }
}
</style>
