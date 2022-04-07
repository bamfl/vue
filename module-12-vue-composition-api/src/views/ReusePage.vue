<template>
  <AppAlert
    v-if="alert"
    type="primary"
    @close="close"
  >
    Attention!
  </AppAlert>

  <button
    class="btn primary"
    @click="toggle"
  >
    {{ alert ? 'Close' : 'Open' }} Alert
  </button>

  <br><br>

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
import AppAlert from '../components/AppAlert.vue';
import useAlert from '../use/useAlert';

const { alert, toggle, close } = useAlert();

const router = useRouter();
const route = useRoute();

function toHome() {
  router.push('/');
  console.log(route);
}
</script>

<style lang="scss" scoped></style>
