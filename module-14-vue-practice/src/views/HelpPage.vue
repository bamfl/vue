<template>
  <div class="card">
    <h2>Помощь</h2>

    <AppAccordion>
      <template #title>Что есть в данной системе?</template>
      <template #text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente, vel mollitia ullam</template>
    </AppAccordion>

    <AppAccordion>
      <template #title>Как работает авторизация?</template>
      <template #text>Через Firebase</template>
    </AppAccordion>
  </div>
</template>

<script setup lang="ts">
import AppAccordion from '../components/AppAccordion.vue'
</script>

<style scoped></style>
