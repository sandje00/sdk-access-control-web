<template>
  <base-button
    v-on="$listeners"
    text="+"
    class="add-button"
  ></base-button>
</template>

<script>
import BaseButton from './BaseButton'

export default {
  name: 'add-button',
  components: { BaseButton }
}
</script>

<style lang="scss" scoped>
.add-button {
  padding: 1rem;
  border-radius: 50%;
  height: 3.5rem;
  width: 3.5rem;
  font-size: 1.5rem;
}
</style>
