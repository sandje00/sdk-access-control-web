<template>
  <div class="app-logo flex-v align-center">
    <span>SDK</span>
    <span>Access Control</span>
  </div>
</template>

<script>
export default {
  name: 'app-logo'
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
}
</style>
