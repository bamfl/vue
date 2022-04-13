<template>
  <div class="navbar">
    <div>Bank</div>
    <ul class="navbar-menu">
      <router-link to="/orders" :class="{ active: $route.path === '/' }">Заявки</router-link>
      <router-link to="/help">Помощь</router-link>
      <a @click.prevent="$emit('open-messages')">Сообщения</a>
      <a @click.prevent="logout">Выйти</a>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

function logout() {
  store.dispatch('logout')
  router.push('/auth')
}
</script>

<style lang="scss" scoped></style>
