<template>
  <local-component />
  <global-component />
</template>

<script>
import LocalComponent from './components/LocalComponent.vue';

export default {
  components: { LocalComponent },
  name: 'App',
};
</script>

<style lang="scss"></style>
