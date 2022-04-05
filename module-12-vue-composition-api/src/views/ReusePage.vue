<template>
  <div class="card">
    <h2>Переиспользование</h2>

    <button class="btn primary">
      Показать сообщение
    </button>

    <button
      class="btn"
      @click="toHome"
    >
      На главную
    </button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

function toHome() {
  router.push('/');
  console.log(route);
}
</script>

<style lang="scss" scoped></style>
