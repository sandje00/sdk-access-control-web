<template>
  <div>
    <slot><base-input v-on="$listeners" v-bind="$attrs" :class="{ error }" class="input" /></slot>
    <span class="error-message">{{ error }}</span>
  </div>
</template>

<script>
import BaseInput from './BaseInput.vue';

export default {
  name: 'base-field',
  inheritAttrs: false,
  props: {
    error: { type: String, default: '' }
  },
  components: { BaseInput }
}
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  margin-top: 1rem;
  border: 1px solid var(--color-gray-dark);
  border-radius: 5px;
  padding: 0.5rem 1rem;
}

.error {
  border-color: var(--color-error-dark);
}

.error-message {
  padding-left: 0.5rem;
  color: var(--color-error-dark);
  font-size: 0.7rem;

  &::after {
    content: " ";
    font-size: 0;
    white-space: pre;
  }
}
</style>
