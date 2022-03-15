<template>
  <label for="news">
    <input v-model="inputValue" @change="addNewsItem" id="news" type="text" />
  </label>
</template>

<script>
export default {
  name: 'NewsInput',
  emits: ['add-news-item'],
  data() {
    return {
      inputValue: '',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis quia obcaecati incidunt dolores, deleniti quis veniam explicabo consequuntur ipsa tenetur, excepturi rerum? Rem culpa enim quidem, excepturi voluptatibus libero. Debitis.',
    };
  },
  methods: {
    addNewsItem() {
      this.$emit('add-news-item', { title: this.inputValue, text: this.text });
      this.inputValue = '';
    },
  },
};
</script>

<style lang="scss" scoped></style>
