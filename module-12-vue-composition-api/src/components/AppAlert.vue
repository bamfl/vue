<template>
  <div
    :class="['alert', props.type]"
    @click="$emit('close')"
    @keypress="$emit('close')"
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

defineEmits(['close']);
</script>

<style lang="scss" scoped>
</style>
