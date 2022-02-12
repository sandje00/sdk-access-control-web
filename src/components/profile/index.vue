<template>
  <app-layout>
    <div class="profile">
      <div class="flex-h align-center container">
        <h1 class="profile-name">{{ user.name }}</h1>
        <button-icon @click="toggleModalOpen">
          <icon-edit icon-name="Edit" icon-color="#996eee">
          </icon-edit>
        </button-icon>
      </div>
      <profile-table :records="user.records">
      </profile-table>
    </div>
    <user-modal
      v-if="isModalOpen"
      v-bind="user"
      @close-modal="toggleModalOpen"
    ></user-modal>
  </app-layout>
</template>

<script>
import AppLayout from '../common/layout';
import ButtonIcon from '../common/ButtonIcon';
import IconEdit from '../common/icons/IconEdit';
import profileData from '../../data/profiles.json';
import ProfileTable from './ProfileTable';
import UserModal from '../UserModal';

export default {
  name: 'user-profile',
  props: {
    userId: { type: String, required: true }
  },
  data: () => ({
    user: {},
    isModalOpen: false
  }),
  created() {
    this.user = profileData.find(it => it.id == this.$props.userId);
    console.log(this.user)
  },
  methods: {
    toggleModalOpen() {
      this.isModalOpen = !this.isModalOpen;
    }
  },
  components: {
    AppLayout,
    ButtonIcon,
    IconEdit,
    ProfileTable,
    UserModal
  }
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
