<template>
  <h2>Актуальные новости на {{ now }}</h2>
  <h3>Открыто: {{ openCount }} раз</h3>

  <NewsInput @addNewsItem="addNewsItem" />
  <NewsList
    :openCount="openCount"
    :news="news"
    @removeNewsItem="removeNewsItem"
    @growOpenCounter="growOpenCounter"
  />
</template>

<script>
import NewsList from './components/NewsList.vue';
import NewsInput from './components/NewsInput.vue';

export default {
  name: 'App',
  components: {
    NewsList,
    NewsInput,
  },
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        {
          title: 'Cat was born',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, placeat.',
        },
        {
          title: 'Vue 3 is working',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium totam atque harum consequatur nihil facere.',
        },
      ],
      openCount: 0,
    };
  },
  methods: {
    addNewsItem(newsObj) {
      this.news.push(newsObj);
    },
    removeNewsItem(newsObj) {
      this.news = this.news.filter((newsItem) => newsItem.title !== newsObj.title);
    },
    growOpenCounter(newOpenCount) {
      this.openCount = newOpenCount;
    },
  },
};
</script>

<style lang="scss"></style>
