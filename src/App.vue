<template>
  <hello-heading />
</template>

<script>
import HelloHeading from './components/HelloHeading';

export default {
  name: 'app-main',
  components: {
    HelloHeading,
  }
};
</script>

<style lang="scss">
@import './assets/stylesheets/main.scss';

#app {
  width: 100%;
  height: 100%;
}
</style>
