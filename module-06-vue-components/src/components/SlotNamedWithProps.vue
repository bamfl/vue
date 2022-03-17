<template>
  <ul>
    <li v-for="(item, idx) in 5" :key="item">
      <slot :item="item" :idx="idx"></slot>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
