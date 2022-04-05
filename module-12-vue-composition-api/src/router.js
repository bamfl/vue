import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import ReusePage from './views/ReusePage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/reuse', component: ReusePage },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});
