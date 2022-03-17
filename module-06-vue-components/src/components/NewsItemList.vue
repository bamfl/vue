<template>
  <ul>
    <li v-for="newsItem in news" :key="newsItem">
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
