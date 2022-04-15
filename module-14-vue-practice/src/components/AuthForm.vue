<template>
  <div class="card">
    <form @submit.prevent="submit" autocomplete="off">
      <div class="form-control">
        <label>Введите email</label>
        <input v-model="email" @input="validateEmail" type="text" />
        <span v-if="!validateEmail()" class="danger">{{ emailError }}</span>
      </div>
      <div class="form-control">
        <label>Введите пароль</label>
        <input v-model="password" @input="validatePassword" type="password" />
        <span v-if="!validatePassword()" class="danger">{{ passwordError }}</span>
      </div>

      <button class="btn primary" :disabled="!isValidForm">Вход</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '../store'

// eslint-disable-next-line no-undef
const emit = defineEmits(['set-alert'])

const store = useStore()
const router = useRouter()

const email = ref('')
const password = ref('')

const emailError = ref('')
const passwordError = ref('')

function validateEmail(): boolean {
  // eslint-disable-next-line no-useless-escape
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (email.value.match(mailformat)) {
    return true
  }

  if (email.value.length === 0) {
    emailError.value = 'Email не может быть пустым'
    return false
  }

  emailError.value = 'Неверный Email'
  return false
}

function validatePassword(): boolean {
  if (password.value.length === 0) {
    passwordError.value = 'Пароль не может быть пустым'
    return false
  }

  if (password.value.length < 6) {
    passwordError.value = 'Минимальная длина пароля 6 символов'
    return false
  }

  passwordError.value = ''
  return true
}

const isValidForm = computed(() => validateEmail() && validatePassword())

function submit(): void {
  if (isValidForm.value) {
    store.dispatch('login', {
      email: email.value,
      password: password.value
    })
      .then((res) => {
        if (res?.error?.message) {
          if (res.error.message === 'EMAIL_NOT_FOUND') {
            emit('set-alert', 'Пользователя с таким Email не существует')
          }

          if (res.error.message === 'INVALID_PASSWORD') {
            emit('set-alert', 'Неверный пароль')
          }
        } else {
          router.push('/orders')
        }
      })
  }
}
</script>

<style scoped>

</style>
