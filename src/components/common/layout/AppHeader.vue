<template>
  <header class="app-header">

  </header>
</template>

<script>
export default {
  name: 'app-header'
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
}
</style>
