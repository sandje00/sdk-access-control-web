<template>
  <div
    :class="[{ caption, large, light, small, vertical }, vertical ? 'flex-h' : 'flex-v' ]"
    class="app-logo justify-center align-center"
  >
    <span>SDK</span>
    <span>Access Control</span>
  </div>
</template>

<script>
export default {
  name: 'app-logo',
  props: {
    caption: { type: Boolean, default: true },
    large: { type: Boolean, default: false },
    light: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    vertical: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
.app-logo {
  color: var(--color-primary);
  font-size: 2rem;

  &.caption::after {
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

  &.small {
    font-size: 1.5rem;
  }

  &.vertical {
    span:last-child {
      margin-left: 0.5rem;

      @media(max-width: 750px) {
        display: none;
      }
    }
  }

  &.large.caption::after {
    font-size: 1.5rem;
  }

  &.small.caption::after {
    font-size: 0.7rem;
  }
}
</style>
