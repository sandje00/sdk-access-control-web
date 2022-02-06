<template>
  <div class="modal">
    <div @click="$emit('close-modal')" class="modal-overlay"></div>
    <div class="modal-content">
      <div class="flex-h justify-space-between align-center">
          <h2 v-if="isEditMode" class="modal-title">
          Edit user
        </h2>
        <h2 v-else class="modal-title">
          Create user
        </h2>
        <base-button
          @click="$emit('close-modal')"
          text="X"
          class="modal-close"
          neutral
        ></base-button>
      </div>
      <base-form>
        <base-field
          v-model="userData.name"
          name="Name"
          :rules="{ required: true }"
          type="text"
          placeholder="First name"
        ></base-field>
        <base-field
          v-model.trim="userData.email"
          name="E-mail"
          :rules="{ required: true, email: true }"
          type="text"
          placeholder="E-mail"
        ></base-field>
        <base-field
          v-model="userData.role"
          name="Role"
          :rules="{ required: true }"
          type="text"
          placeholder="Role"
        ></base-field>
        <base-field
          v-model="userData.mac"
          name="Mac address"
          :rules="{ required: true }"
          type="text"
          placeholder="Mac address"
        ></base-field>
        <base-button
          text="Submit"
          class="align-self-center"
        ></base-button>
      </base-form>
    </div>
  </div>
</template>

<script>
import BaseButton from './common/BaseButton';
import BaseField from './common/BaseField';
import BaseForm from './common/BaseForm';
import pick from 'lodash/pick';

export default {
  name: 'user-modal',
  props: {
    id: { type: Number },
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    role: {
      type: String,
      default: 'USER',
      validator: val => ['USER', 'ADMIN'].includes(val)
    },
    mac: { type: String, default: '' }
  },
  data: () => ({
    userData: {}
  }),
  computed: {
    isEditMode() {
      return this.$props.id
        && this.$props.name
        && this.$props.email
        && this.$props.mac;
    }
  },
  created() {
    const attributes = ['id', 'name', 'email', 'role', 'mac' ];
    this.userData = pick(this.$props, attributes);
  },
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

  &-close {
    padding: 0.2rem 0.5rem;
    font-weight: 700;
  }
}
</style>
