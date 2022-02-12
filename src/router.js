import AdminDashboard from './components/dashboard';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/profile';
import Settings from './components/Settings';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: AdminDashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile/:userId',
    name: 'profile',
    component: Profile,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({ mode: 'history',  routes });

const isLoggedIn = () => localStorage.getItem('token');

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn())
    return next({ name: 'login' });
  else return next();
})

export default router;
