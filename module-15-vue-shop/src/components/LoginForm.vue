<template>
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
import { useLoginForm } from '../use/loginForm'

const { email, password, eEmail, ePassword, eBlur, pBlur, submit, isValidForm } = useLoginForm()
</script>

<style scoped></style>
