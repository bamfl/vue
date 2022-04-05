<template>
  <div class="card">
    <h1>Vue Composition Api. {{ title }}</h1>
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

    <button
      class="btn"
      @click="changeTitle"
    >
      Изменить заголовок
    </button>

    <br><br>
  </div>
</template>

<script setup>
import { computed, inject, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

const title = inject('title');

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

function changeTitle() {
  title.value = 'Hihihihi';
}

// Lifecycle Hooks:
console.log('created');

onBeforeMount(() => console.log('onBeforeMount'));

onMounted(() => console.log('onMounted'));

onBeforeUpdate(() => console.log('onBeforeUpdate'));

onUpdated(() => console.log('onUpdated'));

onBeforeUnmount(() => console.log('onBeforeUnmount'));

onUnmounted(() => console.log('onUnmounted'));
</script>

<style lang="scss" scoped></style>
