<template>
  <nav class="navigation flex-h justify-center align-center">
    <router-link :to="{ name: 'home' }" class="navigation-link">
      My Profile
    </router-link>
    <router-link :to="{ name: 'home' }" class="navigation-link">
      Settings
    </router-link>
    <router-link :to="{ name: 'home' }" class="navigation-link">
      Log Out
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'desktop-nav'
}
</script>

<style lang="scss" scoped>
.navigation {
  &-link {
    padding: 1rem;
    cursor: pointer;
    text-decoration: none;
    color: var(--color-white);

    &:hover {
      background-color: var(--color-primary-dark);
    }
  }
}
</style>
