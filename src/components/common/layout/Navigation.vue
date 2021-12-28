<template>
  <nav class="navigation flex-h justify-center align-center">
    <router-link :to="{ name: 'home' }" class="navigation-link">
      <icon-user icon-name="User" icon-color="#ffffff">
      </icon-user>
    </router-link>
    <router-link :to="{ name: 'home' }" class="navigation-link">
      <icon-settings icon-name="Settings" icon-color="#ffffff">
      </icon-settings>
    </router-link>
    <router-link :to="{ name: 'home' }" class="navigation-link">
      <icon-logout icon-name="Logout" icon-color="#ffffff">
      </icon-logout>
    </router-link>
  </nav>
</template>

<script>
import IconLogout from '../icons/IconLogout';
import IconSettings from '../icons/IconSettings';
import IconUser from '../icons/IconUser';

export default {
  name: 'app-navigation',
  components: {
    IconLogout,
    IconSettings,
    IconUser
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  &-link {
    padding: 1rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      transition: all 0.2s;
    }
  }
}
</style>
