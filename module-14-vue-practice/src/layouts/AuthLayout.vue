<template>
  <AppAlert v-if="alert" type="danger" @close-alert="alert = null">
    <template #title>Ошибка!</template>
    <template #text>{{ alert }}</template>
  </AppAlert>

  <AuthForm :alert="alert" @set-alert="setAlert" />
</template>

<script setup lang="ts">
import AuthForm from '../components/AuthForm.vue'
import AppAlert from '../components/AppAlert.vue'
import { Ref, ref } from 'vue'

const alert: Ref<string> | Ref<null> = ref(null)

function setAlert(value: string) {
  alert.value = value
}
</script>

<style scoped></style>
