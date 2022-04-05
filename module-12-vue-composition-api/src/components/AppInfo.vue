<template>
  <div class="card">
    <h1>Vue Composition Api</h1>
    {{ props.framework }}
    <hr>
    <p>
      Название: <strong>{{ props.framework }}</strong>
    </p>
    <p>
      Версия: <strong>{{ props.version }} ({{ doubleVersion }}) ({{ tripleVersion }})</strong>
    </p>

    <div class="row">
      <div class="mr-10">
        {{ props.car.year }}
      </div>
      <div>{{ props.car.brand }}</div>
    </div>

    <div class="row">
      <div class="mr-10">
        {{ props.plane.passangers }}
      </div>
      <div>{{ props.plane.year }}</div>
    </div>

    <br>

    <button
      class="btn"
      @click="change"
    >
      Изменить
    </button>

    <br><br>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  framework: {
    type: String,
    required: true,
  },
  version: {
    type: Number,
    required: true,
  },
  car: {
    type: Object,
    required: true,
  },
  plane: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['changeInfo']);

const doubleVersion = computed(() => props.version * 2); // ComputedRefImpl

const tripleVersion = computed({
  get() {
    return props.version * 3;
  },
  set(value) {
    console.log('tripleVersion set', value);
  },
});

function change() {
  emit('changeInfo');
}
</script>

<style lang="scss" scoped></style>
