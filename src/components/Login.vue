<template>
  <app-layout :logged-in="false" centered-content>
    <div class="login flex-v justify-center align-center align-items-stretch">
      <app-logo class="logo"></app-logo>
      <base-form @submit="login" class="login-form">
        <base-field
          v-model.trim="email"
          name="E-mail"
          :rules="{ required: true, email: true }"
          type="text"
          placeholder="E-mail"
        ></base-field>
        <base-field
          v-model="password"
          name="Password"
          :rules="{ required: true }"
          type="password"
          placeholder="Password"
        ></base-field>
        <base-button
          text="Log In"
          class="login-form-button align-self-center"
        ></base-button>
      </base-form>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from './common/layout';
import AppLogo from './common/AppLogo';
import BaseButton from './common/BaseButton';
import BaseField from './common/BaseField';
import BaseForm from './common/BaseForm';

export default {
  name: 'login-page',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    login() { this.$router.push({ name: 'dashboard' }) }
  },
  components: {
    AppLayout,
    AppLogo,
    BaseButton,
    BaseField,
    BaseForm
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  max-width: 20rem;
  align-items: stretch;
  margin: 0 auto;
  background: var(--color-white);
  border-radius: 5px;
  box-shadow: 0 0 8px var(--color-primary-light);

  .logo {
    margin-top: 0.5rem;
  }

  &-form {
    padding: 2rem;

    &-button {
      margin-top: 1rem;
    }
  }
}
</style>
