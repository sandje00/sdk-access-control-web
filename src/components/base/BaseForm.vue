<template>
  <validation-observer v-slot="{ handleSubmit }" slim>
    <form
      @submit.prevent="handleSubmit(submit)"
      class="flex-v justify-start align-stretch">
      <slot></slot>
    </form>
  </validation-observer>
</template>

<script>
import { ValidationObserver } from 'vee-validate';

export default {
  name: 'base-form',
  methods: {
    submit() {
      this.$emit('submit');
    }
  },
  components: { ValidationObserver }
};
</script>
