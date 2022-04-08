<template>
  <form class="card" @submit.prevent="createNewTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input v-model="title" type="text" id="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input v-model="date" type="date" id="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea v-model="text" id="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValid">Создать</button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const title = ref('')
const date = ref('')
const text = ref('')

const isValid = computed(() => {
  if (title.value.length > 0 && date.value.length > 0 && text.value.length > 0) {
    return true
  } else {
    return false
  }
})

const createNewTask = () => {
  if (isValid.value) {
    store.dispatch('createNewTask', {
      title: title.value,
      date: date.value,
      text: text.value,
      status: new Date(date.value) >= new Date().setUTCHours(0, 0, 0, 0) ? 'active' : 'cancelled'
    })

    title.value = ''
    date.value = ''
    text.value = ''
  }
  router.push('/')
}
</script>
