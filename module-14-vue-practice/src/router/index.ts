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
      { path: '/', component: () => import('../views/OrdersPage.vue'), alias: '/orders' },
      { path: '/help', component: () => import('../views/HelpPage.vue') },
      { path: '/orders/:orderId', component: () => import('../views/OrderPage.vue'), props: true }
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
