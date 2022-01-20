<template>
  <nav class="navigation flex-h justify-center align-center">
    <router-link :to="{ name: 'dashboard' }" class="navigation-link">
      <div class="flex-h align-center">
        <icon-dashboard icon-name="Dashboard" icon-color="#ffffff">
        </icon-dashboard>
        <span class="label">Dashboard</span>
      </div>
    </router-link>
    <router-link :to="{ name: 'profile' }" class="navigation-link">
      <div class="flex-h align-center">
        <icon-user icon-name="User" icon-color="#ffffff">
        </icon-user>
        <span class="label">My Profile</span>
      </div>
    </router-link>
    <router-link :to="{ name: 'settings' }" class="navigation-link">
      <div class="flex-h align-center">
        <icon-settings icon-name="Settings" icon-color="#ffffff">
        </icon-settings>
        <span class="label">Settings</span>
      </div>
    </router-link>
    <router-link :to="{ name: 'home' }" class="navigation-link">
      <div class="flex-h align-center">
        <icon-logout icon-name="Logout" icon-color="#ffffff">
        </icon-logout>
        <span class="label">Log Out</span>
      </div>
    </router-link>
  </nav>
</template>

<script>
import IconDashboard from '../icons/IconDashboard';
import IconLogout from '../icons/IconLogout';
import IconSettings from '../icons/IconSettings';
import IconUser from '../icons/IconUser';

export default {
  name: 'app-nav',
  components: {
    IconDashboard,
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
    text-decoration: none;
    color: var(--color-white);

    &:hover {
      background-color: var(--color-primary-dark);
    }

    .label {
      padding-left: 0.5rem;

      @media(max-width: 750px) {
        display: none;
      }
    }
  }
}
</style>
