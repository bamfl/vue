<template>
  <div class="card">
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col">
        <ShopCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ComputedRef } from 'vue'
import { useStore } from '@/store'
import { IProduct } from '@/types'
import ShopCard from '@/components/ShopCard.vue'

const store = useStore()
const products: ComputedRef<IProduct[]> = computed(() => store.getters['shop/products'])

onMounted(async() => {
  await store.dispatch('shop/getProductsRequest')
})
</script>

<style scoped></style>
