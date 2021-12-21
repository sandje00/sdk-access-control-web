import App from './App.vue';
import { extendRules } from './utils/validation';
import router from './router';
import Vue from 'vue';

extendRules();

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
