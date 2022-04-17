<template>
  <h3 @click="isOpened = !isOpened">
    <slot name="title"></slot>
  </h3>

  <div v-if="isOpened" class="shadow">
    <slot name="text"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpened = ref(false)
</script>

<style scoped>
h3 {
  cursor: pointer;
}
.shadow {
  background: #e6e6e6;
  padding: 15px;
  border-radius: 15px;
}
</style>
