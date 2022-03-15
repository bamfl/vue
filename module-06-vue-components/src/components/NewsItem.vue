<template>
  <div class="row items-center">
    <h3>{{ newsItem.title }}</h3>
    <button @click="toggleNewsItem" class="open">{{ isOpen ? 'Close' : 'Open' }}</button>
    <button @click="removeNewsItem" class="delete">x</button>
  </div>

  <div v-if="isOpen">
    {{ newsItem.text }}
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  emits: ['remove-news-item', 'grow-open-counter'],
  props: {
    newsItem: Object,
    listOpenCount: Number,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleNewsItem() {
      if (!this.isOpen) {
        this.$emit('grow-open-counter', this.itemOpenCount);
      }
      this.isOpen = !this.isOpen;
    },
    removeNewsItem() {
      this.$emit('remove-news-item', this.newsItem);
    },
  },
  computed: {
    itemOpenCount() {
      return this.listOpenCount + 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.delete {
  cursor: pointer;
  margin: 0 0 0 10px;
  border-radius: 50%;
  background: rgb(218, 59, 59);
  color: white;
  border: none;
  width: 22px;
  height: 22px;
}
.open {
  background: rgb(19, 161, 119);
  color: white;
  margin: 0 0 0 10px;
  cursor: pointer;
}
</style>
