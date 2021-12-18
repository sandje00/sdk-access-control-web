<template>
  <input
    @input="$emit('input', $event.target.value)"
    @change="$emit('change', $event.target.value)"
    :value="value"
    v-bind="$attrs"
    class="input">
</template>

<script>
export default {
  name: 'base-input',
  props: {
    value: { type: String, default: '' }
  }
};
</script>

<style lang="scss" scoped>
.input {
  font-size: inherit;
  background: none;
  border: 1px solid var(--color-gray-dark);
  border-radius: 5px;
  padding: 0.5rem 1rem;

  &::placeholder {
    color: var(--color-gray-light);
  }

  &:focus {
    outline: none;
  }
}
</style>
