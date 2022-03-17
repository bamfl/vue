<template>
  <button :class="['btn', status]" @click="$emit('btnClick')">
    <slot />
  </button>
</template>

<script>
export default {
  emits: ['btnClick'],
  props: {
    status: {
      type: String,
      default: '',
      validator(value) {
        return ['active', ''].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  border-radius: 5px;

  & + .btn {
    margin: 0 0 0 10px;
  }
}
.active {
  background: rgb(19, 161, 119);
  color: white;
  cursor: pointer;
}
</style>
