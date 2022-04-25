<template>
  <tr>
    <td>{{ props.product.title }}</td>
    <td>
      <button class="btn danger" @click="decreaseCount(product)">-</button>
      {{ count }} шт.
      <button class="btn primary" @click="growCount">+</button>
    </td>
    <td>{{ priceByCount }} руб.</td>
  </tr>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { IProduct } from '@/types'
import { ref, computed } from 'vue'

interface Props {
  product: IProduct
}

// eslint-disable-next-line no-undef
const props = defineProps<Props>()

// eslint-disable-next-line no-undef
const emit = defineEmits(['updateAmount'])

const store = useStore()
const count = ref(props.product.count)

const priceByCount = computed(() => count.value * props.product.price)

function growCount() {
  count.value++
  store.commit('shop/setProductCartCount', { id: props.product.id, count: count.value })

  emit('updateAmount')
}

function decreaseCount(product: IProduct) {
  if (count.value === 1) {
    store.commit('shop/deleteProductFromCart', product)
  }

  count.value--

  if (count.value > 0) {
    store.commit('shop/setProductCartCount', { id: props.product.id, count: count.value })
  }

  emit('updateAmount')
}
</script>

<style scoped></style>
