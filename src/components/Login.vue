<template>
  <div class="login position-center flex justify-center align-center">
    <form class="login-form flex-v justify-start align-stretch">
      <input
        v-model="email"
        type="text"
        label="E-mail"
      >
      <input
        v-model="password"
        type="password"
        label="Password"
      >
      <button
        color="primary"
        depressed>
        Log In
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login-page',
  data: () => ({
    email: '',
    password: ''
  })
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
  }
}
</style>
