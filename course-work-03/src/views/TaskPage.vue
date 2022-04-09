<template>
  <div class="card" v-if="task">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :status="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
    <p><strong>Описание</strong>: {{ task.text }}</p>
    <div>
      <button @click="changeStatus('pending')" class="btn">Взять в работу</button>
      <button @click="changeStatus('finish')" class="btn primary">Завершить</button>
      <button @click="changeStatus('deny')" class="btn danger">Отменить</button>
    </div>
  </div>

  <h3 v-else class="text-white center">
    Задачи с id = <strong>{{ props.taskId }}</strong> нет.
  </h3>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import AppStatus from '../components/AppStatus'

const props = defineProps({
  taskId: {
    type: String,
    required: true
  }
})

const store = useStore()
const task = computed(() => store.getters.tasks.filter(task => task.id === props.taskId)[0])

const changeStatus = (status) => {
  store.dispatch('changeStatus', {
    id: task.value.id,
    status
  })
}

onMounted(() => {
  store.dispatch('getTasks')
})
</script>

<style scoped>
</style>
