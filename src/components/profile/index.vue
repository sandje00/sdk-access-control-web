<template>
  <app-layout logged-in>
    <div class="profile">
      <h1 class="profile-name">{{ fullName }}</h1>
      <profile-table :records="user.records">
      </profile-table>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '../common/layout';
import profileData from '../../data/profiles.json';
import ProfileTable from './ProfileTable';

export default {
  name: 'user-profile',
  props: {
    userId: { type: String, required: true }
  },
  data: () => ({
    user: {}
  }),
  computed: {
    fullName() { return this.user.firstName + ' ' + this.user.lastName }
  },
  created() {
    this.user = profileData.find(it => it.id == this.$props.userId);
  },
  components: { AppLayout, ProfileTable }
}
</script>

<style lang="scss" scoped>
.profile {
  margin-top: 8vh;
  padding: 0 8vw;
  max-width: 90vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  &-name {
    padding: 1rem 0;
    color: var(--color-primary);
  }
}
</style>
