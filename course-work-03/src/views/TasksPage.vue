<template>
  <h1 v-if="tasks.length === 0" class="text-white center">Задач пока нет</h1>

  <div v-else>
    <h3 class="text-white">Всего активных задач: {{ activeTasksCount }}</h3>

    <AppTask
      v-for="task in tasks"
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
import { computed, onMounted } from 'vue'

const store = useStore()
const tasks = computed(() => store.getters.tasks)
const activeTasksCount = computed(() => store.getters.activeTasks.length)

onMounted(() => {
  store.dispatch('getTasks')
})
</script>
