<template>
  <div class="card">
    <h1>Корзина</h1>

    {{cartProducts}}

    <h3 v-if="!cartProducts" class="text-center">В корзине пока ничего нет</h3>

    <table v-else class="table">
      <thead>
        <tr>
          <th>Наименование</th>
          <th>Количество</th>
          <th>Цена (шт)</th>
        </tr>
      </thead>

      <tbody>
        <CartProduct
          v-for="product in cartProducts"
          :key="product.id"
          :product="product"
        />
      </tbody>
    </table>

    <hr>

    <p class="text-right"><strong>Всего: {{ amount }} руб.</strong></p>
    <p class="text-right">
      <button class="btn">Оплатить</button>
    </p>
  </div>
</template>

<script setup lang="ts">
import CartProduct from '../components/CartProduct.vue'
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()
const cartProducts = computed(() => store.getters['shop/cartProducts'])
const amount = computed(() => store.getters['shop/priceAmount'])

</script>

<style scoped></style>
