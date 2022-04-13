<template>
  <div class="card">
    <form @submit.prevent="submit">
      <div class="form-control">
        <label for="email">Введите email</label>
        <input id="email" type="text" />
      </div>
      <div class="form-control">
        <label for="password">Введите пароль</label>
        <input id="password" type="password" />
      </div>

      <button class="btn primary">Вход</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useStore } from '../store'

const store = useStore()
const router = useRouter()

function submit(): void {
  store.dispatch('login')
  router.push('/orders')
}
</script>

<style scoped></style>
