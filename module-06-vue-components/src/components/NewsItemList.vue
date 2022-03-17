<template>
  <ul>
    <li
      v-for="newsItem in news"
      :key="newsItem"
      @click="newsItem.title = 'hihihi'"
      @keydown.enter="newsItem.title = 'hihihi'"
    >
      - {{ newsItem.title }}
    </li>
  </ul>
</template>

<script>
export default {
  inject: ['news'],
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}
</style>
