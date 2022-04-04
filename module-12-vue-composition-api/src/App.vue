<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <hr>
      <p>Название: <strong>{{ framework }}</strong></p>
      <p>Версия: <strong>{{ version }}</strong></p>

      <button class="btn" @click="changeVersion">Изменить</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const framework = ref('VueJS');
const version = ref(2);

function changeVersion() {
  framework.value = 'VueJS!';
  version.value = 3;
}
</script>
