<template>
  <div
    :class="{ light, large }"
    class="app-logo flex-v justify-center align-center"
  >
    <span>SDK</span>
    <span>Access Control</span>
  </div>
</template>

<script>
export default {
  name: 'app-logo',
  props: {
    light: { type: Boolean, default: false },
    large: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
.app-logo {
  color: var(--color-primary);
  font-size: 2rem;

  &::after {
    content: 'admin dashboard';
    text-transform: uppercase;
    font-size: 1rem;
    font-style: italic;
    color: var(--color-gray-dark);
  }

  &.light {
    color: var(--color-white);
  }

  &.light::after {
    color: var(--color-gray-light);
  }

  &.large {
    font-size: 3rem;
  }

  &.large::after {
    font-size: 1.5rem;
  }
}
</style>
