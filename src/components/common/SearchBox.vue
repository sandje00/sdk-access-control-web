<template>
  <div class="search-box flex-h align-center">
    <icon-search icon-name="Search" icon-color="#acacac"></icon-search>
    <base-input v-on="$listeners" v-bind="$attrs"></base-input>
  </div>
</template>

<script>
import BaseInput from './BaseInput';
import IconSearch from './icons/IconSearch';

export default {
  name: 'search-box',
  components: { BaseInput, IconSearch }
}
</script>

<style lang="scss" scoped>
.search-box {
  width: 15rem;
  height: 2rem;
  padding: 0.5rem;
  background-color: var(--color-white);
  border: none;
  border-radius: 10px;
}
</style>
