<template>
  <nav class="navigation flex-h justify-center align-center">
    <router-link
      :to="{ name: 'dashboard' }"
      :class="{ 'active': pathName === 'dashboard' }"
      class="navigation-link"
    >
      <div class="flex-h align-center">
        <icon-dashboard icon-name="Dashboard" icon-color="#ffffff">
        </icon-dashboard>
        <span class="label">Dashboard</span>
      </div>
    </router-link>
    <router-link
      :to="{ name: 'profile', params: { userId } }"
      :class="{ 'active': pathName === 'profile' && paramUserId == userId }"
      class="navigation-link"
    >
      <div class="flex-h align-center">
        <icon-user icon-name="User" icon-color="#ffffff">
        </icon-user>
        <span class="label">My Profile</span>
      </div>
    </router-link>
    <router-link
      :to="{ name: 'settings' }"
      :class="{ 'active': pathName === 'settings' }"
      class="navigation-link"
    >
      <div class="flex-h align-center">
        <icon-settings icon-name="Settings" icon-color="#ffffff">
        </icon-settings>
        <span class="label">Settings</span>
      </div>
    </router-link>
    <button @click="logout" class="logout">
      <div class="flex-h align-center">
        <icon-logout icon-name="Logout" icon-color="#ffffff">
        </icon-logout>
        <span class="label">Log Out</span>
      </div>
    </button>
  </nav>
</template>

<script>
import IconDashboard from '../icons/IconDashboard';
import IconLogout from '../icons/IconLogout';
import IconSettings from '../icons/IconSettings';
import IconUser from '../icons/IconUser';

export default {
  name: 'app-nav',
  data: () => ({
    userId: '1'
  }),
  computed: {
    pathName() {
      return this.$route.name;
    },
    paramUserId() {
      return this.$route.params.userId;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push({ name: 'home' });
    }
  },
  components: {
    IconDashboard,
    IconLogout,
    IconSettings,
    IconUser
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/base/_typography';

.navigation {
  &-link {
    padding: 1rem;
    cursor: pointer;
    text-decoration: none;
    color: var(--color-white);

    &:hover {
      background-color: var(--color-primary-dark);
    }

    &.active {
      border-bottom: 4px solid var(--color-white);
    }
  }
}

.logout {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-white);
  padding: 0 1rem;
  font-family: $font-family-primary;
  font-size: 0.95rem;

  &:hover {
    background-color: var(--color-primary-dark);
    padding: 1rem;
  }
}

.label {
  padding-left: 0.5rem;

  @media(max-width: 750px) {
    display: none;
  }
}
</style>
