<template>
  <h2>Актуальные новости на {{ now }}</h2>
  <h3>Открыто: {{ openCount }} раз</h3>

  <NewsInput @addNewsItem="addNewsItem" />
  <NewsList
    ref="newsList"
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

  <hr />

  <h2>Динамические и асинхронные компоненты</h2>
  <h3>Tabs</h3>

  <ToggleButton :status="activeTab === 'One' ? 'active' : ''" @btnClick="activeTab = 'One'">
    One
  </ToggleButton>

  <ToggleButton :status="activeTab === 'Two' ? 'active' : ''" @btnClick="activeTab = 'Two'">
    Two
  </ToggleButton>

  <div>
    <TabOneContent v-if="activeTab === 'One'"></TabOneContent>
    <TabTwoContent v-else-if="activeTab === 'Two'"></TabTwoContent>
  </div>

  <keep-alive>
    <component :is="activeTabComponentName"></component>
  </keep-alive>
</template>

<script>
import { computed } from 'vue';
import TabTwoContent from './components/TabTwoContent.vue';
import TabOneContent from './components/TabOneContent.vue';
import ToggleButton from './components/ToggleButton.vue';
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
    ToggleButton,
    TabOneContent,
    TabTwoContent,
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
      activeTab: 'One',
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
  computed: {
    activeTabComponentName: {
      get() {
        return `Tab${this.activeTab}Content`;
      },
      set(value) {
        this.activeTab = value;
      },
    },
  },
  mounted() {
    this.activeTabComponentName = 'Two';
    console.log(this.$refs.newsList);
  },
};
</script>

<style lang="scss"></style>
