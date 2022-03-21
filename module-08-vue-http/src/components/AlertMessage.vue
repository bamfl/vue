<template>
  <div class="container">
    <div :class="['alert', 'card', type]">
      <slot></slot>
      <button class="btn primary" @click="$emit('close-alert')">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['close-alert'],
  props: {
    type: String
  }
}
</script>

<style lang="scss" scoped>

</style>