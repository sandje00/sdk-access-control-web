<template>
  <header class="app-header flex-h justify-space-between">
    <app-logo class="logo" :caption="false" light small vertical>
    </app-logo>
    <mobile-nav v-if="isMobile"></mobile-nav>
    <desktop-nav v-else></desktop-nav>
  </header>
</template>

<script>
import AppLogo from '../AppLogo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default {
  name: 'app-header',
  computed: {
    isMobile() {
      return window.innerWidth <= 600;
    }
  },
  components: { AppLogo, DesktopNav, MobileNav }
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
