<template>
  <div class="card card-w70">
    <div v-if="content.length">
      <div v-for="item in content" :key="item.id">
        <component :item="item" :is="componentName(item.type)"></component>
      </div>
    </div>

    <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
import ResumeTitle from './ResumeTitle.vue';
import ResumeSubtitle from './ResumeSubtitle.vue';
import ResumeAvatar from './ResumeAvatar.vue';
import ResumeText from './ResumeText.vue';

export default {
  props: {
    content: Array,
  },
  methods: {
    componentName(type) {
      return `Resume${type[0].toUpperCase() + type.slice(1)}`;
    },
  },
  components: { ResumeTitle, ResumeSubtitle, ResumeAvatar, ResumeText },
};
</script>

<style lang="scss" scoped></style>
