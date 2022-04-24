<template>
  <div class="product-card">
    <div class="product-img">
      <img :src="props.product.img" alt="product image" />
    </div>

    <div class="product-title">{{ props.product.title }}</div>

    <hr />

    <div>id: {{ props.product.id }}</div>
    <div>count: {{ props.product.count }}</div>
    <div>category: {{ props.product.category }}</div>
    <div>price: {{ props.product.price }}</div>
    <div>isInCart: {{ isInCart }}</div>

    <hr />

    <div class="product-controls">
      <button class="btn" @click="$router.push(`/product/${props.product.id}`)">Открыть</button>
      <button v-if="!isInCart" class="btn primary" @click="addProductToCart">В корзину</button>
      <button v-else class="btn danger" @click="deleteProductFromCart">Удалить</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IProduct } from '@/types'
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()
const cartProducts = computed(() => store.getters['shop/cartProducts'])

interface Props {
  product: IProduct
}
// eslint-disable-next-line no-undef
const props = defineProps<Props>()

const isInCart = computed(() => {
  if (cartProducts.value) {
    return cartProducts.value.some((prod: IProduct) => prod.id === props.product.id)
  }
  return false
})

function addProductToCart() {
  store.commit('shop/addProductToCart', props.product)
}

function deleteProductFromCart() {
  store.commit('shop/deleteProductFromCart', props.product)
}
</script>

<style scoped></style>
