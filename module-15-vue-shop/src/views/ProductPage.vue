<template>
  <div class="card">
    <h2>PRODUCT PAGE</h2>
    {{ product }}
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { IProduct } from '@/types'
import { computed, onMounted, ComputedRef } from 'vue'

// eslint-disable-next-line no-undef
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const store = useStore()
const product: ComputedRef<IProduct> = computed(
  () => store.getters['shop/oneProduct']
)

onMounted(async () => {
  await store.dispatch('shop/getOneProductRequest', props.id)
})
</script>

<style scoped></style>
