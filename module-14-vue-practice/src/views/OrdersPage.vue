<template>
  <div class="card">
    <div class="row justify-between items-center">
      <h1>Заявки</h1>
      <button class="btn primary" @click="isModalOpened = true">Создать</button>

      <teleport
        v-if="isModalOpened"
        @close-modal="isModalOpened = false"
        to="body">
        <AppModal />
      </teleport>
    </div>
    <div class="row">
      <div class="form-control mr-24" style="width: 100%; max-width: 300px">
        <input type="text" placeholder="Введите имя" />
      </div>

      <div class="form-control" style="width: 100%; max-width: 300px">
        <select>
          <option value="all">Все</option>
          <option value="active">Активный</option>
          <option value="pending">В процессе</option>
          <option value="cancelled">Отменен</option>
          <option value="done">Готово</option>
        </select>
      </div>
    </div>

    <table class="orders-table">
      <thead>
        <tr>
          <th v-for="th in thS" :key="th">{{ th }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(order, idx) in orders" :key="order.id">
          <td>{{ idx + 1 }}</td>
          <td>{{ order.fullName }}</td>
          <td>{{ order.phone }}</td>
          <td>{{ order.amount }},00 ₽</td>
          <td><div :class="['badge', order.status]">{{ Status[`${order.status}`] }}</div></td>
          <td><button class="btn">Открыть</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import AppModal from '../components/AppModal.vue'
import { Ref, ref } from 'vue'

interface order {
  id: string,
  fullName: string,
  phone: string,
  amount: string,
  status: string
}

enum Status {
  active = 'Активный',
  pending = 'В процессе',
  cancelled = 'Отменен',
  done = 'Готово'
}

const isModalOpened = ref(false)

const thS = ref(['#', 'ФИО', 'Телефон', 'Сумма', 'Статус', 'Действие'])
const orders: Ref<order[]> = ref([
  {
    id: '1',
    fullName: 'Иванов Иван Иванович',
    phone: '+78005553535',
    amount: '1000000',
    status: 'done'
  }
])
</script>

<style scoped>

</style>
