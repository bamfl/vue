<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <hr />
      <p>
        Название: <strong>{{ framework }}</strong>
      </p>
      <p>
        Версия: <strong>{{ version }} ({{ doubleVersion }}) ({{ tripleVersion }})</strong>
      </p>

      <div class="row">
        <div class="mr-10">{{ car.year }}</div>
        <div>{{ car.brand }}</div>
      </div>

      <div class="row">
        <div class="mr-10">{{ plane.passangers }}</div>
        <div>{{ plane.year }}</div>
      </div>

      <button class="btn" @click="changeInfo">Изменить</button>

      <br /><br />

      <div class="form-control">
        <input type="text" ref="name" />
      </div>

      <button class="btn" @click="getName">Get name</button>

      <br /><br />

      <div class="form-control">
        <input type="number" v-model="age" />
      </div>

      <button class="btn" @click="getAge">Get age</button>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue';

const name = ref(null);
const age = ref('');

const framework = ref('VueJS');
const version = ref(2);

const car = ref({
  year: 2020,
  brand: 'Mazda',
});

const plane = reactive({
  passangers: 200,
  year: 2010,
});

const doubleVersion = computed(() => version.value * 2); // ComputedRefImpl

const tripleVersion = computed({
  get() {
    return version.value * 3;
  },
  set(value) {
    console.log('tripleVersion set', value);
  },
});

// watch(framework, (newVal, oldVal) => {
//   console.log('framework', newVal, oldVal);
// });

// watch(version, (newVal, oldVal) => {
//   console.log('version', newVal, oldVal);
// });

watch([framework, version], (newValues, oldValues) => {
  console.log('framework', newValues[0], oldValues[0]);
  console.log('version', newValues[1], oldValues[1]);
});

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

  tripleVersion.value = 100;
}

function getName() {
  console.log(name.value.value);
}

function getAge() {
  console.log(age.value);
}
</script>
