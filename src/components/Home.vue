<template>
  <app-layout>
    <app-logo large />
      <base-button
        @click="getStarted"
        text="Get started"
        class="btn"
      />
  </app-layout>
</template>

<script>
import AppLayout from './common/layout';
import AppLogo from './common/AppLogo';
import BaseButton from './common/BaseButton';

export default {
  name: 'home-page',
  methods: {
    getStarted() {
      this.$router.push({ name: 'login' });
    }
  },
  components: {
    AppLayout,
    AppLogo,
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
.btn {
  margin-top: 2rem;
}
</style>
