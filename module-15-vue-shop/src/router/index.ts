import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { store } from '../store'
import { computed } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'Shop',
        component: () => import('../views/ShopPage.vue')
      },
      {
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/ProductPage.vue'),
        props: true
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/CartPage.vue')
      }
    ]
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
