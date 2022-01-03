<template>
  <div
    :class="{ 'flex-v justify-center align-center': centeredContent }"
    class="main">
    <app-header v-if="loggedIn"></app-header>
    <slot></slot>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from './Footer';
import AppHeader from './Header';

export default {
  name: 'app-layout',
  props: {
    centeredContent: { type: Boolean, default: false },
    loggedIn: { type: Boolean, required: true }
  },
  components: { AppFooter, AppHeader }
}
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  background: var(--color-secondary);
  position: relative;
}
</style>
