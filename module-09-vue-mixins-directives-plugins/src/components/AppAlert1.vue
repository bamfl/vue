<template>
  <div v-if="alert" class="alert primary">
    <h2>
      <slot name="title"></slot>
    </h2>
    <p>
      <slot name="text"></slot>
    </p>

    <button 
      v-if="closable" 
      :class="['btn', type]"
      @click="closeAlert"
    >
      Закрыть
    </button>
  </div>

  <div>
    <button @click="toggleAlert" class="btn primary">{{ alert ? 'Закрыть' : 'Открыть'}} сообщение</button>
  </div> 
</template>

<script>
import AlertMixin from '../mixins/AlertMixin.js';

export default {
  mixins: [AlertMixin]
};
</script>

<style lang="scss" scoped></style>
