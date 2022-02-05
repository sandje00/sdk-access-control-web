<template>
  <button v-on="$listeners" class="button-icon">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button-icon'
}
</script>

<style lang="scss" scoped>
.button-icon {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
