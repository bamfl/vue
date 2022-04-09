<template>
  <h1 v-if="tasks.length === 0" class="text-white center">Задач пока нет</h1>

  <div v-else>
    <div class="row">
      <h3 class="text-white">Всего активных задач: {{ activeTasksCount }}</h3>
      <label class="text-white">
        Фильтрация по статусу:
        <select v-model="statusFilter">
          <option value="all">Все</option>
          <option value="pending">В работе</option>
          <option value="active">Активная</option>
          <option value="cancelled">Завершена</option>
          <option value="deny">Отменена</option>
        </select>
      </label>
    </div>

    <AppTask
      v-for="task in filteredByStatusTodos"
      :key="task.id"
      :id="task.id"
      :title="task.title"
      :text="task.text"
      :date="task.date"
      :status="task.status"
    />
  </div>

</template>

<script setup>
import AppTask from '../components/AppTask.vue'
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'

const store = useStore()
const tasks = computed(() => store.getters.tasks)
const activeTasksCount = computed(() => store.getters.activeTasks.length)
const statusFilter = ref('all')

const filteredByStatusTodos = computed(() => {
  if (statusFilter.value === 'all') {
    return store.getters.tasks
  } else {
    return store.getters.filteredByStatusTodos(statusFilter.value)
  }
})

onMounted(() => {
  store.dispatch('getTasks')
})
</script>
