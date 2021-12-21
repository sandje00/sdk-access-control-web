<template>
  <validation-provider
    v-slot="{ errors }"
    :name="name"
    :rules="rules"
  >
    <slot><base-input v-on="$listeners" v-bind="$attrs" :class="{ error: errors[0] }" class="input" /></slot>
    <span class="error-message">{{ errors[0] }}</span>
  </validation-provider>
</template>

<script>
import BaseInput from './BaseInput';
import { ValidationProvider } from 'vee-validate';

export default {
  name: 'base-field',
  inheritAttrs: false,
  props: {
    name: { type: String, required: true },
    rules: { type: [String, Object], required: true }
  },
  components: { BaseInput, ValidationProvider }
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
