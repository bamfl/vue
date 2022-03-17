<template>
  <button :class="['btn', color]" @click="$emit('btnClick')">
    <slot />
  </button>
</template>

<script>
export default {
  emits: ['btnClick'],
  props: {
    color: {
      type: String,
      default: '',
      validator(value) {
        return ['open', 'close'].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.open {
  background: rgb(19, 161, 119);
  color: white;
  margin: 0 0 0 10px;
  cursor: pointer;
  border-radius: 5px;
}
.close {
  cursor: pointer;
  margin: 0 0 0 10px;
  border-radius: 50%;
  background: rgb(218, 59, 59);
  color: white;
  border: none;
  width: 22px;
  height: 22px;
}
</style>
