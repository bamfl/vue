<template>
  <div class="card">
    <h2 class="card-title">
      <div>{{ props.title }}</div>
      <AppStatus :status="props.status" />
    </h2>
    <p>
      <strong>
        <small>
          {{ props.date }}
        </small>
      </strong>
    </p>

    <button class="btn primary" @click="$router.push(`/task/${props.id}`)">Посмотреть</button>
  </div>
</template>

<script setup>
import AppStatus from './AppStatus.vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})

</script>

<style lang="scss" scoped>

</style>
