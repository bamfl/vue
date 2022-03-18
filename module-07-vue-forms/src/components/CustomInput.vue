<template>
  <div class="form-control">
    <input type="text" @input="change" :value="modelValue" />
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
  },
  methods: {
    change(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
