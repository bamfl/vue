<template>
  <form class="card card-w30" @submit.prevent="addBlock">
    <div class="form-control">
      <label for="type">Тип блока</label>

      <select v-model="type" id="type">
        <option value="title">Заголовок</option>
        <option value="subtitle">Подзаголовок</option>
        <option value="avatar">Аватар</option>
        <option value="text">Текст</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea v-model="text" id="value" rows="3"></textarea>
    </div>

    <button class="btn primary" :disabled="text.length < 3">Добавить</button>
  </form>
</template>

<script>
export default {
  emits: ['add-block'],
  data() {
    return {
      text: '',
      type: 'title'
    };
  },
  methods: {
    addBlock() {
      this.$emit('add-block', {
        id: Date.now(),
        type: this.type,
        text: this.text,
      });

      this.type = 'title';
      this.text = '';
    }
  }
};
</script>

<style lang="scss" scoped></style>
