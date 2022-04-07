<template>
  <header class="navbar">
    <div>Vue Composition Api.</div>

    <div>
      Counter: {{ counter }} ({{ doubleCounter }})
      <button
        class="btn primary"
        @click="increment"
      >
        Increment
      </button>
    </div>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">
          Главная
        </router-link>
      </li>
      <li>
        <router-link to="/reuse">
          Переиспользование
        </router-link>
      </li>
    </ul>
  </header>

  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const counter = computed(() => store.state.counter);
const doubleCounter = computed(() => store.getters.doubleCounter);
const increment = (() => store.commit('increment'));

</script>
