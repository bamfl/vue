<template>
  <div class="container">
    <AppAlert 
      type="primary"
      closable
    >
      <template v-slot:title>Title</template>
      <template v-slot:text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, cupiditate.</template>
    </AppAlert>

    <AppAlert1 
      type="primary"
      closable
    >
      <template v-slot:title>Title</template>
      <template v-slot:text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, cupiditate.</template>
    </AppAlert1>
  </div>

</template>

<script>
import AppAlert1 from './components/AppAlert1.vue'
import AppAlert from './components/AppAlert.vue';

export default {
  components: { AppAlert, AppAlert1 },
}
</script>

