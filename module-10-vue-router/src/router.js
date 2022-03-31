import { createRouter, createWebHistory } from 'vue-router';
import Login from './views/Login.vue';
import Dashboard from './views/Dashboard.vue';
import Forget from './views/Forget.vue';
import Mail from './views/Mail.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Dashboard, alias: '/dashboard' },
    { path: '/login', component: Login },
    { path: '/forget', component: Forget },
    { path: '/mail/:mailId?', component: Mail }
  ],
  linkActiveClass: 'active'
})
