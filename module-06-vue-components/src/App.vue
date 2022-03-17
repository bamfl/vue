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

  <hr />

  <h2>Slots</h2>
  <h3>Not-named slot:</h3>
  <SlotSimple />
  <SlotSimple>
    <p>Inner slot content</p>
  </SlotSimple>

  <h3>Named:</h3>
  <SlotNamed></SlotNamed>
  <SlotNamed>
    <div>Not-named slot</div>

    <template v-slot:header>
      <div>Header</div>
    </template>

    <template v-slot:text>
      <div>Text</div>
    </template>

    <!-- v-slot: === # -->
    <template #footer>
      <div>Footer</div>
    </template>
  </SlotNamed>

  <h3>Именованные слоты с props</h3>
  <SlotNamedWithProps>
    <template v-slot:default="{ item, idx }">
      <div>IDX:{{ idx }}</div>
      <div>ITEM: {{ item }}</div>
    </template>
  </SlotNamedWithProps>
</template>

<script>
import { computed } from 'vue';
import SlotNamedWithProps from './components/SlotNamedWithProps.vue';
import SlotNamed from './components/SlotNamed.vue';
import SlotSimple from './components/SlotSimple.vue';
import NewsList from './components/NewsList.vue';
import NewsInput from './components/NewsInput.vue';

export default {
  name: 'App',
  components: {
    NewsList,
    NewsInput,
    SlotSimple,
    SlotNamed,
    SlotNamedWithProps,
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
  provide() {
    return {
      news: computed(() => this.news),
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
