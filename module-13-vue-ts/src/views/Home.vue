<template>
  <div class="card">
    <h1>Как Vue работает с TypeScript?</h1>

    <button class="btn" @click="goToUsers('/users')">Открыть пользователей</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToUsers = (path: string): void => {
  router.push(path)
}
</script>
