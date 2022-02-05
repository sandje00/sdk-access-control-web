<template>
  <app-layout logged-in>
    <div class="profile">
      <div class="flex-h align-center container">
        <h1 class="profile-name">{{ fullName }}</h1>
        <button-icon>
          <icon-edit icon-name="Edit" icon-color="#996eee">
          </icon-edit>
        </button-icon>
      </div>
      <profile-table :records="user.records">
      </profile-table>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '../common/layout';
import ButtonIcon from '../common/ButtonIcon';
import IconEdit from '../common/icons/IconEdit';
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
  components: { AppLayout, ButtonIcon, IconEdit, ProfileTable }
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
    padding-right: 0.7rem;
    color: var(--color-primary);
  }

  .container {
    padding: 1rem 0;
  }
}
</style>
