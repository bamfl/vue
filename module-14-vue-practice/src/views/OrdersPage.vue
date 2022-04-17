<template>
  <AppAlert v-if="alert" type="primary" @close-alert="alert = null">
    <template #title>Успешно!</template>
    <template #text>Новая заявка создана</template>
  </AppAlert>

  <div class="card">
    !!!!!!{{ alert }}
    <div class="row justify-between items-center">
      <h1>Заявки</h1>
      <button class="btn primary" @click="isModalOpened = true">Создать</button>

      <teleport
        v-if="isModalOpened"
        to="body">
        <AppModal
          @close-modal="isModalOpened = false"
          @create-order="alert = true"
        />
      </teleport>
    </div>
    <div class="row">
      <div class="form-control mr-24" style="width: 100%; max-width: 300px">
        <input v-model="fullName" type="text" placeholder="Введите имя" />
      </div>

      <div class="form-control" style="width: 100%; max-width: 300px">
        <select v-model="status">
          <option value="all">Все</option>
          <option value="active">Активный</option>
          <option value="pending">В процессе</option>
          <option value="cancelled">Отменен</option>
          <option value="done">Готово</option>
        </select>
      </div>
    </div>

    <h3 v-if="!filteredOrders.length">Заявок еще нет, создайте новую</h3>

    <table v-else class="orders-table">
      <thead>
        <tr>
          <th v-for="th in thS" :key="th">{{ th }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(order, idx) in filteredOrders" :key="order.id">
          <td>{{ idx + 1 }}</td>
          <td>{{ order.fullName }}</td>
          <td>{{ order.phone }}</td>
          <td>{{ (+order.amount as number).toFixed(2) }} ₽</td>
          <td><div :class="['badge', order.status]">{{ EStatus[`${order.status}`] }}</div></td>
          <td><button class="btn">Открыть</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import AppAlert from '../components/AppAlert.vue'
import AppModal from '../components/AppModal.vue'
import { computed, onMounted, ComputedRef, ref, Ref } from 'vue'
import { IOrder, EStatus } from '@/types'
import { useStore } from '@/store'

const alert: Ref<boolean> | Ref<null> = ref(false)

const isModalOpened = ref(false)
const store = useStore()

const thS = ref(['#', 'ФИО', 'Телефон', 'Сумма', 'Статус', 'Действие'])

const fullName = ref('')
const status = ref('all')

function filterConditionsFunction(order: IOrder) {
  if (
    (order.fullName.toLowerCase().includes(fullName.value) || fullName.value === '') &&
    (order.status === status.value || status.value === 'all')) {
    return true
  } else {
    return false
  }
}

const filteredOrders: ComputedRef = computed(() => store.getters.filteredOrderes(filterConditionsFunction))

onMounted(() => {
  store.dispatch('getOrders')
})
</script>

<style scoped></style>
