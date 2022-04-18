<template>
  <div v-if="!order" class="card">
    <h3>Такой заявки не существует</h3>
    <button class="btn" @click="$router.push('/')">На главную</button>
  </div>

  <div v-else class="card">
    <h3>Заявка</h3>

    <p>Имя: {{ order.fullName }}</p>
    <p>Телефон: {{ order.phone }}</p>
    <p>Статус: <span :class="['badge', order.status]">{{ order.status }}</span></p>
    <p>Сумма: {{ order.amount }}</p>

    <div class="form-control" style="width: 100%">
      <select v-model="order.status" @change="changeStatus">
        <option value="active">Активный</option>
        <option value="pending">В процессе</option>
        <option value="cancelled">Отменен</option>
        <option value="done">Готово</option>
      </select>
    </div>

    <button class="btn danger" @click="deleteOrder">Удалить</button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { IOrder } from '../types/index'

// eslint-disable-next-line no-undef
const props = defineProps({
  orderId: {
    type: String,
    required: true
  }
})

// eslint-disable-next-line no-undef
const emit = defineEmits(['delete-order'])

const store = useStore()
const router = useRouter()

const order = computed(() => store.getters.orders.find((order: IOrder) => order.id === props.orderId) || null)

function changeStatus() {
  store.dispatch('changeOrderStatus', {
    id: order.value.id,
    updatedOrder: {
      status: order.value.status,
      fullName: order.value.fullName,
      amount: order.value.amount,
      phone: order.value.phone
    }
  })
}

function deleteOrder() {
  store.dispatch('deleteOrder', { id: order.value.id })
  router.push('/')
  emit('delete-order')
}
</script>

<style scoped></style>
