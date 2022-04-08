import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../views/TasksPage'

const routes = [
  {
    path: '/',
    alias: '/tasks',
    component: Tasks
  },
  {
    path: '/new',
    component: () => import('../views/NewTaskPage')
  },
  {
    path: '/task/:taskId',
    component: () => import('../views/TaskPage'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
