<template>
  <div :class="['alert', props.type]">
    <h3><slot name="title" /></h3>
    <p><slot name="text" /></p>
    <div class="alert-close" @click="$emit('close-alert')">x</div>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps({
  type: {
    type: String,
    required: true
  }
})

// eslint-disable-next-line no-undef
defineEmits(['close-alert'])
</script>

<style scoped></style>
