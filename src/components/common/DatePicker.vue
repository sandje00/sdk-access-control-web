<template>
  <input
    @change="$emit('change', $event.target, value)"
    :value="value"
    v-bind="$attrs"
    type="date"
    class="date-picker">
</template>

<script>
export default {
  name: 'date-picker',
  props: {
    value: { type: String, default: '' }
  }
}
</script>

<style lang="scss" scoped>
.date-picker {
  padding: 0.5rem;
  background-color: var(--color-white);
  border: none;
  border-radius: 10px;
}
</style>
