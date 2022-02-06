<template>
  <button v-on="$listeners" :class="{ neutral }" class="button">
    <span class="text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'base-button',
  props: {
    text: { type: String, required: true },
    neutral: { type: Boolean, default: false }
  }
};
</script>

<style lang="scss" scoped>
.button {
  padding: 0.7rem 2rem;
  font-size: 1rem;
  background: none;
  background-color: var(--color-primary);
  border: none;
  border-radius: 10px;
  cursor: pointer;

  .text {
    color: var(--color-white);
  }

  &:hover {
    background-color: var(--color-primary-light);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: var(--color-disabled-light);
    pointer-events: none;
    cursor: default;
  }

  &.neutral {
    background-color: var(--color-gray-light);

    .text {
      color: var(--color-gray-dark);
    }
  }
}
</style>
