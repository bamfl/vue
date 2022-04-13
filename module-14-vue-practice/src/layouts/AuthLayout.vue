<template>
  <div class="card">
    <form @submit.prevent="submit">
      <div class="form-control">
        <label for="email">Введите email</label>
        <input v-model="email" id="email" type="text" />
      </div>
      <div class="form-control">
        <label for="password">Введите пароль</label>
        <input v-model="password" id="password" type="password" />
      </div>

      <button class="btn primary">Вход</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '../store'

const store = useStore()
const router = useRouter()

const email = ref('')
const password = ref('')

function submit(): void {
  store.dispatch('login', {
    email: email.value,
    password: password.value
  }).then(() => {
    router.push('/orders')
  })
}
</script>

<style scoped></style>
