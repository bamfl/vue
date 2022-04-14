<template>
  <div class="modal-backdrop" @click="$emit('close-modal')">
    <div class="modal">
      <h3>Создать заявку</h3>
      <form>
        <div class="form-control">
          <label>ФИО</label>
          <input type="text" />
        </div>

        <div class="form-control">
          <label>Телефон</label>
          <input type="tel" />
        </div>

        <div class="form-control">
          <label>Сумма</label>
          <input type="number" />
        </div>

        <div class="form-control">
          <label>Статус</label>
            <select>
              <option value="active">Активный</option>
              <option value="pending">В процессе</option>
              <option value="cancelled">Отменен</option>
              <option value="done">Готово</option>
            </select>
        </div>

        <button class="btn primary">Создать</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
defineEmits(['close-modal'])
</script>

<style scoped></style>
