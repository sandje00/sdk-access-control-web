<template>
  <footer class="footer">
    Created by SDK
  </footer>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  color: var(--color-white);
  text-shadow: 0 0 2px var(--color-gray-light);
}
</style>
