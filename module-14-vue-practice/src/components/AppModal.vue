<template>
  <div class="modal-backdrop" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <h3>Создать заявку</h3>
      <CreateOrderForm
        @close-form="$emit('close-modal')"
        @create-order="$emit('create-order')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CreateOrderForm from './CreateOrderForm.vue'
</script>

<style scoped></style>
