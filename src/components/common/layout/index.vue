<template>
  <div class="main flex-v justify-center align-center">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'app-layout'
}
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  background: var(--color-secondary);
}
</style>
