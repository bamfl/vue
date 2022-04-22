<template>
  <AppAlert v-if="alert" :type="alert.type" @close="deleteAlert">
    <template #title>{{ alert.title }}</template>
    <template #message>{{ alert.message }}</template>
  </AppAlert>

  <div class="card">
    <h2>Войдите в систему</h2>

    <form @submit.prevent="submit" autocomplete="off">
      <div class="form-control">
        <label>Введите email</label>
        <input v-model="email" type="text" @blur="eBlur" />
        <small>{{ eEmail }}</small>
      </div>

      <div class="form-control">
        <label>Введите пароль</label>
        <input v-model="password" type="password" @blur="pBlur" />
        <small>{{ ePassword }}</small>
      </div>

      <button class="btn primary" :disabled="!isValidForm">Вход</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '../store'
import { useLoginForm } from '../use/loginForm'
import AppAlert from './AppAlert.vue'

const store = useStore()

const alert = computed(() => store.getters.alert)

const { email, password, eEmail, ePassword, eBlur, pBlur, submit, isValidForm, deleteAlert } = useLoginForm()
</script>

<style scoped></style>
