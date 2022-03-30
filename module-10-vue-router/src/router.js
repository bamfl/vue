import { createRouter, createWebHistory } from 'vue-router';
import Login from './views/Login.vue';
import Dashboard from './views/Dashboard.vue';
import Forget from './views/Forget.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Login, alias: '/login' },
    { path: '/dashboard', component: Dashboard },
    { path: '/forget', component: Forget },
  ]
})