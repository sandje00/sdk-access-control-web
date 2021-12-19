<template>
  <div class="login flex-v justify-center align-center">
    <div class="login-container flex-v justify-center align-center align-items-stretch">
      <app-logo class="logo" />
      <form class="login-form flex-v justify-start align-stretch">
        <base-field
          v-model="email"
          type="text"
          placeholder="E-mail"
        />
        <base-field
          v-model="password"
          type="password"
          placeholder="Password"
        />
        <base-button
          text="Log In"
          class="login-form-button align-self-center"
        />
      </form>
  </div>
  </div>
</template>

<script>
import AppLogo from './AppLogo';
import BaseButton from './base/BaseButton.vue';
import BaseField from './base/BaseField';

export default {
  name: 'login-page',
  data: () => ({
    email: '',
    password: ''
  }),
  components: {
    AppLogo,
    BaseField,
    BaseButton
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
    min-height: var(--spc-m);
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
