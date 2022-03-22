<template>
  <div>
    <div class="container row">
      <ResumeForm @add-block="addBlock" />
      <ResumeContent :content="content" />
    </div>

    <ResumeComments />
  </div>
</template>

<script>
import ResumeForm from './components/ResumeForm.vue';
import ResumeContent from './components/ResumeContent.vue';
import ResumeComments from './components/ResumeComments.vue';

export default {
  components: { ResumeForm, ResumeContent, ResumeComments },
  data() {
    return {
      content: [],
    };
  },
  methods: {
    addBlock(block) {
      this.content.push(block);
    },
  },
};
</script>

<style>
.avatar {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

.avatar img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}
</style>
