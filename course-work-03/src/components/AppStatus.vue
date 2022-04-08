<template>
  <span :class="['badge', props.status]">{{ props.status }}</span>
</template>

<script setup>
const props = defineProps({
  status: {
    type: String,
    required: true
  }
})
</script>
