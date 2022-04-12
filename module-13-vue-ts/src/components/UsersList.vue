<template>
  <ul class="list">
    <li class="list-item" v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
</template>

<script setup lang="ts">
import { useUsers } from '@/use/users';

const users = await useUsers();
</script>

<style scoped></style>
