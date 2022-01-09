<template>
  <input
    @change="$emit('change', $event.target, value)"
    :value="value"
    v-bind="$attrs"
    type="date">
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

</style>
