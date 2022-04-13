import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/auth',
    component: AuthLayout
  },
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('../views/OrdersPage.vue') },
      { path: '/help', component: () => import('../views/HelpPage.vue') },
      { path: '/orders', component: () => import('../views/OrdersPage.vue') }
    ]
  },
  {
    path: '/:notFound(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
