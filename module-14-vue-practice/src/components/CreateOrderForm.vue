<template>
  <form @submit.prevent="createOrder">
    <div class="form-control">
      <label>ФИО</label>
      <input v-model="fullName" type="text" />
      <span v-if="!validateFullName()" class="danger">{{ fullNameError }}</span>
    </div>

    <div class="form-control">
      <label>Телефон</label>
      <input v-model="phone" type="tel" />
      <span v-if="!validatePhone()" class="danger">{{ phoneError }}</span>
    </div>

    <div class="form-control">
      <label>Сумма</label>
      <input v-model="amount" type="number" />
      <span v-if="!validateAmount()" class="danger">{{ amountError }}</span>
    </div>

    <div class="form-control">
      <label>Статус</label>
      <select v-model="status">
        <option value="active">Активный</option>
        <option value="pending">В процессе</option>
        <option value="cancelled">Отменен</option>
        <option value="done">Готово</option>
      </select>
    </div>

    <button class="btn primary" :disabled="!isValidForm">Создать</button>
  </form>
</template>

<script setup lang="ts">
import { computed, Ref, ref } from 'vue'
import { useStore } from '../store'

// eslint-disable-next-line no-undef
const emit = defineEmits(['close-form', 'create-order'])
const store = useStore()

const fullName = ref('')
const phone = ref('')
const amount = ref('')
const status = ref('active')

const fullNameError: Ref<string | null> = ref(null)
const phoneError: Ref<string | null> = ref(null)
const amountError: Ref<string | null> = ref(null)

function validateFullName() {
  if (fullName.value.length === 0) {
    fullNameError.value = 'Имя не может быть пустым'
    return false
  }

  fullNameError.value = null
  return true
}

function validatePhone() {
  if (phone.value.length === 0) {
    phoneError.value = 'Телефон не может быть пустым'
    return false
  }

  if (phone.value.length < 11) {
    phoneError.value = 'Телефон должен содержать 11 символов'
    return false
  }

  phoneError.value = null
  return true
}

function validateAmount() {
  if (amount.value.length === 0) {
    amountError.value = 'Сумма не может быть пустой'
    return false
  }

  amountError.value = null
  return true
}

const isValidForm = computed(() => {
  if (validateFullName() && validatePhone() && validateAmount() && status.value) {
    return true
  } else {
    return false
  }
})

function createOrder() {
  if (isValidForm.value) {
    store.dispatch('createOrder', {
      fullName: fullName.value,
      phone: phone.value,
      amount: amount.value,
      status: status.value
    })
      .then(() => emit('create-order'))
      .finally(() => emit('close-form'))
  }
}
</script>
<style scoped></style>
