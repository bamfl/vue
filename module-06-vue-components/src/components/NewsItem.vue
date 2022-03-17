<template>
  <div class="row items-center">
    <h3>{{ newsItem.title }}</h3>
    <NewsButton @btnClick="toggleNewsItem" color="open">{{ isOpen ? 'Close' : 'Open' }}</NewsButton>
    <NewsButton @btnClick="removeNewsItem" color="close">x</NewsButton>
  </div>

  <div v-if="isOpen">
    {{ newsItem.text }}
    <hr />
    <div>All news:</div>
    <NewsItemList></NewsItemList>
  </div>
</template>

<script>
import NewsItemList from './NewsItemList.vue';
import NewsButton from './NewsButton.vue';

export default {
  components: { NewsButton, NewsItemList },
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

<style lang="scss" scoped></style>
