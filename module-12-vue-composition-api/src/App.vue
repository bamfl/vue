<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <hr>
      <p>Название: <strong>{{ framework }}</strong></p>
      <p>Версия: <strong>{{ version }}</strong></p>

      <div class="row">
        <div class="mr-10">{{ car.year }}</div>
        <div>{{ car.brand }}</div>
      </div>

      <div class="row">
        <div class="mr-10">{{ plane.passangers }}</div>
        <div>{{ plane.year }}</div>
      </div>

      <button class="btn" @click="changeInfo">Изменить</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const framework = ref('VueJS');
const version = ref(2);

const car = ref({
  year: 2020,
  brand: 'Mazda'
});

const plane = reactive({
  passangers: 200,
  year: 2010
})

function changeInfo() {
  console.log(framework); // framework - RefImpl
  console.log(framework.value); // framework.value - value
  framework.value = 'VueJS!';
  version.value = 3;

  console.log(car); // car - RefImpl
  console.log(car.value); // car.value - Proxy
  car.value.year = 2022;
  car.value.brand = 'Toyota';

  console.log(plane); // plane - Proxy
  console.log(plane.passangers); // plane.passangers - value
  plane.passangers = 150;
  plane.year = 2014;
}
</script>
