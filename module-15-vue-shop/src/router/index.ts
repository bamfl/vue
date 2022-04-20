import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { store } from '../store'
import MainLayout from '@/layouts/MainLayout.vue'
import { computed } from 'vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: MainLayout
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../layouts/AuthLayout.vue')
  },
  {
    path: '/:notFound(.*)*',
    component: () => import('../layouts/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router

const isAuth = computed(() => store.getters['auth/isAuth'])

router.beforeEach(async (to) => {
  if (!isAuth.value && to.name !== 'Auth') {
    return '/auth?login=false'
  }
})
