<template>
  <div class="login position-center flex justify-center align-center">
    <form class="login-form flex-v justify-start align-stretch">
      <base-input
        v-model="email"
        type="text"
        placeholder="E-mail"
        class="login-form-field"
      />
      <base-input
        v-model="password"
        type="password"
        placeholder="Password"
        class="login-form-field"
      />
      <button
        color="primary"
        depressed>
        Log In
      </button>
    </form>
  </div>
</template>

<script>
import BaseInput from './base/BaseInput';

export default {
  name: 'login-page',
  data: () => ({
    email: '',
    password: ''
  }),
  components: { BaseInput }
}
</script>

<style scoped lang="scss">
.login {
  background-color: var(--color-white);
  border: 1px solid var(--color-primary-light);
  border-radius: 5px;
  box-shadow: 0 0 8px var(--color-primary-light);

  &-form {
    padding: 2rem;

    &-field {
      margin-top: 1rem;
    }
  }
}
</style>
