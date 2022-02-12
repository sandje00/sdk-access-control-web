<template>
  <app-layout centered-content>
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
    <base-snackbar
      v-if="message"
      @close-snackbar="closeSnackbar"
      :message="message"
      class="message"
      error
    ></base-snackbar>
  </app-layout>
</template>

<script>
import api from '../api/auth';
import AppLayout from './common/layout';
import AppLogo from './common/AppLogo';
import BaseButton from './common/BaseButton';
import BaseField from './common/BaseField';
import BaseForm from './common/BaseForm';
import BaseSnackbar from './common/BaseSnackbar';
import pick from 'lodash/pick';

export default {
  name: 'login-page',
  data: () => ({
    email: '',
    password: '',
    message: ''
  }),
  methods: {
    login() {
      const credentials = pick(this, ['email', 'password']);
      api
        .login(credentials)
        .then(res => {
          if (this.message) this.closeSnackbar();
          localStorage.setItem('token', res.data);
          this.$router.push({ name: 'dashboard' });
        })
        .catch(err => {
          this.message = err.response.data.msg;
        });
    },
    closeSnackbar() {
      this.message = '';
    }
  },
  components: {
    AppLayout,
    AppLogo,
    BaseButton,
    BaseField,
    BaseForm,
    BaseSnackbar
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

.message {
  position: fixed;
  bottom: 5%;
}
</style>
