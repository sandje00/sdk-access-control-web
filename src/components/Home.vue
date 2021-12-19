<template>
  <div class="main flex-v justify-center align-center">
    <app-logo large />
    <base-button
      @click="getStarted"
      text="Get started"
      class="btn"
    />
  </div>
</template>

<script>
import AppLogo from './AppLogo';
import BaseButton from './base/BaseButton';

export default {
  name: 'home-page',
  components: {
    AppLogo,
    BaseButton
  },
  methods: {
    getStarted() {
      this.$router.push({ name: 'login' });
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  background: var(--color-secondary);

  .btn {
    margin-top: 2rem;
  }
}
</style>
