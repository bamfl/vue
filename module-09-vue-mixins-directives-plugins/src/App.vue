<template>
  <div class="container">
    <div class="form-control">
      <input v-focus type="text" />
    </div>

    <AppAlert type="primary" closable>
      <template v-slot:title>Title</template>
      <template v-slot:text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, cupiditate.</template>
    </AppAlert>

    <AppAlert1 type="primary" closable>
      <template v-slot:title>Title</template>
      <template v-slot:text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, cupiditate.</template>
    </AppAlert1>
  </div>
</template>

<script>
import AppAlert1 from './components/AppAlert1.vue';
import AppAlert from './components/AppAlert.vue';
import VFocus from './directives/VFocus.js';

export default {
  components: { AppAlert, AppAlert1 },
  directives: {
    focus: VFocus
  }
};
</script>
