<template>
  <div class="card">
    <h1>Пользователи</h1>

    <Suspense>
      <UsersList />
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import UsersList from '../components/UsersList.vue'
</script>
