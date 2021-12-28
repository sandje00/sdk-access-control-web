<template>
  <div
    :class="{ 'flex-v justify-center align-center': centeredContent }"
    class="main">
    <app-header v-if="loggedIn"></app-header>
    <slot></slot>
  </div>
</template>

<script>
import AppHeader from './Header';

export default {
  name: 'app-layout',
  props: {
    centeredContent: { type: Boolean, default: false },
    loggedIn: { type: Boolean, required: true }
  },
  components: { AppHeader }
}
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  background: var(--color-secondary);
}
</style>
