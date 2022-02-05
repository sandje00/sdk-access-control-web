<template>
  <div class="modal">
    <div @click="$emit('close-modal')" class="modal-overlay"></div>
    <div class="modal-content">
      <h2 v-if="Object.keys($props.user).length === 0" class="modal-title">
        Create user
      </h2>
      <h2 v-else class="modal-title">
        Edit user
      </h2>
      <base-form>
        <base-field
          v-model="firstName"
          name="First name"
          :rules="{ required: true }"
          type="text"
          placeholder="First name"
        ></base-field>
        <base-field
          v-model="lastName"
          name="Last name"
          :rules="{ required: true }"
          type="text"
          placeholder="Last name"
        ></base-field>
        <base-field
          v-model.trim="email"
          name="E-mail"
          :rules="{ required: true, email: true }"
          type="text"
          placeholder="E-mail"
        ></base-field>
        <base-field
          v-model="role"
          name="Role"
          :rules="{ required: true }"
          type="text"
          placeholder="Role"
        ></base-field>
        <base-field
          v-model="mac"
          name="Mac address"
          :rules="{ required: true }"
          type="text"
          placeholder="Mac address"
        ></base-field>
        <base-button
          text="Submit"
          class=""
        ></base-button>
      </base-form>
    </div>
  </div>
</template>

<script>
import BaseButton from './common/BaseButton';
import BaseField from './common/BaseField';
import BaseForm from './common/BaseForm';

export default {
  name: 'user-modal',
  props: {
    user: { type: Object, default: () => ({}) }
  },
  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    mac: ''
  }),
  components: { BaseButton, BaseField, BaseForm }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: var(--z-modal);

  &-overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: var(--z-modal-overlay);
    background: rgba(0,0,0,0.85);
  }

  &-content {
    z-index: var(--z-modal-content);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 90%;
    overflow: auto;
    background: var(--color-white);
    padding: 20px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.7);
    border-radius: 4px;
    width: 25rem;

    @media(max-width: 600px) {
      width: 80vw;
    }
  }

  &-title {
    color: var(--color-primary-light);
  }
}
</style>
