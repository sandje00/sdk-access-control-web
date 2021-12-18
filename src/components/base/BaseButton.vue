<template>
  <button v-on="$listeners" class="button py-s px-xl">
    <span class="text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'base-button',
  props: {
    text: { type: String, required: true }
  }
};
</script>

<style lang="scss" scoped>
.button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  background: none;
  background-color: var(--color-primary);
  border: none;
  border-radius: 10px;
  cursor: pointer;

  .text {
    color: var(--color-white);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: var(--color-disabled-light);
    pointer-events: none;
    cursor: default;
  }
}
</style>
