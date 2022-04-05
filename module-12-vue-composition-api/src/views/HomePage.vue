<template>
  <div class="card">
    <AppInfo
      :framework="framework"
      :version="version"
      :car="car"
      :plane="plane"
      @change-info="changeInfo"
    />

    <div class="form-control">
      <label for="name"><input
        id="name"
        ref="name"
        type="text"
      ></label>
    </div>

    <button
      class="btn"
      @click="getName"
    >
      Get name
    </button>

    <br><br>

    <div class="form-control">
      <label for="age"><input
        id="age"
        v-model="age"
        type="number"
      ></label>
    </div>

    <button
      class="btn"
      @click="getAge"
    >
      Get age
    </button>
  </div>
</template>

<script setup>
import { reactive, ref, watch, provide } from 'vue';
import AppInfo from '../components/AppInfo.vue';

const title = ref('Hello from provide');
provide('title', title);

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
  title.value = 'Hello from provide!!!';
}

function getName() {
  console.log(name.value.value);
}

function getAge() {
  console.log(age.value);
}
</script>

<style lang="scss" scoped>

</style>
