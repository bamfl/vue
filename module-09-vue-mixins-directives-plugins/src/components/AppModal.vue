<template>
  <div class="modal-backdrop" @click="$emit('closeModal')">
    <div class="modal">
      <h2><slot name="title">Modal</slot></h2>
      <p><slot name="text"></slot></p>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['closeModal']
}
</script>

<style lang="scss" scoped>

</style>