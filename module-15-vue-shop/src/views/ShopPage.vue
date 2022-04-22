<template>
  <div class="card">
    <div v-for="product in products" :key="product.id" class="product-card">
      {{ `/product/${product.id}` }}
      <div class="product-img">
        <img :src="product.img" alt="Product image">
      </div>
      <div class="product-title">{{ product.title }}</div>
      <button class="btn" @click="$router.push(`/product/${product.id}`)">Открыть</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ComputedRef } from 'vue'
import { useStore } from '@/store'
import { IProduct } from '@/types'

const store = useStore()
const products: ComputedRef<IProduct[]> = computed(() => store.getters['shop/products'])

onMounted(async() => {
  await store.dispatch('shop/getProductsRequest')
})
</script>

<style scoped></style>
