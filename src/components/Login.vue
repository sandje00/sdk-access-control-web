<template>
  <div class="login flex-v justify-center align-center">
    <div class="login-container flex-v justify-center align-center align-items-stretch">
      <app-logo class="logo" />
      <base-form @submit="login" class="login-form">
        <base-field
          v-model.trim="email"
          name="E-mail"
          :rules="{ required: true, email: true }"
          type="text"
          placeholder="E-mail"
        />
        <base-field
          v-model="password"
          name="Password"
          :rules="{ required: true }"
          type="password"
          placeholder="Password"
        />
        <base-button
          text="Log In"
          class="login-form-button align-self-center"
        />
      </base-form>
  </div>
  </div>
</template>

<script>
import AppLogo from './AppLogo';
import BaseButton from './base/BaseButton';
import BaseField from './base/BaseField';
import BaseForm from './base/BaseForm';

export default {
  name: 'login-page',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    login() { console.log('Login') }
  },
  components: {
    AppLogo,
    BaseButton,
    BaseField,
    BaseForm
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background: var(--color-secondary);

  &-container {
    width: 100%;
    max-width: 20rem;
    align-items: stretch;
    margin: 0 auto;
    background: var(--color-white);
    border-radius: 5px;
    box-shadow: 0 0 8px var(--color-primary-light);
  }

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
