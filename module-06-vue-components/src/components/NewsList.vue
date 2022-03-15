<template>
  <div v-for="newsItem in news" :key="newsItem">
    <NewsItem
      :newsItem="newsItem"
      :listOpenCount="listOpenCount"
      @removeNewsItem="removeNewsItem"
      @growOpenCounter="growOpenCounter"
    />
  </div>
</template>

<script>
import NewsItem from './NewsItem.vue';

export default {
  name: 'NewsList',
  emits: ['remove-news-item', 'grow-open-counter'],
  props: {
    news: Array,
    openCount: Number,
  },
  data() {
    return {};
  },
  components: { NewsItem },
  methods: {
    removeNewsItem(newsObj) {
      this.$emit('remove-news-item', newsObj);
    },
    growOpenCounter(newOpenCount) {
      this.$emit('grow-open-counter', newOpenCount);
    },
  },
  computed: {
    listOpenCount() {
      return this.openCount;
    },
  },
};
</script>

<style lang="scss" scoped></style>
