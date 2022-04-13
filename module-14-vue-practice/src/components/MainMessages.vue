<template>
  <div v-if="props.isOpen" class='sidebar'>
    <p class="sidebar-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ad quis reiciendis et illum quidem dolor doloremque unde est veniam accusantium porro, autem consequatur. Quia magni perspiciatis adipisci facere ullam?</p>
    <div class="sidebar-close" @click="$emit('close-messages')">x</div>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

// eslint-disable-next-line
defineEmits(['close-messages'])
</script>

<style scoped>

</style>
