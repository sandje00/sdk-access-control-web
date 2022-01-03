import AdminDashboard from './components/dashboard';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/dashboard', name: 'dashboard', component: AdminDashboard },
  { path: '/profile', name: 'profile', component: Profile },
  { path: '/settings', name: 'settings', component: Settings }
];

export default new VueRouter({ mode: 'history',  routes })
